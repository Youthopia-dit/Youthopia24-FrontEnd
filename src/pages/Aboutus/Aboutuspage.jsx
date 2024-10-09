
import React from 'react'
import './Aboutuspage.css';
import ditlogo from '../../logos/ditlogo.jpg';
//import Navbar from '../../components/Navbar/Navbar.jsx'
import imgL from '../../assets/LeftImg.png'
import imgR from '../../assets/RightImg.png'
import imgLC from '../../assets/FrameLC.png'
import imgRC from '../../assets/FrameR.png'
import imgB from '../../assets/FrameB.png'

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
            <h2 className="aboutus">ABOUT US </h2>
            <div className="about-youthopia-main">
                 <div className="containermain2-text"> <p align="center">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam velit perferendis nobis aliquam natus maxime magni quidem placeat, tempora quod esse adipisci cum ullam, mollitia eveniet dicta rem inventore!
                    Esse, debitis animi. Autem sunt natus in, possimus tempora asperiores, obcaecati dicta enim unde voluptate perferendis voluptates ullam nemo similique, facilis earum eligendi aspernatur. Facilis minus earum officia magnam perspiciatis?
                    Quae quibusdam maxime, quis repellat, tempore impedit assumenda velit aliquam autem nisi porro? Porro autem magni officia minus et numquam suscipit doloremque quam officiis quo assumenda, placeat laboriosam. Saepe, odit.
                </p> 
                </div>
                <div className='containermain2-pic'>
                <img src={download1}></img>
                </div>
                
            </div>
           


            <h2 align="center" className="associationtext"> In Association With </h2>

            <div className="sponsorlogo">
                {list.map(el => <img className='sponsorImage' src={el.img}></img>)}
            </div>


            <div className="containermain2">
                <img className="containermain2-pic" src={download1}></img>
                <div className="containermain2-text">
                <h3 className='heading'>About DIT University</h3>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam velit perferendis nobis aliquam natus maxime magni quidem placeat, tempora quod esse adipisci cum ullam, mollitia eveniet dicta rem inventore!
                    Esse, debitis animi. Autem sunt natus in, possimus tempora asperiores, obcaecati dicta enim unde voluptate perferendis voluptates ullam nemo similique, facilis earum eligendi aspernatur. Facilis minus earum officia magnam perspiciatis?
                    Quae quibusdam maxime, quis repellat, tempore impedit assumenda velit aliquam autem nisi porro? Porro autem magni officia minus et numquam suscipit doloremque quam officiis quo assumenda, placeat laboriosam. Saepe, odit.
                   

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
                <p align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus in ipsum, sit maxime adipisci distinctio molestias. Distinctio, et. Consectetur, provident atque excepturi recusandae suscipit debitis nesciunt fugiat corrupti magnam exercitationem?
                    Facilis rerum error cupiditate a labore cumque debitis similique r sit amet consectetur adipisicing elit. Omnis magnam velit perferendis nobis aliquam natus maxime magni quidem placeat, tempora quod esse adipisci cum ullam, mollitia eveniet dicta rem inventore!
                    Esse, debitis animi. Autem sunt natus in, possimus tempora asperiores, obcaecati dicta enim aspernatur, odio maiores corporis rerum?</p>
                    </div>


            </div>

            <div className="containermain4">
            <div className="containermain2-text">
                <p align="center">About Youthopia
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam velit perferendis nobis aliquam natus maxime magni quidem placeat, tempora quod esse adipisci cum ullam, mollitia eveniet dicta rem inventore!
                    Esse, debitis animi. Autem sunt natus in, possimus tempora asperiores, obcaecati dicta enim unde voluptate perferendis voluptates ullam nemo similique, facilis earum eligendi aspernatur. Facilis minus earum officia magnam perspiciatis?
                    Quae quibusdam maxime, quis repellat, tempore impedit assumenda velit aliquam autem nisi porro? Porro autem magni officia minus et numquam suscipit doloremque quam officiis quo assumenda, placeat laboriosam. Saepe, odit.
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


