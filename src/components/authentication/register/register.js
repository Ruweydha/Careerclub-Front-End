import React from 'react'

//Css import 
import '../authentication.css';

//Module imports
import { Link } from 'react-router-dom';

function register() {


    return (
    <section className="register">
        <form  className="register-form">
            <article>
                <h1 className='register-form-company'>CareerClub</h1>
            </article>
            <div>
                <label htmlFor="username">Username <span>*</span></label>
                <input type="text" className="username" id="username" placeholder='Enter your username' />
            </div>
            <div>
                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" className="email" id="email" placeholder='Enter your email' />
            </div>
            <div>
                <label htmlFor="password">Password <span>*</span></label>
                <input type="password" className="password" id="password" placeholder='Enter your password' />
            </div>
            <div>
                <label htmlFor="password-confirm">Password Confirm<span>*</span></label>
                <input type="password" className="password-cofirm"id="password-confirm" placeholder='Enter your confirm password' />
            </div>
            <article className="register-form-submit">
                <button type="submit">Register</button>
            </article>
            <article className="register-form-redirect">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </article>
        </form>
    </section>
    )
}

export default register