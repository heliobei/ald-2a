// app/components/FullScreenIframe.jsx
import React from 'react';

const FullScreenIframe = ({ src }) => {
  return (
    <div className="h-screen w-screen">
      <iframe
        src={src}
        className="h-full w-full"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FullScreenIframe;
