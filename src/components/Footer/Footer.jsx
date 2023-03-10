import './footer.scss'
import {motion as m } from 'framer-motion'
import { container, item } from '../Nav/animation'

function Footer(props){

    return (
        <footer id="footer">
            <div
            className="p-container">
                <p>Minding a project?</p>
                <p id="underline">
                    Let's connect.
                </p>
            </div>
            <div className="links-container">
                <ul>
                    <li><a href="https://www.linkedin.com/in/alexei-rusu-dev/" target="_blank">linkedin</a></li>
                    <li><a href="https://github.com/Alex-dev7" target="_blank">github</a></li>
                    <li><a href="">resume</a></li>
                    <li><a href="">contact me</a></li>
                </ul>
                <ul id="copyright-wrapper">
                    <li><a href="">light mode</a></li>
                    <li><a>copyright</a></li>
                    <li><a href="#header">back to top</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer