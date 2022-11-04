import React from 'react'

//Css
import '../authentication.css';

//Module imports
import { Link } from 'react-router-dom';

function login() {
    return (
        <section className="login">
        <form  className="login-form">
            <article>
                <h1 className='login-form-company'>CareerClub</h1>
            </article>
            <div>
                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" className="email" id="email" placeholder='Enter your email' />
            </div>
            <div>
                <label htmlFor="password">Password <span>*</span></label>
                <input type="password" className="password" id="password" placeholder='Enter your password' />
            </div>
            <article className="login-form-submit">
                <button type="submit">Login</button>
            </article>
            <article className="login-form-redirect">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </article>
        </form>
    </section>
    )
}

export default login