import React, { useState } from 'react';
import './Eventpage.css';

function Eventpage(props) {
    const [activeTab, setActiveTab] = useState('Technical'); // Tracks the currently active tab

    const renderContent = () => {
        switch (activeTab) {
            case 'Technical':
                return <p>Technical events include hackathons, coding challenges, tech talks, and workshops.</p>;
            case 'Cultural':
                return <p>Cultural events include dance, drama, music competitions, and art exhibitions.</p>;
            case 'Informal':
                return <p>Informal events include fun activities, games, and quizzes for relaxation and bonding.</p>;
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
