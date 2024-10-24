import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField } from '@mui/material';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const OtpModal = ({ email, otpModalOpen, setOtpModalOpen, onOtpVerification }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');
    const [otp, setOtp] = useState('');
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const [countdown, setCountdown] = useState(30);
    const [otpResendTrigger, setOtpResendTrigger] = useState(false);

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    useEffect(() => {
        let timer;
        if (otpModalOpen || otpResendTrigger) {
            setIsResendDisabled(true);
            setCountdown(30);  // Reset countdown

            timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev > 1) return prev - 1;
                    clearInterval(timer);
                    setIsResendDisabled(false);
                    return 0;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [otpModalOpen, otpResendTrigger]);

    const handleOtpSubmit = async () => {
        try {
            const res = await axios.post('https://27.123.248.68:4000/api/user/verifyOtp', { userOtp: otp, email });
            if (res.status === 200) {
                onOtpVerification(true);
                setSnackbarMessage('Email verified successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                setOtpModalOpen(false);
            }
        } catch (error) {
            setSnackbarMessage(error.response?.data?.message || 'Failed to verify OTP. Please try again.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleResendOtp = async () => {
        try {
            const res = await axios.post('https://27.123.248.68:4000/api/user/sendOtp', { email });
            setSnackbarMessage(res.data.message);
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            setIsResendDisabled(true);
            setOtpResendTrigger(!otpResendTrigger);  
            setCountdown(30); // Restart countdown after resending OTP
        } catch (error) {
            setSnackbarMessage(error.response?.data?.message || 'Failed to resend OTP. Please try again.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    return (
        <>
            <Modal open={otpModalOpen} onClose={() => setOtpModalOpen(false)} aria-labelledby="otp-modal-title">
                <Box className="otp-modal-box">
                    <h2>Enter OTP</h2>
                    <p>OTP has been sent to {email}. Please enter it to verify your email.</p>
                    <TextField
                        label="OTP"
                        variant="outlined"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <button onClick={handleOtpSubmit} className="submit-btn">Submit</button>
                    <button
                        onClick={handleResendOtp}
                        className="submit-btn"
                        disabled={isResendDisabled}
                    >
                        {isResendDisabled ? `Resend OTP (${countdown}s)` : 'Resend OTP'}
                    </button>
                </Box>
            </Modal>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default OtpModal;
