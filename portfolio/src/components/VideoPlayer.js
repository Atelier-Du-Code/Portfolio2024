import React from 'react';
import '../styles/components/VideoPlayer.css';

const VideoPlayer = ({ videoSrc, staticImage }) => {
  return (
    <div className='div_player'>
        <div className="div_video">
          <video controls poster={staticImage} width="600" height="400">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
    
  );
};

export default VideoPlayer;
