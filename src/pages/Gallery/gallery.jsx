import React, { useState } from 'react';
import './gallery.css';
import Navbar from '../../components/Navbar/navbar';
import H1 from "../../assets/Gallery/H1.jpg";
import H2 from "../../assets/Gallery/H2.jpg";
import H3 from "../../assets/Gallery/H3.jpg";
import H4 from "../../assets/Gallery/H4.jpg";
import H5 from "../../assets/Gallery/H5.jpg";
import H6 from "../../assets/Gallery/H6.jpg";
import H7 from "../../assets/Gallery/H7.jpg";
import H8 from "../../assets/Gallery/H8.jpg";
import H9 from "../../assets/Gallery/H9.jpg";
import H10 from "../../assets/Gallery/H10.jpg";
import H11 from "../../assets/Gallery/H11.jpg";
import H12 from "../../assets/Gallery/H12.jpg";
import H13 from "../../assets/Gallery/H13.jpg";
import H14 from "../../assets/Gallery/H14.jpg";
import H15 from "../../assets/Gallery/H15.jpg";
import H16 from "../../assets/Gallery/H16.jpg";
import H17 from "../../assets/Gallery/H17.jpg";
import H18 from "../../assets/Gallery/H18.jpg";
import H19 from "../../assets/Gallery/H19.jpg";
import H20 from "../../assets/Gallery/H20.jpg";
import H21 from "../../assets/Gallery/H21.jpg";
import H22 from "../../assets/Gallery/H22.jpg";
import H23 from "../../assets/Gallery/H23.jpg";
import H24 from "../../assets/Gallery/H24.jpg";
import H25 from "../../assets/Gallery/H25.jpg";
import H26 from "../../assets/Gallery/H26.jpg";
import H27 from "../../assets/Gallery/H27.jpg";
import H28 from "../../assets/Gallery/H28.jpg";
import H29 from "../../assets/Gallery/H29.jpg";
import V1 from "../../assets/Gallery/V1.jpg";
import V2 from "../../assets/Gallery/V2.jpg";
import V3 from "../../assets/Gallery/V3.jpg";
import V4 from "../../assets/Gallery/V4.jpg";
import V5 from "../../assets/Gallery/V5.jpg";
import V6 from "../../assets/Gallery/V6.jpg";
import V7 from "../../assets/Gallery/V7.jpg";
import V8 from "../../assets/Gallery/V8.jpg";
import V9 from "../../assets/Gallery/V9.jpg";
import V10 from "../../assets/Gallery/V10.jpg";
import V11 from "../../assets/Gallery/V11.jpg";
import V12 from "../../assets/Gallery/V12.jpg";
import V13 from "../../assets/Gallery/V13.jpg";

const imageList = [
    { src: H1, type: 'horizontal' }, { src: H2, type: 'horizontal' }, { src: H3, type: 'horizontal' },
    { src: V1, type: 'vertical' }, { src: H4, type: 'horizontal' }, { src: H5, type: 'horizontal' },
    { src: H6, type: 'horizontal' }, { src: H7, type: 'horizontal' }, { src: V2, type: 'vertical' },
    { src: H8, type: 'horizontal' }, { src: H9, type: 'horizontal' }, { src: H10, type: 'horizontal' },
    { src: V3, type: 'vertical' }, { src: H11, type: 'horizontal' }, { src: H12, type: 'horizontal' },
    { src: V4, type: 'vertical' }, { src: H13, type: 'horizontal' }, { src: H14, type: 'horizontal' },
    { src: H15, type: 'horizontal' }, { src: H16, type: 'horizontal' }, { src: V5, type: 'vertical' },
    { src: H17, type: 'horizontal' }, { src: V6, type: 'vertical' }, { src: H18, type: 'horizontal' },
    { src: H19, type: 'horizontal' }, { src: H20, type: 'horizontal' }, { src: H21, type: 'horizontal' },
    { src: V7, type: 'vertical' }, { src: H22, type: 'horizontal' }, { src: H23, type: 'horizontal' },
    { src: V8, type: 'vertical' }, { src: V9, type: 'vertical' }, { src: H24, type: 'horizontal' },
    { src: H25, type: 'horizontal' }, { src: V10, type: 'vertical' }, { src: H26, type: 'horizontal' },
    { src: H27, type: 'horizontal' }, { src: V11, type: 'vertical' }, { src: V12, type: 'vertical' },
    { src: V13, type: 'vertical' }, { src: H28, type: 'horizontal' }, { src: H29, type: 'horizontal' }
];

const Gallery = () => {
    return (
        <>
            <Navbar />

            <div className="gallery-container">
                {imageList.map((image, index) => (
                    <div key={index} className={`gallery-item ${image.type}`}>
                        <img src={image.src} alt={`Gallery img ${index + 1}`} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;