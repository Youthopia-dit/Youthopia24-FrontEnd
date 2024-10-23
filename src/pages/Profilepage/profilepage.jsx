import React from "react";
import './profilepage.css';
function ProfilePage(){
    
    return(
        <div className="ProfilePage">
                <div className="info">
                    <div>
                    <h1 className="heading1">PROFILE</h1>
                    </div>
                    <div className="image" >
                        <div className="addpicture">
                            <button>+</button>
                            <p>Add profile picture</p>
                        </div>
                        
                    <div className="contact">
                        <h3 className="contactinfo">Phone: 1234567890 <br /> Email: example@gmail.com</h3>
                    </div>
                    </div>
                    <div className="mainheading">
                        <div className="bgplate"><h2 className="text"> Your Name: </h2></div>
                        {/* <h3>Name</h3> */}
                        <div className="bgplate"><h2 className="text"> College: </h2></div>
                        {/* <h3>DIT</h3> */}
                        <div className="bgplate"><h2 className="text"> College ID:</h2></div>
                        {/* <h3>ID</h3> */}
                        <div className="bgplate"><h2 className="text"> Branch: </h2></div>
                        {/* <h3>CSE</h3> */}
                        <div className="bgplate"><h2 className="text"> Year:</h2></div>
                    </div>
                    <div className="probutton">
                        <div className="logout">
                        <button>LOGOUT</button> 
                        </div>
                        <div className="payment">
                            <button>Proceed to Pay</button>
                        </div>
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