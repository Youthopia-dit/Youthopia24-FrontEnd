import React, { useState } from 'react';
import './Eventpage.css';
import { EventCard1, EventCard2, EventCard3}  from '../../components/eventcard/eventcard';

function Eventpage(props) {
    const [activeTab, setActiveTab] = useState('Technical'); // Tracks the currently active tab

    const renderContent = () => {
        switch (activeTab) {
            case 'Technical':
                return (
                    <div>
                        <ul>
                            {/* Three list items for technical events */}
                            <div>{EventCard1()}</div>
                            <div>{EventCard1()}</div>
                            <div>{EventCard1()}</div>
                            
                        </ul>
                    </div>

                );

            case 'Cultural':
                return (
                    <div>
                        <ul>
                            {/* Three list items for technical events */}
                            
                            <div>{EventCard2()}</div>
                            <div>{EventCard2()}</div>
                            <div>{EventCard2()}</div>
                            
                        </ul>
                    </div>

                );
            case 'Informal':
                return (
                    <div>
                        <ul>
                            {/* Three list items for technical events */}
                            <div>{EventCard3()}</div>
                            <div>{EventCard3()}</div>
                            <div>{EventCard3()}</div>
                        </ul>
                    </div>

                );

            default:
                return null;
        }
    };


    return (
        <div className='events'>
            <header>EVENTS {props.name}</header>
            <p>This is a paragraph right below the header.</p>
            <button>Register now</button>


            <main className='clubs'>
                {/* Buttons for tabs */}

                <div className='tab-buttons'>
                    <button
                        className={activeTab === 'Technical' ? 'active' : ''}
                        onClick={() => setActiveTab('Technical')}>
                        Technical
                    </button>
                    <button
                        className={activeTab === 'Cultural' ? 'active' : ''}
                        onClick={() => setActiveTab('Cultural')}>
                        Cultural
                    </button>
                    <button
                        className={activeTab === 'Informal' ? 'active' : ''}
                        onClick={() => setActiveTab('Informal')}>
                        Informal
                    </button>
                </div>

                {/* Content based on the active tab */}
                <div className='tab-content'>
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}

export default Eventpage;
