import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './PaymentModal.css';
import axios from 'axios';
import RenderRazorpay from './renderRazorPay';
import Properties from '../../properties.json'

const PaymentModal = ({ open, onClose, registeredEvents, name, email, phone }) => {
    console.log("Events", registeredEvents);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [displayRazorpay, setDisplayRazorpay] = useState(false);
    const [orderDetails, setOrderDetails] = useState({
        orderId: null,
        currency: null,
        amount: null,
    });
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const handleSnackbarClose = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const handleCheckboxChange = (regID) => {
        if (selectedEvents.includes(regID)) {
            setSelectedEvents(selectedEvents.filter(id => id !== regID));
        } else {
            setSelectedEvents([...selectedEvents, regID]);
        }
    };

    const totalAmount = selectedEvents.reduce((total, regID) => {
        const event = registeredEvents.find(event => event.regID === regID);
        const amount = event ? Number(event.payment.amount) : 0;
        return total + amount;
    }, 0);

    const handlePayment = async () => {
        const body = {
            amount: totalAmount * 100
        };
        try {
            const res = await axios.post(`${Properties.base_url}/api/payment/order`, body, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log(res);

            if (res && res.data && res.data.order_id) {
                setOrderDetails({
                    orderId: res.data.order_id,
                    currency: res.data.currency,
                    amount: res.data.amount,
                });
                setDisplayRazorpay(true);
            }
        } catch (error) {
            setSnackbar({ open: true, message: 'Failed to initiate payment. Please try again.', severity: 'error' });
        }
    }

    const handleRazorpayClose = (status) => {
        setDisplayRazorpay(false);
        onClose();
        if (status === 'succeeded') {
            setSnackbar({ open: true, message: 'Payment Successful!', severity: 'success' });
        } else {
            setSnackbar({ open: true, message: 'Payment Failed. Please try again.', severity: 'error' });
        }
    };

    return (
        <>
            <Modal open={open} onClose={onClose}>
                <div className="modal-content">
                    <h2 className="modal-header">Payment</h2>
                    {registeredEvents.map(event => (
                        <div key={event.regID} className="event-item">
                            <label className="event-label">
                                <input
                                    type="checkbox"
                                    checked={selectedEvents.includes(event.regID)}
                                    onChange={() => handleCheckboxChange(event.regID)}
                                />
                                {event.eventDetails.eventName} - Amount: ₹{event.payment.amount}
                            </label>
                        </div>
                    ))}
                    <h3 className="total-amount">Total Amount: ₹{totalAmount}</h3>
                    <Button className="payment-button" onClick={handlePayment}>Proceed to Payment</Button>
                </div>
            </Modal>
            {displayRazorpay && (
                <RenderRazorpay
                    amount={orderDetails.amount}
                    currency={orderDetails.currency}
                    orderId={orderDetails.orderId}
                    keyId="rzp_live_eblfVtJYrfOJ76"
                    keySecret="sUEm9h538MwyaSRdjCoiB38D"
                    events={selectedEvents}
                    name={name}
                    email={email}
                    phone={phone}
                    onClose={handleRazorpayClose}
                />)
            }
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default PaymentModal;
