/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

//css
import './css/SideJob.css';

//React icons
import { BsBookmarkHeart,BsBookmarkHeartFill } from 'react-icons/bs'

//Redux
import { useDispatch,useSelector } from 'react-redux'

//Slices
import JobSlice from '../../../app/features/Job/JobSlice';

function SideJob({jobs}) {

  //Months map
  let months = {
    "0":"Jan",
    "1":"Feb",
    "2":"Mar",
    "3":"Apr",
    "4":"May",
    "5":"Jun",
    "6":"Jul",
    "7":"Aug",
    "8":"Sep",
    "9":"Oct",
    "10":"Nov",
    "11":"Dec",
  }

  //Date format
  let postedAt = new Date(jobs.datePosted)
  let monthPostedAt = months[postedAt.getMonth()]


  //Save state
  let [saved, useSaved] = useState(false)

  //Save switching
  let saveSwitching = ()=>{
    if(saved){
      useSaved(false)
    }else{
      useSaved(true)
    }
  }

  //Dispatch init
  let dispatch = useDispatch()

  //Update Main Job
  let updateMain = ()=>{
    dispatch(JobSlice.actions.addJob(jobs))
  }

  //Current Main Job
  let mainJob = useSelector(state=>state.job)

  //Save icon change
  let saving = saved ? <BsBookmarkHeartFill /> : <BsBookmarkHeart />;

  return (
    <article className="side-job" onClick={updateMain} style={{border:mainJob.id===jobs.id?"2px solid rgb(50,86,162":""}}>
      <div className="side-job-title">
        <h1>{jobs.title}</h1>
        <div className="side-job-title-save" onClick={saveSwitching}>
          {saving}
        </div>
      </div>
      <div className="side-job-company">
        <h3>{jobs.company.name}</h3>
      </div>
      <div className="side-job-location">
        <p>{jobs.location.name}</p>
      </div>
      <div className="side-job-more">
        <p className="side-job-more-type">{jobs.jobType.name}</p>
        <p className="side-job-more-industry">{jobs.industry.name}</p>
      </div>
      <div className="side-job-posted">
        <p>Posted on {monthPostedAt}</p>
      </div>
    </article>
  )
}

export default SideJob