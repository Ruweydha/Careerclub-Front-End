/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState,useEffect } from 'react'

//css
import './css/jobs.css';

//Components
import SideJob from '../minicomponents/SideJob/SideJob'
import MainJob from '../minicomponents/MainJob/MainJob';

//Icons Import
import { MdNavigateNext,MdOutlineArrowBackIosNew } from 'react-icons/md';
import { GrNext } from 'react-icons/gr'

//Axios
import axios from 'axios'

//Redux
import { useSelector } from 'react-redux'

function jobs() {

    //States
    let [gigs,useGigs] = useState([])

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/jobs`)
        .then(res=>{
            useGigs(res.data._embedded.jobList)
        }).catch(err=>{
            console.log(err)
        })
    },[gigs])

    let gig = gigs.map(j=><SideJob  jobs={j} />)

    //Main Job
    let mainJob = useSelector(state=>state.job)

    return (
    <section className="jobs">
        <article className="jobs-container">
            <form className="jobs-filter">
                <div>
                    <input type="text" name="job-title" id="job-title" placeholder='Job Title' />
                    <input type="text" name="job-qualification" id="job-qualification" placeholder='Qualification' />
                </div>
                <article className="job-filter-button">
                    <button type="submit" id="job-filter-button">Filter</button>
                </article>
            </form>
            <div className="jobs-showing">
                <p>Showing <span>{gigs.length}</span> jobs</p>
            </div>
            <div className="jobs-section">
                <div className="jobs-section-list">
                    {
                        gig
                    }
                </div>
                <div className="jobs-section-current">
                    <MainJob job={mainJob} />
                </div>
                <div className="jobs-section-pagenation">
                    <div>
                        <p><MdOutlineArrowBackIosNew /></p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p><GrNext /></p>
                    </div>
                </div>
            </div>

        </article>
    </section>
    )
}

export default jobs