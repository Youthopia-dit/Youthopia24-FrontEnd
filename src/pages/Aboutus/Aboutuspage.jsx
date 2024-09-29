
import React from 'react'
import './Aboutuspage.css';
import ditlogo from '../../logos/ditlogo.jpg';
import download from '../../logos/download.jpeg';
import download1 from '../../logos/download1.jpeg';




export default function Aboutuspage() {
    return (
        <>
            <nav>
                <div className="navbar">
                    <ul>
                            <li><a href="#">EVENTS</a></li>
                            <li><a href="#">OUR TEAM</a></li>
                            <li><a href="#"><img src={ditlogo}></img></a></li>
                            <li><a href="#">ABOUT US</a></li>
                       
                            <li><a href="#">SIGN IN</a></li>
                    </ul>
                </div>

            </nav>
            <div className="Aboutsection">
                <div className="aboutus">
                    <h2>About Us</h2>
                </div>
                <div className="containermain1">
                    <div className="container1">
                        <h3 align="center">About Youthopia
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam velit perferendis nobis aliquam natus maxime magni quidem placeat, tempora quod esse adipisci cum ullam, mollitia eveniet dicta rem inventore!
                            Esse, debitis animi. Autem sunt natus in, possimus tempora asperiores, obcaecati dicta enim unde voluptate perferendis voluptates ullam nemo similique, facilis earum eligendi aspernatur. Facilis minus earum officia magnam perspiciatis?
                            Quae quibusdam maxime, quis repellat, tempore impedit assumenda velit aliquam autem nisi porro? Porro autem magni officia minus et numquam suscipit doloremque quam officiis quo assumenda, placeat laboriosam. Saepe, odit.
                        </h3>

                    </div>
                    <div className="container2">
                       <img src={download1}></img>

                    </div>
                </div>
                <div className="associationtext">
                    <h2 align="center">  IN ASSOCIATION WITH </h2>
                </div>
                <div className="sponsorlogo">
                    <div className="logo1">
                    <img src={download1}></img>

                    </div>

                    <div className="logo2">
                    <img src={download1}></img>

                    </div>
                    <div className="logo3">
                    <img src={download1}></img>
                    

                    </div> 
                    <div className="logo4">
                    <img src={download1}></img>

                    </div>
                     <div className="logo5">
                     <img src={download1}></img>

                    </div>
                    {/* <div className="logo6">

                    </div>  */}

                </div>

                <div className="containermain2">
                    <div className="container3">
                        <h3 align="center">DIT Logo</h3>
                        <img src={download1}></img>

                    </div>
                    <div className="container4">
                        <h3 align="center">About Dit University</h3>
                        <img src={download1}></img>
                        <button id="knowmore" type="submit">Know More</button>

                    </div>
                </div>

                <div className="fromthedesktext">
                    <h2 align="center">  FROM THE DESK</h2>
                </div>

                <div className="containermain3">
                    <div className="container5">
                        <h3 align="center">DIT Logo</h3>
                        <img src={download1}></img>

                    </div>
                    <div className="container6">
                        <h3 align="center">About Dit University</h3>
                        <img src={download1}></img>


                    </div>
                </div>

                <div className="containermain4">
                <img src={download1}></img>

                </div>







            </div>
        </>
    )
}


