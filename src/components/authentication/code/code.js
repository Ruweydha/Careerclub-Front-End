/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'


//Formik
import { useFormik } from 'formik'

//Axios
import axios from 'axios'


//Alert
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Router Navigate
import { useNavigate } from 'react-router-dom'

//Spinner
import { BeatLoader } from 'react-spinners'

//Redux
import { useDispatch } from 'react-redux'

//Slices
import AuthSlice from '../../../app/features/Auth/AuthSlice'


function code() {

    //Dispatch initialize
    let dispatch = useDispatch()

    //Navigate Initialize
    let navigate = useNavigate()

    //Loading
    let [loading,useLoading] = useState(false)

    //Formik initialization
    let formik = useFormik({
        initialValues:{
            code:''
        },
        validate:values=>{
            let errors = {}

            if(!values.code){
                errors.code = "Code is required"
            }

            return errors;
        },
        onSubmit:values=>{
            useLoading(true) 
            axios({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/code/verify`,
                data: {
                    code:values.code
                },
                headers: { 
                    "Authorization" : `Bearer ${localStorage.getItem('otpToken')}`
                }})
            .then(res=>{
                useLoading(false)
                dispatch(AuthSlice.actions.addToken(res.data))
                localStorage.removeItem('otpToken');
                localStorage.setItem('accessToken', res.data.accessToken);
                localStorage.setItem('refreshToken', res.data.refreshToken);
                toast("Logged in successfully")              
                navigate("/")
            })
            .catch(err=>{
                useLoading(false)
                toast.error(err.response.data.message)
            })
        }
    })


    return (
    <section className="code">
        <form className="code-form" onSubmit={formik.handleSubmit}>
            <article>
                <h1 className='code-form-company'>CareerClub</h1>
            </article>
            <div>
                <p className="code-form-message">
                    Please Type the verification code sent to you email.
                </p>
            </div>
            <div>
                <label htmlFor="code-input">Code <span>*</span></label>
                <input type="text" name="code" id="code-input" placeholder='Enter verification code' {...formik.getFieldProps('code')} className={formik.errors.code && formik.touched.code ?"code input-error":"code"} />
                {formik.errors.code && formik.touched.code ?<p className='formik-error'>{formik.errors.code}</p>:''}
            </div>
            <article className="code-form-submit">
                <button type="submit"disabled={loading?true:false} style={loading?{cursor:"progress"}:{cursor:"pointer"}}>{loading?<BeatLoader loading size={18} color="white" />:"verify"}</button>
            </article>
        </form>
    </section>
    )
}

export default code