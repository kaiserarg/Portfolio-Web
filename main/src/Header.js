import React from 'react';
import './Header.css';
import emailLogo from './assets/Email.svg'
import githubLogo from './assets/github.svg'
import linkedInLogo from './assets/linkedin.svg'

const Header = () => {
    return (
        <div className="HeaderBox">
            <div className='name'>bradley huang</div>
            <div>
                <ul className='icons'>
                    <li><img src={emailLogo} alt='email'></img></li>
                    <li><img src={githubLogo} alt='github'></img></li>
                    <li><img src={linkedInLogo} alt='linkedin'></img></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;