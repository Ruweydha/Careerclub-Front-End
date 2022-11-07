/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState,useEffect } from 'react'

//css
import './css/profile.css';

//Components
import SideJob from '../minicomponents/SideJob/SideJob';
import Navbar from '../navbar/navbar'
import Subscribe from '../minicomponents/Subscription/Subscription'
import Footer from '../footer/footer'

//React Router
import { useNavigate } from 'react-router-dom'

//Redux
import { useDispatch,useSelector } from 'react-redux'

//Slice
import UserSlice from '../../app/features/User/UserSlice';

//Formik
import { useFormik } from 'formik'

//Axios
import axios from 'axios'

//Toast
import { toast } from 'react-toastify';

//Spinner
import { BeatLoader } from 'react-spinners'

function profile() {

    //States
    let [pop,usePop] = useState(false)
    let [loading, useLoading] = useState(false)
    let [savedJobs,useSavedJobs] = useState([])
    let [subscriptions,useSubscriptions] = useState([])

    let handlePop = ()=>{
        pop?usePop(false):usePop(true)
    }


    //Dispatch init
    let dispatch = useDispatch()

    //Navigate init
    let navigate = useNavigate()

    //User
    let user = useSelector(state=>state.user)

    if(user.username===""){
        <redirect to="/" />
    }

    //Formik init
    let formik = useFormik({
        initialValues:{
            profession:user.profession?user.profession:"",
            phone_number:user.phone_number?user.phone_number:"",
            bio:user.bio?user.bio:""
        },
        onSubmit:values=>{
            useLoading(true)
            axios({
                method: "put",
                url: `${process.env.REACT_APP_BASE_URL}/users/update/${user.id}`,
                data: {
                    profession:values.profession,
                    phoneNumber:values.phone_number,
                    bio:values.bio
                },
                headers: { 
                    "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
                }})
            .then(res=>{
                useLoading(false)
                console.log(res.data)
                dispatch(UserSlice.actions.updateUser(res.data))
                usePop(false)
                toast("Profile updated succesfully.")
            })
            .catch(err=>{
                useLoading(false)
                toast(err.response.data.message)
            })
        }
    })


    let logout = ()=>{
        let askToLogout = confirm("Are you aure you want to logout")
        if(askToLogout){
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            dispatch(UserSlice.actions.resetUser())
            navigate('/')
        }
    }

    useEffect(()=>{
        if(user.username===""){
            navigate("/")
        }
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BASE_URL}/mail-list/mails/${user.id}`,
            headers: { 
                "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
            }})
            .then(res=>{
                useSubscriptions(res.data)
            })
            .catch(err=>console.log(err.response))
    },[subscriptions])

    useEffect(()=>{
        axios({
            method: "get",
            url: `${process.env.REACT_APP_BASE_URL}/save-job/${user.id}`,
            headers: { 
                "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
            }})
            .then(res=>{
                useSavedJobs(res.data)
            })
            .catch(err=>console.log(err.response))
    },[savedJobs])

    let subs = subscriptions.map(s=><Subscribe subscription={s} userId={user.id} />)

    return (
        <>
        <Navbar />
        <section className="profile">
            <article className="profile-container">
                <div className="profile-name">
                    <h1>{user.username}</h1>
                    <h4 className="profile-name-profession">{user.profession}</h4>
                </div>
                <div className="proifle-bio">
                    <p>{user.bio}</p>
                </div>
                <div className="profile-mini">
                    <div>
                        <h2>Email:</h2>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <h2>Phone Number</h2>
                        <p>{user.phone_number?user.phone_number:"Not provided"}</p>
                    </div>
                </div>
                <div className="profile-buttons">
                    <button className="profile-buttons-update" onClick={handlePop}>Update</button>
                    <button className="profile-buttons-logout" onClick={logout}>Logout</button>
                </div>
                <div className="profile-saved-jobs">
                    <div className="profile-saved-jobs-title">
                        <h3>My saved Jobs</h3>
                    </div>
                    {
                        savedJobs.length>0?
                        <div className="profile-saved-jobs-list">
                            <SideJob />
                            <SideJob />
                            <SideJob />
                            <SideJob />
                        </div>
                        :
                        <div className="profile-saved-jobs-none">
                            <p>You have no saved jobs</p>
                        </div>
                    }

                </div>
                <div className="profile-mail">
                    <div className="profile-mail-title">
                        <h3>My Subscriptions</h3>
                    </div>
                    {
                        subscriptions.length>0?
                        <div className="profile-mail-list">
                            {
                                subs
                            }
                        </div>
                        :
                        <div className="profile-mail-list-none">
                            <p>You have no subscriptions</p>
                        </div>
                    }


                </div>
            </article>
            <article className={pop?"profile-update":"profile-update none"}>
                <form  className="profile-update-form" onSubmit={formik.handleSubmit}>
                    <div className="profile-update-form-title">
                        <h1>Update</h1>
                        <p onClick={handlePop}>&times;</p>
                    </div>
                    <div className='profile-update-form-phone'>
                        <input type="text" name="phone" id="phone" placeholder='Enter your phone number' {...formik.getFieldProps('phone_number')}  />
                    </div>
                    <div>
                        <input type="text" name="profession" id="profession" placeholder='Enter your profession'  {...formik.getFieldProps('profession')} />
                    </div>
                    <div>
                        <textarea name="bio" id="bio" placeholder='Enter your bio' {...formik.getFieldProps('bio')} ></textarea>
                    </div>
                    <button type="submit"disabled={loading?true:false} style={loading?{cursor:"progress"}:{cursor:"pointer"}}>{loading?<BeatLoader loading size={18} color="white" />:"Update"}</button>
                </form>
            </article>
        </section>
        <Footer />
        </>
    )
}

export default profile