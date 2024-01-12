import React from 'react';
import './expCard.css';

const ExpCard = ({ job }) => {
  return (
      <div className="job-container">
          <div>
            <div className='job-title'>
              {job.title + " @ "} 
              <span className='job-company'>
                {job.company}
              </span>
            </div>
          </div>
          <div className='job-date'>
            {job.date}
          </div>
          {job.description.map((descrip) => <div className='job-descr'><span className='highlighted'> &gt; </span>{descrip}</div>)}
          <div className='job-tech'>
            {job.tech}
          </div>
      </div>
  );
};

export default ExpCard;
