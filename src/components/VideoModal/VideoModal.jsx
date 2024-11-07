import React from 'react';
import './VideoModal.css';

const VideoModal = ({ videoUrl, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="video-container">
          <iframe
            src={videoUrl}
            title="Video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <p className="video-help">
            If you are having any trouble regarding payment, check this video.
            For further queries regarding payment
          </p>
          <p className="video-help">Contact- Vijayant Singh - 7318470477</p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
