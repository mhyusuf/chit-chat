import React, { FunctionComponent } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import "./AudioCapture.scss";

const AudioCapture: FunctionComponent<any> = () => {
  const {
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });

  const startButton = (
    <button
      className="audio-capture-grand-wrapper__buttons-wrapper__button"
      onClick={(e) => {
        e.preventDefault();
        startRecording();
      }}
      id="startButton"
    />
  );

  const stopButton = (
    <button
      className="audio-capture-grand-wrapper__buttons-wrapper__button"
      onClick={(e) => {
        e.preventDefault();
        stopRecording();
      }}
      id="stopButton"
    />
  );

  return (
    <div className="audio-capture-grand-wrapper">
      <div className="audio-capture-grand-wrapper__buttons-wrapper">
        {startButton}
        {stopButton}
      </div>
      <div className="audio-capture-grand-wrapper__audio-elements-wrapper">
        <audio className="audInput" controls={true}>
          <source type="audio/mp3" />
          Browser does not support audio tag
        </audio>
        {mediaBlobUrl && (
          <audio src={mediaBlobUrl} className="audOutput" controls></audio>
        )}
      </div>
      <button className="submit-button submit-button--audio">^</button>
    </div>
  );
};

export default AudioCapture;
