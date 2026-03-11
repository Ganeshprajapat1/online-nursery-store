import React, { useEffect, useRef } from 'react';
import './Customize.css'; // Import the CSS file

const CameraComponent = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const streamRef = useRef();

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const closeCamera = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const capturedImageData = canvas.toDataURL('image/png');
    console.log('Captured Image Data:', capturedImageData);
  };

  useEffect(() => {
    return () => {
      closeCamera();
    };
  }, []);

  return (
    <div className="camera-container">
      <h1 className="section-title">CUSTOMIZE-SECTION</h1>
      <h2>TAKE A PHOTO</h2>
      <video ref={videoRef} autoPlay className="video-preview"></video>
      <canvas ref={canvasRef} className="hidden-canvas"></canvas>
      <button onClick={openCamera} className="action-button">OPEN</button>
      <button onClick={captureImage} className="action-button">CAPTURE</button>
      <button onClick={closeCamera} className="action-button">CLOSE</button>
      <hr />
      <div className="flower-options">
        <h2>FLOWERS</h2>
        <input type='checkbox' />
        <label className="flower-label">ROSES</label><br />
        <input type='checkbox' />
        <label className="flower-label">SUNFLOWER</label><br />
        <input type='checkbox' />
        <label className="flower-label">CACTUS</label><br />
        <input type='checkbox' />
        <label className="flower-label">I WILL WRITE IN BELOW- BOX</label><br />
      </div>
      <br /><hr />
      <div className="customize-options">
        <h2>Which Flower do you want in customization?</h2>
        <input type="text" className="customize-input" />
      </div>
      <div className="customize-options">
        <h2>Drop information about the type of Garden-Customization you want.</h2>
        <input type="text" className="customize-input2" />
      </div>
      <div>
        <button className='submit'>Submit</button>
      </div>
    </div>
  );
};

export default CameraComponent;
