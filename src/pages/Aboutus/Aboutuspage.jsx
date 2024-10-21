
import React from 'react'
import { useRef, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import './Aboutuspage.css';
import ditlogo from '../../logos/ditlogo.jpg';
import imgL from '../../assets/LeftImg.png'
import imgR from '../../assets/RightImg.png'
import imgLC from '../../assets/FrameLC.png'
import imgRC from '../../assets/FrameR.png'
import imgB from '../../assets/FrameB.png'
import LOGOIMG from '../../logos/DITLOGOIMG.png'
import professor1 from '../../logos/prof1.png'
import professor2 from '../../logos/prof2.png'
import youthopiawhitelogo from '../../logos/logoyouthopia.png'
import download1 from '../../logos/download1.jpeg';

var list = [{ id: 1, img: download1 },
{ id: 2, img: download1 },
{ id: 3, img: download1 },
{ id: 4, img: download1 },
{ id: 5, img: download1 }];


export default function Aboutuspage() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)


    const [showReadMoreButton, setShowReadMoreButton] = useState(false)


    return (
        <>
            <Navbar />
            <div div className="Aboutsection">
                <div className="background-div">
                    <img className='ImgLeftCorner' src={imgLC}></img>
                    <img className='imageLeft' src={imgL}></img>
                    <img className='imageRight' src={imgR}></img>
                    {/* <img className='FrameR' src={imgRC}></img>
                <img className='FrameB' src={imgB}></img> */}
                    {/* <img className='imageRB' src={imgRC}></img> */}
                </div>

                <div className="about-us-content">
                    <h2 className="aboutus">ABOUT YOUTHOPIA </h2>
                    <div className="about-youthopia-main">
                        <div div className="containermain2-text"> <p align="left">  Say goodbye to your usual college routine—mark your calendars because Youthopia'24 is coming back to DIT University! <br></br><br></br> This annual techno-cultural fest brings together tech innovators and creative artists, showcasing extraordinary talents and transforming participants into dynamic individuals. Last year, we saw huge participation from both within the university and other institutions, creating a vibrant atmosphere filled with competitive spirit. Youthopia'24 will offer a variety of events, blending entertainment with opportunities to highlight technical expertise.
                            Youthopia is a platform for everyone to express their creativity and passion. Join us on campus and let your true colors shine!
                        </p>
                        </div>

                        <div div className='containermain2-pic'>
                            <img  id='imgbg' src={youthopiawhitelogo}></img>
                        </div>

                    </div>



                    {/* <h2 align="center" className="associationtext"> In Association With </h2>

                <div className="sponsorlogo">
                    {list.map(el => <img className='sponsorImage' src={el.img}></img>)}
                </div> */}

                    <h2 align="center" className="associationtext">ABOUT DIT UNIVERSITY </h2>
                    <div className="containermain2">

                        <img className="containermain2-pic" src={LOGOIMG}></img>
                        <div className="containermain2-text">

                            <p className='text'>Established in 1998 by Shri Naveen Agarwal, DIT University in Dehradun, Uttarakhand, has grown into a leading institution recognized for its vision “Imagine Aspire Achieve.” Spread across 21 acres, it offers world-class infrastructure and a diverse range of programs in engineering, sciences, humanities, and more. With a focus on innovation, research, and a global outlook, DIT University empowers students with the skills to excel in their careers and make a meaningful impact on society.

                                <div className="knowmore">
                                    <a href="https://www.dituniversity.edu.in/" target="_blank">
                                        <button id='knowbtn' type="submit">Know More</button></a>
                                </div>
                            </p>
                        </div>
                    </div>


                    <h2 align="center" className="fromthedesktext">  FROM THE DESK</h2>

                    <div className="containermain3">
                        <div className="containermain2-pic">
                            <img src={professor1}></img>
                        </div>

                        <div className="containermain2-text">
                            <p align="left" > {isOpen ? <>
                                <span className="namebig"> Prof. G. Raghurama</span><br></br>
                                <span className="namesmall">Vice  Chancellor, DIT University</span><br></br><br></br>
                                I am thrilled to extend my best wishes for the upcoming Cultural Fest, ‘YOUTHOPIA’24,’ taking
                                place from November 12th to 14th, 2024. For the DIT University community, this eagerly awaited
                                celebration is a testament to the vibrant spirit of our students. The enthusiasm and energy you
                                bring to these days truly exemplify the essence of our institution.<br></br><br></br>
                                Events like YOUTHOPIA provide a wonderful platform for you to express your creativity and
                                interact with peers from other universities and institutes. Through your involvement in organizing

                                and participating in these events, you will gain valuable skills in time management, teamwork,
                                and leadership, as well as the ability to learn from challenges. YOUTHOPIA’24 offers countless
                                opportunities for your personal growth and development.
                                <br></br><br></br>

                                I encourage you to embrace the spirit of healthy competition, allowing it to inspire you to achieve your best. At the same time, remember that empathy, mutual respect, and collaboration are essential not only for success but for becoming exemplary individuals. Fun and discipline can coexist, and I urge you to balance both as you make the most of this experience.
                                The success of YOUTHOPIA’24 also depends on the dedication and support of our faculty members and staff. This festival is a wonderful occasion for the entire DIT University community—faculty, staff, and students—to come together and strengthen our bonds.<br></br><br></br>
                                As we embark on this journey of Youthopia’24, marking 25 years of Stellar Fusion, I wish you all the very best. Let’s make this fest a shining celebration of creativity and talent, one that brings pride to DIT University and leaves a lasting impression on everyone involved.<br></br><br></br>

                            </>


                                : <>
                                    <span className="namebig">Prof. G. Raghurama</span><br></br>
                                    <span className="namesmall">Vice  Chancellor, DIT University</span><br></br><br></br>
                                    I am thrilled to extend my best wishes for the upcoming Cultural Fest, ‘YOUTHOPIA’24,’ taking
                                    place from November 12th to 14th, 2024. For the DIT University community, this eagerly awaited
                                    celebration is a testament to the vibrant spirit of our students. The enthusiasm and energy you
                                    bring to these days truly exemplify the essence of our institution.<br></br><br></br>
                                    Events like YOUTHOPIA provide a wonderful platform for you to express your creativity and
                                    interact with peers from other universities and institutes. Through your involvement in organizing

                                    and participating in these events, you will gain valuable skills in time management, teamwork,
                                    and leadership, as well as the ability to learn from challenges. YOUTHOPIA’24 offers countless
                                    opportunities for your personal growth and development.
                                    <br></br><br></br></>}
                            </p>
                            <button id='knowbtn' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Read less...' : 'Read more...'}</button>
                        </div>


                    </div>


                    <div className="containermain4">
                        <div className="containermain2-text">
                            <p align="left">{isOpen1 ? <>

                                <span className="namebig"> Dr. Rakesh Mohan</span><br></br>
                                <span className="namesmall">Dean Student Welfare</span><br></br><br></br>

                                DIT University is not merely commemorating 25 years of excellence; we are embarking on an extraordinary journey with 'YOUTHOPIA 2024.' This Techno-Cultural Fest promises to be a distinctive experience, where the sparks of creativity and innovation will illuminate the night sky.<br></br><br></br>
                                Whether you wish to explore the latest technological advancements, engage with diverse cultural expressions, or simply relax and enjoy the infectious enthusiasm of the event, Youthopia 2024 offers something for everyone. Join us for a captivating adventure that transcends the ordinary and embraces the extraordinary.

                                Your participation will undoubtedly add a special touch to this grand celebration. So, be sure to mark your calendars and get ready to be part of an unforgettable experience at 'YOUTHOPIA 2024.' We look forward to seeing you there!<br></br><br></br>


                            </>
                                : <>

                                    <span className="namebig">Dr. Rakesh Mohan</span><br></br>
                                    <span className="namesmall">Dean Student Welfare</span><br></br><br></br>

                                    DIT University is not merely commemorating 25 years of excellence; we are embarking on an extraordinary journey with 'YOUTHOPIA 2024.' This Techno-Cultural Fest promises to be a distinctive experience, where the sparks of creativity and innovation will illuminate the night sky.<br></br><br></br>
                                    Whether you wish to explore the latest technological advancements, engage with diverse cultural expressions, or simply relax and enjoy the infectious enthusiasm of the event, Youthopia 2024 offers something for everyone. Join us for a captivating adventure that transcends the ordinary and embraces the extraordinary.</>}
                            </p>
                            <button onClick={() => setIsOpen1(!isOpen1)}>{isOpen1 ? 'Read less...' : 'Read more...'}</button>
                        </div>

                        <div className="containermain2-pic">
                            <img id='imgbg2' src={professor2}></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    )
}


