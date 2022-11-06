/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

//css
import './css/SideJob.css';

//React icons
import { BsBookmarkHeart,BsBookmarkHeartFill } from 'react-icons/bs'


function SideJob({jobs}) {

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

  //Save icon change
  let saving = saved ? <BsBookmarkHeartFill /> : <BsBookmarkHeart />;

  return (
    <article className="side-job" onClick={e=>alert(jobs.id)}>
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
        <p>Posted 3 days ago</p>
      </div>
    </article>
  )
}

export default SideJob