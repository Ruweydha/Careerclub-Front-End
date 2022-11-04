/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

//css
import './css/SideJob.css';

//React icons
// eslint-disable-next-line no-unused-vars
import { BsBookmarkHeart,BsBookmarkHeartFill } from 'react-icons/bs'


function SideJob() {

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
    <article className="side-job">
      <div className="side-job-title">
        <h1>Junior Software Developer</h1>
        <div className="side-job-title-save" onClick={saveSwitching}>
          {saving}
        </div>
      </div>
      <div className="side-job-company">
        <h3>TestingPLC</h3>
      </div>
      <div className="side-job-location">
        <p>Nairobi, Kenya</p>
      </div>
      <div className="side-job-more">
        <p className="side-job-more-type">Full-Time</p>
        <p className="side-job-more-industry">Software Development</p>
      </div>
      <div className="side-job-posted">
        <p>Posted 3 days ago</p>
      </div>
    </article>
  )
}

export default SideJob