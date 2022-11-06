import React from 'react'


//Css
import './css/Subscription.css';

function Subscription({subscription}) {
    return (
        <article className="subscription">
            <div className="subscription-details">
                <div className="subscription-details-name">
                    <h1>{subscription.alertName}</h1>
                </div>
                <div className="subscription-details-tags">
                    <p>{subscription.industry.name}</p>
                    <p>{subscription.jobType.name}</p>
                    <p>{subscription.location.name}</p>
                </div>
            </div>
            <div className="subscription-unsubscribe">
                <button>Unsubscribe</button>
            </div>
        </article>
    )
}

export default Subscription