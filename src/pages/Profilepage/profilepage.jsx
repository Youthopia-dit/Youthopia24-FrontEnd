import React from "react";
import './ProfilePage.css';
function ProfilePage(){
    return(
        <div className="ProfilePage">
            <div className="info">
                <div className="image" >
                    <h3 className="heading">Profile photo</h3>
                </div>
                <div className="mainheading">
                    <h1>Your Name</h1>
                    <h2>Lallu Prasad</h2>
                    <h1>College</h1>
                    <h2>DIT</h2>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage