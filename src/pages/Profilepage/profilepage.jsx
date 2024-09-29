import React from "react";
import './ProfilePage.css';
function ProfilePage(){
    return(
        <div className="ProfilePage">
            <div className="info">
                <div>
                <div className="image" >
                    <h3 className="heading">Profile photo</h3>
                    <img src="https://m.media-amazon.com/images/I/61QPLVPgSOL._SX679_.jpg" className="inside"></img>
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
                    <h2>Your Name</h2>
                    <h3>Name</h3>
                    <h2>College</h2>
                    <h3>DIT</h3>
                    <h2>College ID</h2>
                    <h3>ID</h3>
                    <h2>Branch</h2>
                    <h3>CSE</h3>
                    <h2>Year</h2>
                    <h3>2nd</h3>
                    <button className="button">Logout</button>
                </div>
            </div>
            <br />
            <br />
            <div>
                <h1 className="registered">Registered events</h1>
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