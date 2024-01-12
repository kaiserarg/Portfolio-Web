import React from 'react';
import './Card.css'; // Make sure to create a corresponding CSS file
import file from '../../assets/fileicon.svg';
import githubIcon from '../../assets/github.svg';
import linkIcon from '../../assets/linkicon.svg';

const Card = ({ title, description, technologies }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-box">
          <div>
            <img src={file} alt='fileicon' className='fileicon'></img>
          </div>
          <div className='right-icon-box'>
            <div>
              <a href='https://github.com/kaiserarg'>
                <img src={githubIcon} alt='github'></img>
              </a>
            </div>
            <div>
              <a href='https://github.com/kaiserarg'>
                <img src={linkIcon} alt='github'></img>
              </a>
            </div>
          </div>
        </div>
        <br></br>
        <div>{title}</div>
      </div>
      <div className="card-body">
        <div className='bodyText'>{description}</div>
        <br></br>
        <div className='bodyText'>{technologies}</div>
      </div>
    </div>
  );
};

export default Card;