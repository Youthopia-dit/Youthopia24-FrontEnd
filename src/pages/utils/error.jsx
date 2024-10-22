import './error.css';
import imgL from '../../assets/LeftImg.png'
import imgR from '../../assets/RightImg.png'
import imgLC from '../../assets/FrameLC.png'
import errorimage from '../../assets/error1.png'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

export default function error() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    };

return (
        <>
            <div className="Aboutsection">
                <button className='back-button' onClick={handleBack}>
                    <IoArrowBack size={24} /> Back
                </button>
                <div className="background-div">
                    <img className='imgLeftCorner' src={imgLC}></img>
                    <img className='imageLeft' src={imgL}></img>
                    <img className='imageRight' src={imgR}></img>
                </div>
                <div className="error-main">
                    <img className="errorimg" src={errorimage}></img>
                    <h2>ERROR</h2>
                    <h3> Page not found</h3>
                </div>
            </div>
        </>
    )
}

