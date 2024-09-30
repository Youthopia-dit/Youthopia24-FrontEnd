import React from "react";
import './ProfilePage.css';
function ProfilePage(){
    return(
        <div className="ProfilePage">
            <div className="info">
                <div>
                <div className="image" >
                    <h3 className="heading">Profile photo</h3>
                </div>
                <div className="contact">
                    <h2>Phone</h2>
                    <h3>1234567890</h3>
                    <br />
                    <h2>Email</h2>
                    <h3>example@gmail.com</h3>
                </div>
                </div>
                <div className="mainheading">
                    <h2 className="text">Your Name : Name</h2>
                    {/* <h3>Name</h3> */}
                    <h2 className="text">College: DIT</h2>
                    {/* <h3>DIT</h3> */}
                    <h2 className="text">College ID: ID</h2>
                    {/* <h3>ID</h3> */}
                    <h2 className="text">Branch: CSE</h2>
                    {/* <h3>CSE</h3> */}
                    <h2 className="text">Year: 2nd</h2>
                    {/* <h3>2nd</h3> */}
                    <button className="button">Logout</button>
                </div>
            </div>
            <br />
            <br />
            <div>
                <h1 className="register">Registered events</h1>
                <div className="registered">
                    <img src="https://m.media-amazon.com/images/I/61QPLVPgSOL._SX679_.jpg" className="events"></img>
                    <img src="https://m.media-amazon.com/images/I/61QPLVPgSOL._SX679_.jpg" className="events"></img>
                    <img src="https://m.media-amazon.com/images/I/61QPLVPgSOL._SX679_.jpg" className="events"></img>
                    <img src="https://m.media-amazon.com/images/I/61QPLVPgSOL._SX679_.jpg" className="events"></img>
                    <img src="https://m.media-amazon.com/images/I/61QPLVPgSOL._SX679_.jpg" className="events"></img>
                    <img src="https://m.media-amazon.com/images/I/61QPLVPgSOL._SX679_.jpg" className="events"></img>
                    <img src="https://m.media-amazon.com/images/I/61QPLVPgSOL._SX679_.jpg" className="events"></img>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage