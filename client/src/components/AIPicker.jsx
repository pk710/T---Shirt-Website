import React from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { down } from "../assets";

const AIPicker = () => {
  const captureScreenshot = async () => {
    try {
      const canvas = await html2canvas(document.body, {
        useCORS: true,
        scale: 1,
      });

      const cropX = 500; // Replace with your desired x-coordinate
      const cropY = 100; // Replace with your desired y-coordinate
      const cropWidth = 500; // Replace with your desired width
      const cropHeight = 518; // Replace with your desired height

      // Draw the cropped region onto the same canvas
      const croppedCanvas = document.createElement('canvas');
      const croppedCtx = croppedCanvas.getContext('2d');

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;

      croppedCtx.drawImage(canvas, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

      croppedCanvas.toBlob((blob) => {
        saveAs(blob, 't-shirt-img.png');
      });
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

  return (
    <div className="aipicker-container" style={{ position: 'fixed', width: '200%', height: '18vh' }}>
      <div style={{ position: 'fixed', alignItems: 'center',  justifyContent: 'center' }}>
      <button 
  onClick={captureScreenshot}
  style={{ 
    cursor: 'pointer', 
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none', 
    background: 'none', 
    padding: '0',
    width: '100px',
    height: '100px'
  }}
>
  <img src={down} alt="Capture" />
</button>
      </div>
    </div>
  );
};

export default AIPicker;
