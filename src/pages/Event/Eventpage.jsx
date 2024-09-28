import React from 'react'
import "./Eventpage.css"
function Eventpage(props) {
    console.log(props)
    return (
    <div className='events'>
        <background>
            
            <header> EVENTS {props.name}</header>
            <p>This is a paragraph right below the header.</p>
            <button>Regiter now</button>
        <main className='clubs'>
            <button>Technical</button>
            <button>Cultural</button>
            <button>Informal</button>

        </main>
        </background>
        
        
    </div>
    );

}

export default Eventpage;
