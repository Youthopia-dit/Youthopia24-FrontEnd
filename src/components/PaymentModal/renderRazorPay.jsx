import { useEffect } from 'react';
import axios from 'axios';
import crypto from 'crypto-js';
import Properties from '../../properties.json';

// Function to load the Razorpay script dynamically
const loadRazorpayScript = (src) => new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
});

const RenderRazorpay = ({ orderId, keyId, keySecret, amount, currency, name, events, email, phone, onClose }) => {

    // Function to handle the display of the Razorpay modal
    const displayRazorpay = async () => {
        const scriptLoaded = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!scriptLoaded) {
            console.error('Failed to load Razorpay SDK');
            return;
        }

        const options = {
            key: keyId,
            amount: amount,
            currency: currency,
            name: 'Youthopia 24',
            description: 'Event Registration Fee',
            order_id: orderId,
            prefill: {
                name: name,
                email: email,
                contact: phone,
            },
            handler: async (response) => await handlePaymentSuccess(response),
            modal: {
                ondismiss: () => handleModalDismiss(),
                confirm_close: true,
            },
            theme: {
                color: '#F37254'
            },
            timeout: 600,
            retry: {
                enabled: false,
            }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    // Handles successful payment
    const handlePaymentSuccess = async (response) => {
        console.log('Payment successful:', response);
        const signatureData = `${orderId}|${response.razorpay_payment_id}`;
        const generatedSignature = crypto.HmacSHA256(signatureData, keySecret).toString();

        if (generatedSignature === response.razorpay_signature) {
            try {
                const res = await axios.post(`${Properties.base_url}/api/payment/capturePayment`, {
                    orderDetails: {
                        orderId,
                        paymentId: {current:response.razorpay_payment_id},
                        signature: generatedSignature
                    },
                    status: 'succeeded',
                    registrationIDs: events
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (res.status === 200) {
                    onClose('succeeded');
                } else {
                    onClose('failed');
                }
            } catch (error) {
                console.error('Error capturing payment:', error);
                onClose('failed');
            }
        } else {
            onClose('failed');
            console.error('Signature mismatch, transaction may be tampered');
        }
    };

    // Handles the closing of the modal
    const handleModalDismiss = () => {
        onClose('cancelled');
    };

    useEffect(() => {
        displayRazorpay();
        console.log('Razorpay script loaded');
    }, [orderId]);

    return null;
};

export default RenderRazorpay;