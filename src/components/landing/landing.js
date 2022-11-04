import React from 'react'

//css
import './css/landing.css'

//Components
import Navbar from '../navbar/navbar'
import Jobs from '../jobs/jobs'
import Footer from '../footer/footer'
import Notification from '../minicomponents/Notification/Notification'

function landing() {
    return (
    <section className="landing">
        <Navbar />
        <Jobs />
        <Notification />
        <Footer />
    </section>
    )
}

export default landing