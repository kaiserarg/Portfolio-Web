import React from 'react';
import './pages.css';
import Carousel from './projectcards/Carousel';

const coolthings = () => {
    const projects = [
        {
          title: 'doria.app',
          description: 'Fullstack web-based cooperative party games that utilizes websockets',
          technologies: 'React.js, Node.js, Express.js, MongoDB, Socket.IO'
        },
        {
          title: 'NLP Clustering Classification System',
          description: 'Modified Clustering Algorithm using NLP techniques to categorize transcript corpora',
          technologies: 'Python, NetworkX, Word2Vec, KeyBert'
        },
        {
            title: 'Inkling [WIP]',
            description: 'Mimics handwriting based on provided samples',
            technologies: 'Python, Tensorflow, CV'
        },
        {
            title: 'Reddit Text2Speech',
            description: 'Scraps Reddit API data converts into videos with a GUI & automatic uploader',
            technologies: 'Python, Selenium, AWS EC2, Tkinter'
        },
        {
            title: 'Personal Portfolio',
            description: 'This Website!',
            technologies: 'React.js, Firebase'
        },
      ];    

    return (
        <div className="container">
            <div className='headingText2-Container'>
                <div className='headingText2'>
                    // projects
                </div>
                <div className='hrdiv'>
                    <hr></hr>
                </div>
            </div>
            <Carousel projects={projects} />
        </div>
    );
}

export default coolthings;