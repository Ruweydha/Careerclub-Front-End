import React from 'react'

//css
import './css/landing.css'

//Components
import Navbar from '../navbar/navbar'
import Jobs from '../jobs/jobs'

function landing() {
    return (
    <section className="landing">
        <Navbar />
        <Jobs />
    </section>
    )
}

export default landing