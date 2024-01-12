import React from 'react';
import './pages.css';

const coolthings = () => {
    return (
        <div className="container">
            <div className='headingText2-Container'>
                <div className='headingText2'>
                    {"//"} cool things
                </div>
                <div className='hrdiv'>
                    <hr></hr>
                </div>
            </div>
            <iframe title="spotify1" style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/0TsL8fXzqSe1EyJaVABy1c?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    );
}

export default coolthings;