import './error.css';
import imgL from '../../assets/LeftImg.png'
import imgR from '../../assets/RightImg.png'
import imgLC from '../../assets/FrameLC.png'
import paymentfail from '../../assets/failed.png'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

export default function Paymentfail() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    };

    return (
        <>
            <div className="container">
                <button className='back-button' onClick={handleBack}>
                    <IoArrowBack size={24} /> Back
                </button>
                <div className="container1">
                    <img className='imgLeftCorner' src={imgLC}></img>
                    <img className='imageLeft' src={imgL}></img>
                    <img className='imageRight' src={imgR}></img>
                </div>
                <div className="payment-fail">
                    <img className="failimg" src={paymentfail}></img>
                    <h2>PAYMENT FAIL</h2>

                </div>
            </div>



        </>
    )
}