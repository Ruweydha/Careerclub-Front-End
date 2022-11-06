/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'

//css
import './css/landing.css'

//Components
import Navbar from '../navbar/navbar'
import Jobs from '../jobs/jobs'
import Footer from '../footer/footer'
import Notification from '../minicomponents/Notification/Notification'


//Redux
import { useDispatch } from 'react-redux'

//Slices
import UserSlice from '../../app/features/User/UserSlice'


//Axios
import axios from 'axios'

//Jwt decoder
import jwt from 'jwt-decode'

function landing() {


  //Dispatch Init
  let dispatch = useDispatch()

  let token = localStorage.getItem('accessToken')

  useEffect(()=>{
    if(token){
        let userDetails = jwt(token)
        axios.get(`${process.env.REACT_APP_BASE_URL}/users/username/${userDetails.sub}`)
        .then(res=>{
        dispatch(UserSlice.actions.addUser(res.data))
        })
        .catch(err=>console.log(err))
    }
    },[token])

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