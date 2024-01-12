import React, {useState} from 'react';
import './pages.css';
import ExpCard from './expcards/ExpCard';
import resume from '../assets/resume.pdf'

function Exp() {
    const [select, setSelect] = useState(0);

    const jobs = [
        {
            title: "Data Analytics Intern",
            company: "Better.com",
            date: "OCTOBER 2021 - DECEMBER 2021",
            description: [
                "Developed Python scripts using NumPy and MatPlotLib for data analysis and detection, focusing on identifying geographical needs for various employee types and tracking the progress of trainee employees.",
                "Created + deployed APIs for trainee data, connected data to analytical tools used by recruiters. Developed further automation and parsing scripts/tools using JavaScript, aimed at efficient storage and retrieval of trainee statistics.",
            ],
            tech: "Python, NumPy, MatPlotLib, JavaScript, REST APIs, Google App Scripts",
        },
        {
            title: "test",
            company: "tesc",
            date: "tesdd",
            description: "testd",
            tech: "testt",
        },
    ];
    return (
        <div className="container">
            <div className='headingText2-Container'>
                <div className='headingText2'>
                    // experience
                </div>
                <div className='hrdiv'>
                    <hr></hr>
                </div>
            </div>
            <ExpCard job={jobs[select]}></ExpCard>
            <div>
                <a className='highlighted' style={{textDecoration:"none"}} href={resume} download="bradley_huang_resume.pdf" target="_blank" >VIEW MY RESUME &gt;</a>
            </div>
        </div>
    );
}

export default Exp;