import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const { snippet } = video;
  return (
    <div onClick={(e) => onVideoSelect(video)} className="video-item item">
      <img
        alt={snippet.title}
        className="ui image"
        src={snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
