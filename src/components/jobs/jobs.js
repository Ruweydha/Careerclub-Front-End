/* eslint-disable react-hooks/rules-of-hooks */

//css
import './css/jobs.css';

//Components
import SideJob from '../minicomponents/SideJob/SideJob'
import MainJob from '../minicomponents/MainJob/MainJob';

//Icons Import
import { MdNavigateNext,MdOutlineArrowBackIosNew } from 'react-icons/md';
import { GrNext } from 'react-icons/gr'


function jobs() {


    return (
    <section className="jobs">
        <article className="jobs-container">
            <form className="jobs-filter">
                <div>
                    <input type="text" name="job-title" id="job-title" placeholder='Job Title' />
                    <input type="text" name="job-qualification" id="job-qualification" placeholder='Qualification' />
                </div>
                <article className="job-filter-button">
                    <button type="submit" id="job-filter-button">Filter</button>
                </article>
            </form>
            <div className="jobs-showing">
                <p>Showing <span>10</span> jobs</p>
            </div>
            <div className="jobs-section">
                <div className="jobs-section-list">
                    <SideJob />
                    <SideJob />
                    <SideJob />
                    <SideJob />
                    <SideJob />
                    <SideJob />
                    <SideJob />
                    <SideJob />
                </div>
                <div className="jobs-section-current">
                    <MainJob />
                </div>
                <div className="jobs-section-pagenation">
                    <div>
                        <p><MdOutlineArrowBackIosNew /></p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p><GrNext /></p>
                    </div>
                </div>
            </div>

        </article>
    </section>
    )
}

export default jobs