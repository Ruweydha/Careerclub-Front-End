import React from 'react'

function code() {
    return (
    <section className="code">
        <form className="code-form">
            <article>
                <h1 className='code-form-company'>CareerClub</h1>
            </article>
            <div>
                <label htmlFor="code-input">Code <span>*</span></label>
                <input type="text" name="code" id="code-input" placeholder='Enter verification code' />
            </div>
            <article className="code-form-submit">
                <button type="submit">Verify</button>
            </article>
        </form>
    </section>
    )
}

export default code