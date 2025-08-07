// src/app/components/VideoPlayer/VideoPlayer.tsx
'use client';

import React from 'react';
import ReactPlayer from 'react-player';


export default function VideoPlayer() {
  return (
    <div className="video-player-container">
        <div className="video-player" style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 */ }}>
        <ReactPlayer
            src='https://www.youtube.com/watch?v=LYZvA-f5y5g'
            width="100%"
            height="100%"
            controls
            style={{ position: 'absolute', top: 0, left: 0 }}
        />
        </div>
    </div>
  );
}
