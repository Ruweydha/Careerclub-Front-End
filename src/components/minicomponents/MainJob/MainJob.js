/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

//css
import './css/MainJob.css'

//Component
import ApplyForJob from '../ApplyForJob/ApplyForJob'

function MainJob({job}) {

    let [pop,usePop] = useState(false)


    return (
        <article className="main-job">
            <article className="main-job-title">
                <h1 className='main-job-title-title'>{job.title}</h1>
                <p className='main-job-title-company'>{job.company}</p>
                <p className="main-job-title-location">{job.location}</p>
            </article>
            <article className="main-job-details">
                <h1>Job Details</h1>
                <div className="main-job-details-type">
                    <h2>Job Type</h2>
                    <p>{job.jobType}</p>
                </div>
                <div className="main-job-details-description">
                    <h3>Description:</h3>
                    <p>{job.description}</p>
                </div>
                <div className="main-job-details-qualifications">
                    <h3>Qualifications:</h3>
                    <p>{job.qualification}</p>
                </div>
            </article>
            <article className="main-job-apply">
                <button onClick={e=>usePop(true)}>Apply Now</button>
            </article>
            {pop?
                <ApplyForJob pop={pop} usePop={usePop} job={job} />
                :
                ""
            }
        </article>
    )
}

export default MainJob