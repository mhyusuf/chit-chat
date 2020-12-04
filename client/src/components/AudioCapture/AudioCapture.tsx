import React, { FunctionComponent, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { IoIosSend } from "react-icons/io";
import { FaMicrophone, FaStop } from "react-icons/fa";

import "./AudioCapture.scss";

const AudioCapture: FunctionComponent<any> = ({ blobHandler }) => {
  const [recording, setRecording] = useState(false);
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
        setRecording(true);
      }}
      id="startButton"
    >
      <FaMicrophone />
    </button>
  );

  const stopButton = (
    <button
      className="audio-capture-grand-wrapper__buttons-wrapper__button"
      onClick={(e) => {
        e.preventDefault();
        stopRecording();
        setRecording(false);
        setTimeout(() => {
          const audio: any = document.querySelector(".audOutput");
          const url = audio.src;
          blobHandler(url);
        }, 0);
      }}
      id="stopButton"
    >
      <FaStop />
    </button>
  );

  return (
    <div className="audio-capture-grand-wrapper">
      <div className="audio-capture-grand-wrapper__buttons-wrapper">
        {recording ? stopButton : startButton}
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
      <button className="submit-button submit-button--audio">
        <IoIosSend className="send-icon" />
      </button>
    </div>
  );
};

export default AudioCapture;
