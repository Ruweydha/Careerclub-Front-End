/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

//Css
import '../authentication.css';

//Module imports
import { Link,useNavigate } from 'react-router-dom';

//Formik
import { useFormik } from 'formik'

//Spinner
import { BeatLoader } from 'react-spinners'

//Alert
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Axios
import axios from 'axios'


function login() {


    //Loading
    let [loading,useLoading] = useState(false)


    //Navigate Initialization
    let navigate = useNavigate()


    //Formik intialization
    let formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate:values=>{
            let errors = {}


            if (!values.email) {
                errors.email = 'Email is Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is Required';
            } 

            return errors
        },
        onSubmit:values=>{
            useLoading(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login/`,{
                email:values.email,
                password:values.password
            }).then(res=>{
                useLoading(false)
                localStorage.setItem('otpToken', res.data.accessToken);
                toast('Logged in successfully')
                navigate('/')
                navigate('/code')
            }).catch(err=>{
                useLoading(false)
                toast.error(err.response.data.message)
            })
        }
    })


    return (
        <section className="login">
        <form  className="login-form" onSubmit={formik.handleSubmit}>
            <article>
                <h1 className='login-form-company'>CareerClub</h1>
            </article>
            <div>
                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" className={formik.errors.email && formik.touched.email ?"email input-error":"email"} id="email" placeholder='Enter your email' {...formik.getFieldProps('email')} />
                {formik.errors.email && formik.touched.email ?<p className='formik-error'>{formik.errors.email}</p>:''}
            </div>
            <div>
                <label htmlFor="password">Password <span>*</span></label>
                <input type="password" className={formik.errors.password && formik.touched.password ?"password input-error":"password"} id="password" placeholder='Enter your password' {...formik.getFieldProps('password')} />
                {formik.errors.password && formik.touched.password ?<p className='formik-error'>{formik.errors.password}</p>:''}
            </div>
            <article className="login-form-submit">
                <button type="submit" disabled={loading?true:false}>{loading?<BeatLoader loading size={18} color="white" />:"Login"}</button>
            </article>
            <article className="login-form-redirect">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </article>
        </form>
    </section>
    )
}

export default login