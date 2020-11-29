import React, { FunctionComponent } from "react";
import "./AudioCapture.scss";

const constraints = {
  audio: true,
  video: false,
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((mediaStreamObj) => {
    let audios = document.querySelectorAll("audio");
    audios[0].srcObject = mediaStreamObj;

    let start = document.getElementById("startButton");
    let stop = document.getElementById("stopButton");
    let mediaRecorder = new MediaRecorder(mediaStreamObj);
    let chunks: any = [];

    console.log(start, stop);

    start &&
      start.addEventListener("click", (e) => {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
      });
    stop &&
      stop.addEventListener("click", (e) => {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
      });

    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };
    mediaRecorder.onstop = (e) => {
      let blob = new Blob(chunks, { type: "audio/mp3" });
      chunks = [];
      let audioURL = window.URL.createObjectURL(blob);
      audios[1].src = audioURL;
      audios[1].load();
    };
  })
  .catch((e) => {
    console.log(e.name, e.message);
  });

const AudioCapture: FunctionComponent<any> = () => {
  return (
    <div className="audio-capture-grand-wrapper">
      <div className="audio-capture-grand-wrapper__buttons-wrapper">
        <button
          className="audio-capture-grand-wrapper__buttons-wrapper__button"
          id="startButton"
        ></button>
        <button
          className="audio-capture-grand-wrapper__buttons-wrapper__button"
          id="stopButton"
        ></button>
      </div>
      <div className="audio-capture-grand-wrapper__audio-elements-wrapper">
        <audio className="audInput" controls={true}>
          <source type="audio/mp3" />
          Browser does not support audio tag
        </audio>
        <audio className="audOutput" controls></audio>
      </div>
      <button className="submit-button submit-button--audio">^</button>
    </div>
  );
};

export default AudioCapture;
