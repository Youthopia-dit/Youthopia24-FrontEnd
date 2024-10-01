
import React from 'react'
import './Aboutuspage.css';
import ditlogo from '../../logos/ditlogo.jpg';

import download1 from '../../logos/download1.jpeg';

var list = [{ id: 1, img: download1 },
{ id: 2, img: download1 },
{ id: 3, img: download1 },
{ id: 4, img: download1 },
{ id: 5, img: download1 }];


export default function Aboutuspage() {

    return (



        <div div className="Aboutsection">
            <h2 className="aboutus">About Us </h2>
            <div className="about-youthopia-main">
                <h3 align="center">About Youthopia
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam velit perferendis nobis aliquam natus maxime magni quidem placeat, tempora quod esse adipisci cum ullam, mollitia eveniet dicta rem inventore!
                    Esse, debitis animi. Autem sunt natus in, possimus tempora asperiores, obcaecati dicta enim unde voluptate perferendis voluptates ullam nemo similique, facilis earum eligendi aspernatur. Facilis minus earum officia magnam perspiciatis?
                    Quae quibusdam maxime, quis repellat, tempore impedit assumenda velit aliquam autem nisi porro? Porro autem magni officia minus et numquam suscipit doloremque quam officiis quo assumenda, placeat laboriosam. Saepe, odit.
                </h3>
                <img src={download1}></img>
            </div>


            <h2 align="center" className="associationtext">  IN ASSOCIATION WITH </h2>

            <div className="sponsorlogo">
                {list.map(el => <img className='sponsorImage' src={el.img}></img>)}
            </div>


            <div className="containermain2">
                <img src={download1}></img>
                <h3 align="center">About Youthopia
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam velit perferendis nobis aliquam natus maxime magni quidem placeat, tempora quod esse adipisci cum ullam, mollitia eveniet dicta rem inventore!
                    Esse, debitis animi. Autem sunt natus in, possimus tempora asperiores, obcaecati dicta enim unde voluptate perferendis voluptates ullam nemo similique, facilis earum eligendi aspernatur. Facilis minus earum officia magnam perspiciatis?
                    Quae quibusdam maxime, quis repellat, tempore impedit assumenda velit aliquam autem nisi porro? Porro autem magni officia minus et numquam suscipit doloremque quam officiis quo assumenda, placeat laboriosam. Saepe, odit.

                </h3>



            </div>
            <div className="knowmore">
                <button type="submit">Know More</button>
            </div>


            <h2 align="center" className="fromthedesktext">  FROM THE DESK</h2>

            <div className="containermain3">

                <img src={download1}></img>


                <h3 align="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus in ipsum, sit maxime adipisci distinctio molestias. Distinctio, et. Consectetur, provident atque excepturi recusandae suscipit debitis nesciunt fugiat corrupti magnam exercitationem?
                    Facilis rerum error cupiditate a labore cumque debitis similique r sit amet consectetur adipisicing elit. Omnis magnam velit perferendis nobis aliquam natus maxime magni quidem placeat, tempora quod esse adipisci cum ullam, mollitia eveniet dicta rem inventore!
                    Esse, debitis animi. Autem sunt natus in, possimus tempora asperiores, obcaecati dicta enim aspernatur, odio maiores corporis rerum?</h3>



            </div>

            <div className="containermain4">
                <h3 align="center">About Youthopia
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam velit perferendis nobis aliquam natus maxime magni quidem placeat, tempora quod esse adipisci cum ullam, mollitia eveniet dicta rem inventore!
                    Esse, debitis animi. Autem sunt natus in, possimus tempora asperiores, obcaecati dicta enim unde voluptate perferendis voluptates ullam nemo similique, facilis earum eligendi aspernatur. Facilis minus earum officia magnam perspiciatis?
                    Quae quibusdam maxime, quis repellat, tempore impedit assumenda velit aliquam autem nisi porro? Porro autem magni officia minus et numquam suscipit doloremque quam officiis quo assumenda, placeat laboriosam. Saepe, odit.
                </h3>
                <img src={download1}></img>
            </div>



            <div className="containermain5">
                <img src={download1}></img>

            </div>
        </div>






    )
}


