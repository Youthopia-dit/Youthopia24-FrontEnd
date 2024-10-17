import React from 'react';
import { useState } from 'react';
import "./Individualpage.css"
function IndividualEvent() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index) => {
    setActiveTab(index);
  }
    return (<>
    {/* event image */}
    <div className="eventpage">
      <section>
  <div className="info">
       <div class="container"> <div class="image">
         
        </div>
        <button class="reg-btn">Register</button>
        </div>
        <div class="nr">
          <h1 >Event name</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Inventore eum rem ducimus, 
          <div class="tabs" >
            <ul class="tabsin">
            <li class={activeTab === 1 ? "current": "tab"} onClick={() =>handleTabClick(1)}><h2>Details</h2></li>
            <li class={activeTab === 2 ? "current": "tab"} onClick={() =>handleTabClick(2)} ><h2>Description</h2></li>
            <li class={activeTab === 3 ? "current": "tab"} onClick={() =>handleTabClick(3)}><h2>Rules</h2></li>
            <li class={activeTab === 4 ? "current": "tab"} onClick={() =>handleTabClick(4)}><h2>Contact</h2></li>
            </ul>
          </div>
          <div class="content-tab">
          <div class= {activeTab === 1 ? "active": "content"}>
            <p>Date</p>
            <p>Time</p> 
            <h3>Registration fees</h3>
            <p><b>For Dit:</b> 100/-</p>
            <p><b>for others:</b> 200/-</p>

         </div>
         <div class= {activeTab === 2 ? "active": "content"}>
         <p>qwwreetLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime voluptas. 
              Quidem earum est corporis eos non molestiae quia maiores similique amet? Facere cupiditate, 
              et officia dignissimos dicta beatae aspernatur!
              earum rem labore ipsam officiis, excepturi 
              repellendus alias, culpa quam magnam a! earum rem labore ipsam officiis, excepturi 
              repellendus alias, culpa quam magnam a!
              earum rem labore ipsam officiis, excepturi 
              repellendus alias, culpa quam magnam a!</p>

         </div>
         <div class= {activeTab === 3 ? "active": "content"}>
          <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est
             architecto corporis. recusandae earum rem labore ipsam officiis, excepturi 
             repellendus alias, culpa quam magnam a!</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est architecto corporis.
             Modi unde ullam consequatur, provident recusandae earum rem labore ipsam officiis, excepturi 
             repellendus alias, culpa quam magnam a!</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi est architecto corporis.
             Modi unde ullam consequatur, provident recusandae earum rem labore ipsam officiis, excepturi 
             repellendus alias, culpa quam magnam a!</li>
          </ul>

         </div>
         <div class= {activeTab === 4 ? "active": "content"}>
        <h2>Event Coordinators</h2>
        <p><b>Person 1:</b>93********</p>
        <p><b>Person 2:</b>93********</p>
        <h2>Overall Coordintors</h2>
        <p><b>Person 1:</b>93********</p>
        <p><b>Person 2:</b>93********</p>
         </div>
          </div>
       
        </div>

        </div>
    </div>
     </section>
     </div>
    </>   
    );
}

export default IndividualEvent;