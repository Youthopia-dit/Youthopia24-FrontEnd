
import React from 'react'
import './Aboutuspage.css';
import ditlogo from '../../logos/ditlogo.jpg';
//import Navbar from '../../components/Navbar/Navbar.jsx'
import imgL from '../../assets/LeftImg.png'
import imgR from '../../assets/RightImg.png'
import imgLC from '../../assets/FrameLC.png'
import imgRC from '../../assets/FrameR.png'
import imgB from '../../assets/FrameB.png'
import LOGOIMG from '../../logos/DITLOGOIMG.png'
import download1 from '../../logos/download1.jpeg';

var list = [{ id: 1, img: download1 },
{ id: 2, img: download1 },
{ id: 3, img: download1 },
{ id: 4, img: download1 },
{ id: 5, img: download1 }];


export default function Aboutuspage() {

    return (

        <div div className="Aboutsection">
            <div className="background-div">
                <img className='ImgLeftCorner' src={imgLC}></img>
                <img className='imageLeft' src={imgL}></img>
                <img className='imageRight' src={imgR}></img>
                <img className='FrameR' src={imgRC}></img>
                <img className='FrameB' src={imgB}></img>
                <img className='imageRB' src={imgRC}></img>
            </div>

            <div className="about-us-content">
                <h2 className="aboutus">ABOUT YOUTHOPIA </h2>
                <div className="about-youthopia-main">
                    <div div className="containermain2-text"> <p align="left">  Say goodbye to your usual college routine—mark your calendars because Youthopia'24 is coming back to DIT University! <br></br><br></br> This annual techno-cultural fest brings together tech innovators and creative artists, showcasing extraordinary talents and transforming participants into dynamic individuals. Last year, we saw huge participation from both within the university and other institutions, creating a vibrant atmosphere filled with competitive spirit. Youthopia'24 will offer a variety of events, blending entertainment with opportunities to highlight technical expertise.
                        Youthopia is a platform for everyone to express their creativity and passion. Join us on campus and let your true colors shine!
                    </p>
                    </div>

                    <div div className='containermain2-pic'>
                        <img src={download1}></img>
                    </div>

                </div>



                <h2 align="center" className="associationtext"> In Association With </h2>

                <div className="sponsorlogo">
                    {list.map(el => <img className='sponsorImage' src={el.img}></img>)}
                </div>

                <h2 align="center" className="associationtext">ABOUT DIT UNIVERSITY </h2>
                <div className="containermain2">

                    <img className="containermain2-pic" src={LOGOIMG}></img>
                    <div className="containermain2-text">
                        {/* <h3 className='heading'>About DIT University</h3> */}
                        <p className='text'>Established in 1998 by Shri Naveen Agarwal, DIT University in Dehradun, Uttarakhand, has grown into a leading institution recognized for its vision “Imagine Aspire Achieve.” Spread across 21 acres, it offers world-class infrastructure and a diverse range of programs in engineering, sciences, humanities, and more. With a focus on innovation, research, and a global outlook, DIT University empowers students with the skills to excel in their careers and make a meaningful impact on society.

                            <div className="knowmore">
                                <a href="https://www.dituniversity.edu.in/">
                                    <button type="submit">Know More</button></a>
                            </div>
                        </p>
                    </div>
                </div>


                <h2 align="center" className="fromthedesktext">  FROM THE DESK</h2>

                <div className="containermain3">
                    <div className="containermain2-pic">
                        <img src={download1}></img>
                    </div>

                    <div className="containermain2-text">
                        <p align="left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus in ipsum, sit maxime adipisci distinctio molestias. Distinctio, et. Consectetur, provident atque excepturi recusandae suscipit debitis nesciunt fugiat corrupti magnam exercitationem?
                            Facilis rerum error cupiditate a labore cumque debitis similique r sit amet consectetur adipisicing elit. Omnis magnam velit perferendis nobis aliquam natus maxime magni quidem placeat, tempora quod esse adipisci cum ullam, mollitia eveniet dicta rem inventore!
                            Esse, debitis animi. Autem sunt natus in, possimus tempora asperiores, obcaecati dicta enim aspernatur, odio maiores corporis rerum?</p>
                    </div>


                </div>

                <div className="containermain4">
                    <div className="containermain2-text">
                        <p align="left">About Youthopia
                            Say goodbye to your usual college routine—mark your calendars because Youthopia'24 is coming back to DIT University! This annual techno-cultural fest brings together tech innovators and creative artists, showcasing extraordinary talents and transforming participants into dynamic individuals. Last year, we saw huge participation from both within the university and other institutions, creating a vibrant atmosphere filled with competitive spirit. Youthopia'24 will offer a variety of events, blending entertainment with opportunities to highlight technical expertise.
                            Youthopia is a platform for everyone to express their creativity and passion. Join us on campus and let your true colors shine!

                        </p>
                    </div>
                    <div className="containermain2-pic">
                        <img src={download1}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}


