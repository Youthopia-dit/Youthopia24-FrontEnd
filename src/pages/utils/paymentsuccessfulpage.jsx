import './error.css';
import imgL from '../../assets/LeftImg.png'
import imgR from '../../assets/RightImg.png'
import imgLC from '../../assets/FrameLC.png'
import payments from '../../assets/success.png'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

export default function Paymentsuccessfull() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    };
    return (
        <>
            <div className="container-main">
                <button className='back-button' onClick={handleBack}>
                    <IoArrowBack size={24} /> Back
                </button>
                <div className="containerinside">
                    <img className='imgLeftCorner' src={imgLC}></img>
                    <img className='imageLeft' src={imgL}></img>
                    <img className='imageRight' src={imgR}></img>

                </div>
                <div className="payment-main">
                    <img className="succesimg" src={payments}></img>
                    <h2>PAYMENT SUCCESSFULL</h2>
                </div>
            </div>
        </>
    )
}
