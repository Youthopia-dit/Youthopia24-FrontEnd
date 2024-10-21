import React from "react";
import './profilepage.css';
function ProfilePage(){
    return(
        <div className="ProfilePage">
                <div className="info">
                    <div>
                    <div className="image" >
                        <h3 className="heading">Profile photo</h3>
                    </div>
                    <div className="contact">
                        <h2 align="left" className="contactinfo">Phone: 1234567890 <br /> Email: example@gmail.com</h2>
                    </div>
                    </div>
                    <div className="mainheading">
                        <div className="bgplate"><h2 className="text">Your Name : Name</h2></div>
                        {/* <h3>Name</h3> */}
                        <div className="bgplate"><h2 className="text">College: DIT</h2></div>
                        {/* <h3>DIT</h3> */}
                        <div className="bgplate"><h2 className="text">College ID: ID</h2></div>
                        {/* <h3>ID</h3> */}
                        <div className="bgplate"><h2 className="text">Branch: CSE</h2></div>
                        {/* <h3>CSE</h3> */}
                        <div className="bgplate"><h2 className="text">Year: 2nd</h2></div>
                    </div>
                </div>
                <br />
                <br />
                <div className="scroller">
                    <h1 className="register">Registered events</h1>
                    <div className="registered">
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    </div>
                    <br />
                </div>
            </div>
    )
}
export default ProfilePage