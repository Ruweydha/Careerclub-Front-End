/* eslint-disable react-hooks/rules-of-hooks */
import React,{ useState } from 'react'

//Css
import './css/navbar.css';

//Module import
import { useNavigate,Link } from 'react-router-dom'


function navbar() {

    //Pop state
    let [pop,usePop] = useState(false)

    //Navigate intialisation
    let navigate = useNavigate()  

    return (
    <section className="navbar">
        <article className="navbar-container">
            <div className="navbar-company">
                <h1 style={{fontSize:"1.8rem"}}><Link to="/">CareerClub</Link></h1>
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
                    <li className='navbar-links-ul-login'><Link to="/login" style={{color:"white"}}><button>Login</button></Link></li>
                    {/* <li className='navbar-links-ul-profile'><Link to="/profile" style={{color:"#0096c7"}}><button>Eugene</button></Link></li> */}
                </ul>
            </div>
        </article>
    </section>
    )
}

export default navbar