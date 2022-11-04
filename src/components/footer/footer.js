import React from 'react'

//React icon
import { GiSelfLove } from 'react-icons/gi'

//css
import './css/footer.css'

function footer() {
    return (
    <section className="footer">
        <article className="footer-container">
            <p>Made with </p>
            <GiSelfLove />
        </article>
    </section>
    )
}

export default footer