import React from 'react'


//Css
import './css/Subscription.css';

function Subscription() {
    return (
        <article className="subscription">
            <div className="subscription-details">
                <div className="subscription-details-name">
                    <h1>Testing</h1>
                </div>
                <div className="subscription-details-tags">
                    <p>Remote</p>
                    <p>Law</p>
                    <p>Nairobi</p>
                </div>
            </div>
            <div className="subscription-unsubscribe">
                <button>Unsubscribe</button>
            </div>
        </article>
    )
}

export default Subscription