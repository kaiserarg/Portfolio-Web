import React from 'react';
import './pages.css';
import githubLogo from '../assets/github2.svg'
import linkedInLogo from '../assets/linkedin2.svg'

const home = () => {
    return (
        <div className="container">
            <div className='headingText'>
                Hi, I'm <span id='bradley'>Bradley</span>
            </div>
            <div className='subheading'>i enjoy making cool things!</div>
            <div className='bodyText'>I am currently a computer science student at New York University. I am interested in software engineering, web development, and data science. I am currently looking for a software engineering internship. Feel free to reach out below!</div>
            <div className='contactContainer'>
                <a className="button middle-out" href="mailto: bhuang8450@gmail.com">Contact Me</a>
                <a href='https://github.com/kaiserarg'>
                    <img className = 'refs' src={githubLogo} alt='github'></img>
                </a>
                <a href='https://www.linkedin.com/in/bhuang76/'>
                    <img className = 'refs' src={linkedInLogo} alt='linkedin'></img>
                </a>
            </div>
        </div>
    );
}

export default home;