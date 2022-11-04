/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'


//Css
import './css/Notification.css'

function Notification() {

    let [pop, usePop] = useState(false)

    let handlePop = ()=>{
        pop?usePop(false):usePop(true)
    }

    return (
        <section className="notification">
            <article className="notification-container">
                <button onClick={handlePop}>Get Notified</button>
            </article>
            <article className={pop?"notification-form":"notification-form none"}>
                <form className="notifcation-form-add">
                    <div className="notification-form-title">
                        <h1>Subscribe</h1>
                        <p onClick={handlePop}>&times;</p>
                    </div>
                    <div>
                        <label htmlFor="name">Alert Name <span>*</span></label>
                        <input type="text" name="name" id="name" placeholder='Enter Alert Name' />
                    </div>
                    <div>
                        <label htmlFor="job-type">Job Type<span>*</span></label>
                        <select name="job-type" id="job-type">
                            <option value="select">Select Job Type</option>
                            <option value="fulltime">Full-Time</option>
                            <option value="remote">Remote</option>
                            <option value="parttime">Part-Time</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="industry">Industry <span>*</span></label>
                        <select name="industry" id="industry">
                            <option value="select">Select Industry</option>
                            <option value="law">Law</option>
                            <option value="eduaction">Education</option>
                            <option value="it">IT</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="location">Location <span>*</span></label>
                        <select name="location" id="location">
                            <option value="select">Select Location</option>
                            <option value="nairobi">Nairbi</option>
                            <option value="rest">Rest Of Kenya</option>
                            <option value="outside">Outside Kenya</option>
                        </select>
                    </div>
                    <button type="submit">Subscribe</button>
                </form>
            </article>
        </section>
    )
}

export default Notification