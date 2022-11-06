/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'

//Css
import './css/navbar.css';

//Module import
import { Link } from 'react-router-dom'

//Redux
import { useSelector } from 'react-redux'

function navbar() {

    //User Fetch
    let user = useSelector(state=>state.user)

    //Pop state
    let [pop,usePop] = useState(false)


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
                    {
                        user.username?
                        <li className='navbar-links-ul-profile'><Link to="/profile" style={{color:"#0096c7"}}><button>{user.username}</button></Link></li>
                        :
                        <li className='navbar-links-ul-login'><Link to="/login" style={{color:"white"}}><button>Login</button></Link></li>
                    }
                </ul>
            </div>
        </article>
    </section>
    )
}

export default navbar