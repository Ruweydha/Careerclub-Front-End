import React from 'react'

//css
import './css/MainJob.css'

function MainJob() {
    return (
        <article className="main-job">
            <article className="main-job-title">
                <h1 className='main-job-title-title'>Junior Backend Developer</h1>
                <p className='main-job-title-company'>TestingPLC</p>
                <p className="main-job-title-location">Nairobi, Kenya</p>
            </article>
            <article className="main-job-details">
                <h1>Job Details</h1>
                <div className="main-job-details-type">
                    <h2>Job Type</h2>
                    <p>Full-Time</p>
                </div>
                <div className="main-job-details-description">
                    <h3>Description:</h3>
                    <p>Hello testingPlc</p>
                </div>
                <div className="main-job-details-qualifications">
                    <h3>Qualifications:</h3>
                    <p>Docker & Kubernettes</p>
                </div>
            </article>
            <article className="main-job-apply">
                <button>Apply Now</button>
            </article>
        </article>
    )
}

export default MainJob