/* eslint-disable react-hooks/rules-of-hooks */
import React,{ useState } from 'react'

//Css
import './css/navbar.css';

//Module import
import { useNavigate } from 'react-router-dom'

function navbar() {

    //Pop state
    let [pop,usePop] = useState(false)

    //Navigate intialisation
    let navigate = useNavigate()  

    return (
    <section className="navbar">
        <article className="navbar-container">
            <div className="navbar-company">
                <h1>CareerClub</h1>
                <div className="navbar-hamburger">
                    <div onClick={e=>usePop(true)}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
            <div className={pop?"navbar-links active":"navbar-links"}>
                <div className="navbar-links-close">
                    <p onClick={e=>usePop(false)}>&times;</p>
                </div>
                <ul className='navbar-links-ul'>
                    <li><button onClick={e=>{navigate('/login')}}>Login</button></li>
                </ul>
            </div>
        </article>
    </section>
    )
}

export default navbar