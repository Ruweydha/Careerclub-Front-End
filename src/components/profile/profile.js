/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

//css
import './css/profile.css';

//Components
import SideJob from '../minicomponents/SideJob/SideJob';
import Navbar from '../navbar/navbar'
import Subscribe from '../minicomponents/Subscription/Subscription'
import Footer from '../footer/footer'

function profile() {


    let [pop,usePop] = useState(false)

    let handlePop = ()=>{
        pop?usePop(false):usePop(true)
    }

    return (
        <>
        <Navbar />
        <section className="profile">
            <article className="profile-container">
                <div className="profile-name">
                    <h1>Eugene Oluoch</h1>
                    <h4 className="profile-name-profession">Software Developer</h4>
                </div>
                <div className="proifle-bio">
                    <p>Hello, World.</p>
                </div>
                <div className="profile-mini">
                    <div>
                        <h2>Email:</h2>
                        <p>eugenemarkke@gmail.com</p>
                    </div>
                    <div>
                        <h2>Phone Number</h2>
                        <p>254712345678</p>
                    </div>
                </div>
                <div className="profile-buttons">
                    <button className="profile-buttons-update" onClick={handlePop}>Update</button>
                    <button className="profile-buttons-logout">Logout</button>
                </div>
                <div className="profile-saved-jobs">
                    <div className="profile-saved-jobs-title">
                        <h3>My saved Jobs</h3>
                    </div>
                    <div className="profile-saved-jobs-list">
                        <SideJob />
                        <SideJob />
                        <SideJob />
                        <SideJob />
                    </div>
                </div>
                <div className="profile-mail">
                    <div className="profile-mail-title">
                        <h3>My Subscriptions</h3>
                    </div>
                    <div className="profile-mail-list">
                        <Subscribe />
                        <Subscribe />
                        <Subscribe />
                        <Subscribe />
                    </div>
                </div>
            </article>
            <article className={pop?"profile-update":"profile-update none"}>
                <form  className="profile-update-form">
                    <div className="profile-update-form-title">
                        <h1>Update</h1>
                        <p onClick={handlePop}>&times;</p>
                    </div>
                    <div className='profile-update-form-phone'>
                        <input type="text" name="phone" id="phone" placeholder='Enter your phone number' />
                    </div>
                    <div>
                        <input type="text" name="profession" id="profession" placeholder='Enter your profession' />
                    </div>
                    <div>
                        <textarea name="bio" id="bio" placeholder='Enter your bio'></textarea>
                    </div>
                    <button type="submit">Update</button>
                </form>
            </article>
        </section>
        <Footer />
        </>
    )
}

export default profile