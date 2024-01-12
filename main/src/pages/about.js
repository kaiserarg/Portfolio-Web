import React from 'react';
import './pages.css';

const about = () => {
    return (
        <div className="container">
            <div className='headingText2-Container'>
                <div className='headingText2'>
                    {"//"} about me
                </div>
                <div className='hrdiv'>
                    <hr></hr>
                </div>
            </div>
            <div className='bodyText'>I am currently a junior studying Computer Science at <span className='highlighted'>New York University</span> graduating in <span className='highlighted'>May 2025</span>. I am interested in software engineering, natural language processing, full-stack web develoment, and backend infrastructure development. I am currently looking for a software engineering internship. Feel free to reach out below!</div>
            <a className='bodyText highlighted' style={{textDecoration:"none"}} href="mailto: bhuang8450@gmail.com">bhuang8450@gmail.com</a>
            <div className='bodyText'>Here are some technologies I work with:</div>
            <div className='bodyText'>
                <span className='highlighted'> &gt; Languages:</span> Python, C, C++, JavaScript, Java, HTML/CSS
                <br></br>
                <span className='highlighted'> &gt; Frameworks:</span> React.js, Node.js, Express.js, Tailwind
                <br></br>
                <span className='highlighted'> &gt; Developer Tools:</span> Git, FireBase, AWS EC2, MongoDB, VS Code, Visual Studio, Eclipse
                <br></br>
                <span className='highlighted'> &gt; Libraries:</span> jQuery, networkX, pandas, NumPy, MatPlotLib, discord.js, Bert, Word2Vec
            </div>
            <div className='bodyText'>Outside of work, I really like music. I play guitar and also produce music. Check out more on the cool things tab!</div>
        </div>
    );
}

export default about;