/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

//Css import 
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
import axios from 'axios';



function register() {

    //Navigate intialization
    let navigate = useNavigate()

    //Loading State
    let [loading,useLoading] = useState(false)

    //Formik initialization
    let formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            passwordConfirm:''
        },
        validate : values =>{
            let errors = {}

            if(!values.username){
                errors.username = "Username is Required"
            }

            if (!values.email) {
                errors.email = 'Email is Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is Required';
            } 

            if (!values.passwordConfirm) {
                errors.passwordConfirm = 'Password Confirmation is Required';
            }else if(values.password !== values.passwordConfirm){
                errors.passwordConfirm = 'Password must match'
            }

            return errors
        },
        onSubmit:values=>{
            useLoading(true)
            axios.post('http://localhost:8090/users/create/',{
                username:values.username,
                email:values.email,
                password:values.password
            })
            .then(res=>{
                console.log(res)
                toast("Account created successfully.")
                navigate("/")
                navigate("/login")
                useLoading(false)
            })
            .catch(err=>{
                useLoading(false)
                toast.error(err.response.data.message)
                console.log(err)
            })
        }
    })

    return (
    <section className="register">
        <form  className="register-form" onSubmit={formik.handleSubmit}>
            <article>
                <h1 className='register-form-company'>CareerClub</h1>
            </article>
            <div>
                <label htmlFor="username">Username <span>*</span></label>
                <input type="text" className={formik.errors.username && formik.touched.username ?"username input-error":"username"} id="username" placeholder='Enter your username' {...formik.getFieldProps('username')} />
                {formik.errors.username && formik.touched.username ?<p className='formik-error'>{formik.errors.username}</p>:''}
            </div>
            <div>
                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" className={formik.errors.email && formik.touched.email ?"email input-error":"email"} id="email" placeholder='Enter your email' {...formik.getFieldProps('email')} />
                {formik.errors.email && formik.touched.email ?<p className='formik-error'>{formik.errors.email}</p>:''}
            </div>
            <div>
                <label htmlFor="password">Password <span>*</span></label>
                <input type="password" className={formik.errors.password && formik.touched.password ?"password input-error":"password"} id="password" placeholder='Enter your password'  {...formik.getFieldProps('password')}/>
                {formik.errors.password && formik.touched.password ?<p className='formik-error'>{formik.errors.password}</p>:''}
            </div>
            <div>
                <label htmlFor="password-confirm">Password Confirm<span>*</span></label>
                <input type="password" className={formik.errors.passwordConfirm && formik.touched.passwordConfirm ?"password-confirm input-error":"password-confirm"}id="password-confirm" placeholder='Enter your confirm password'  {...formik.getFieldProps('passwordConfirm')}/>
                {formik.errors.passwordConfirm && formik.touched.passwordConfirm ?<p className='formik-error'>{formik.errors.passwordConfirm}</p>:''}
            </div>
            <article className="register-form-submit">
                <button type="submit" disabled={loading?true:false}>{loading?<BeatLoader loading size={18} color="white" />:"Register"}</button>
            </article>
            <article className="register-form-redirect">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </article>
        </form>
    </section>
    )
}

export default register