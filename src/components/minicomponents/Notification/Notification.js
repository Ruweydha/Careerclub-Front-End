/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

//Formik
import { useFormik } from 'formik'

//Css
import './css/Notification.css'

//Spinner
import { BeatLoader } from 'react-spinners'

//Axios
import axios from 'axios'

//Redux
import { useSelector } from 'react-redux'

//Toast
import { toast } from 'react-toastify';


function Notification() {
    //User
    let user = useSelector(state=>state.user)

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
            useLoading(true)
            axios({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/mail-list/subscribe`,
                data: {
                    alertName: values.alertName,
                    jobTypeName: values.jobType,
                    industryName: values.industry,
                    location: values.location,
                    userId: user.id
                },
                headers: { 
                    "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
                }})
                .then(res=>{
                    usePop(false)
                    useLoading(false)
                    toast("Subscribed successfully.")
                })
                .catch(err=>{
                    useLoading(false)
                    toast.error(err.response.data.message)
                })
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
                            <option value="part-time">Part-Time</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="industry">Industry <span>*</span></label>
                        <select name="industry" id="industry" {...formik.getFieldProps('industry')}>
                            <option value="select">Select Industry</option>
                            <option value="law">Law</option>
                            <option value="education">Education</option>
                            <option value="it">IT</option>
                            <option value="advertisement">Advertisement</option>
                            <option value="real estate">Real estate</option>
                            <option value="tourism">Tourism</option>
                            <option value="retail">Retail</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="location">Location <span>*</span></label>
                        <select name="location" id="location" {...formik.getFieldProps('location')}>
                            <option value="select">Select Location</option>
                            <option value="nairobi">Nairbi</option>
                            <option value="rest of kenya">Rest Of Kenya</option>
                            <option value="outside kenya">Outside Kenya</option>
                            <option value="nakuru">Nakuru</option>
                            <option value="mombasa">Mombasa</option>
                            <option value="kisumu">Kisumu</option>
                        </select>
                    </div>
                    <button type="submit"disabled={loading?true:false} style={loading?{cursor:"progress"}:{cursor:"pointer"}}>{loading?<BeatLoader loading size={18} color="white" />:"Subscribe"}</button>
                </form>
            </article>
        </section>
    )
}

export default Notification