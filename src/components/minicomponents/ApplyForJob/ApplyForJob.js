/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'


//Css
import './css/ApplyForJob.css'

//Formik
import { useFormik } from 'formik'

//Axios
import axios from 'axios'

//Redux
import { useSelector } from 'react-redux'


//Spinner
import { BeatLoader } from 'react-spinners'

//Alert
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function ApplyForJob({pop,usePop,job}) {
    
    //User
    let user = useSelector(state=>state.user)

    //States
    let [loading,useLoading] = useState(false)
    let [cv,useCv] = useState({selectedFile:""})

    let handleFileSelect = event => {
        useCv(event.target.files[0])
    }


    //Formik init
    let formik = useFormik({
        initialValues:{
            jobId:job.id,
            userId:user.id
        },
        onSubmit: values =>{
            useLoading(true)
            let formData = new FormData()
            formData.append('selectedFile',cv)
            axios({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/applications`,
                data: {
                    jobId:values.jobId,
                    userId:values.userId,
                    file:formData.get("selectedFile")
                },
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>{
                useLoading(false)
                toast(`Application for ${job.title} submitted successfully.`)
                usePop(false)
                console.log(res.data)
            })
            .catch(err=>{
                useLoading(false)
                console.log(err)
            })
        }
    })

    return (
    <article className="apply" >
        <form className="apply-form" onSubmit={formik.handleSubmit}>
            <div className="apply-form-close">
                <p onClick={e=>usePop(false)}>&times;</p>
            </div>
            <div className="apply-form-title">
                <h1>{job.title}</h1>
            </div>
            <div>
                <input type="file" name="cv" id="cv" onChange={handleFileSelect} />
            </div>
            <button type="submit"disabled={loading?true:false} style={loading?{cursor:"progress"}:{cursor:"pointer"}} >{loading?<BeatLoader loading size={15} color="white" />:"Apply"}</button>
        </form>
    </article>
    )
}

export default ApplyForJob