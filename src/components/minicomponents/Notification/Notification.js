/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

//Formik
import { useFormik } from 'formik'

//Css
import './css/Notification.css'

//Spinner
import { BeatLoader } from 'react-spinners'


function Notification() {

    let [loading,useLoading] = useState(false)
    let [pop, usePop] = useState(false)

    let handlePop = ()=>{
        pop?usePop(false):usePop(true)
    }

    //Formik init
    let formik = useFormik({
        initialValues:{
            alertName:"",
            jobType:"",
            industry:"",
            location:""
        },
        onSubmit:values=>{
        }
    })

    return (
        <section className="notification">
            <article className="notification-container">
                <button onClick={handlePop}>Get Notified</button>
            </article>
            <article className={pop?"notification-form":"notification-form none"}>
                <form className="notifcation-form-add" onSubmit={formik.handleSubmit}>
                    <div className="notification-form-title">
                        <h1>Subscribe</h1>
                        <p onClick={handlePop}>&times;</p>
                    </div>
                    <div>
                        <label htmlFor="name">Alert Name <span>*</span></label>
                        <input type="text" name="name" id="name" placeholder='Enter Alert Name' {...formik.getFieldProps('alertName')} />
                    </div>
                    <div>
                        <label htmlFor="job-type">Job Type<span>*</span></label>
                        <select name="job-type" id="job-type" {...formik.getFieldProps('jobType')}>
                            <option value="select">Select Job Type</option>
                            <option value="fulltime">Full-Time</option>
                            <option value="remote">Remote</option>
                            <option value="parttime">Part-Time</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="industry">Industry <span>*</span></label>
                        <select name="industry" id="industry" {...formik.getFieldProps('industry')}>
                            <option value="select">Select Industry</option>
                            <option value="law">Law</option>
                            <option value="eduaction">Education</option>
                            <option value="it">IT</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="location">Location <span>*</span></label>
                        <select name="location" id="location" {...formik.getFieldProps('location')}>
                            <option value="select">Select Location</option>
                            <option value="nairobi">Nairbi</option>
                            <option value="rest">Rest Of Kenya</option>
                            <option value="outside">Outside Kenya</option>
                        </select>
                    </div>
                    <button type="submit"disabled={loading?true:false} style={loading?{cursor:"progress"}:{cursor:"pointer"}}>{loading?<BeatLoader loading size={18} color="white" />:"Subscribe"}</button>
                </form>
            </article>
        </section>
    )
}

export default Notification