import React from 'react';
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 380,
    height: 346,
    facingMode: "user"
};

export const WebcamCapture = ({ image, setImage }) => {

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log('IMAGE', imageSrc, 'TYPE OF', typeof imageSrc)
        setImage(imageSrc)
    });

    function handleSnapButton (e) {
      e.preventDefault();
      capture();
    }

    function handleRetakeButton (e) {
      e.preventDefault();
      setImage('')
    }

    return (
        <div className="webcam-window">
            <div className="webcam">
                {image === '' ? 
                    <Webcam
                    audio={false}
                    height={346}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={380}
                    videoConstraints={videoConstraints}/> : 
                    <img src={image} alt=""/>
                }
            </div>
            <div className="webcam-buttons">
                {image !== '' ?
                    <button className="webcam-snap-button" type="submit" onClick={handleRetakeButton}>Retake</button> :
                    <button className="webcam-snap-button" type="submit" onClick={handleSnapButton}>Snap!</button>
                }
            </div>
        </div>
    );
};
