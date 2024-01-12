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
                    <li>
                        <a href='mailto: bhuang8450@gmail.com'>
                            <img src={emailLogo} alt='email'></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/kaiserarg'>
                            <img src={githubLogo} alt='github'></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/bhuang76/'>
                            <img src={linkedInLogo} alt='linkedin'></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;