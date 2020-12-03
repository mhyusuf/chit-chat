import React, { FunctionComponent, useEffect, useState } from "react";
import { createMessage } from "../../apiService/messageService";
import io from "socket.io-client";
import { IoIosSend } from "react-icons/io";
import { IoText } from "react-icons/io5";
import { GiSpeaker } from "react-icons/gi";

import AudioCapture from "../../components/AudioCapture";
import Message from "../../components/Message";
import "./RoomDetail.scss";

const teachers = [
  {
    name: "Mme. LeBlanc",
    avatar: "ML",
  },
  {
    name: "Sr. Marquez",
    avatar: "SM",
  },
];
const students = [
  {
    name: "Matt",
    avatar: "MH",
  },
  {
    name: "Johan",
    avatar: "JS",
  },
  {
    name: "Mohamed",
    avatar: "MY",
  },
  {
    name: "Brett",
    avatar: "BG",
  },
  {
    name: "SooYeon",
    avatar: "SK",
  },
  {
    name: "Olly",
    avatar: "OB",
  },
];
const messages = [
  {
    sender: { name: "Matt", avatar: "MH" },
    text_content: "Hola amigos! ¿Qué tal?",
    timeSent: "today",
    self: true,
  },
  {
    sender: { name: "Brett", avatar: "BG" },
    text_content: "Mon français est toujours mal, désolé...",
    timeSent: "today",
    self: false,
  },
  {
    sender: { name: "SooYeon", avatar: "SK" },
    text_content: "Bonjour!",
    timeSent: "today",
    self: false,
  },
  {
    sender: { name: "Olly", avatar: "OB" },
    text_content: "Entschuldigung, falsches Chatzimmer!",
    timeSent: "today",
    self: false,
  },
  {
    sender: { name: "Mohamed", avatar: "MY" },
    text_content: "¡Encantado de conocervos todos!",
    timeSent: "today",
    self: false,
  },
  {
    sender: { name: "Johan", avatar: "JS" },
    text_content: "Still learning English, sorry.",
    timeSent: "today",
    self: false,
  },
  {
    sender: { name: "Matt", avatar: "MH" },
    text_content: "Soy inglese, pero hablo espånnol muy bien.",
    timeSent: "today",
    self: true,
  },
];

const socket = io.connect("http://localhost:5000");

const RoomDetail: FunctionComponent = () => {
  const [audioSelected, setAudioSelected] = useState(false);
  const [input, setInput] = useState("");
  const [allMessages, setAllMessages] = useState(messages);

  useEffect(() => {
    socket.on("message", (message: any) => {
      setAllMessages((msgs) => {
        return [...msgs, message];
      });
    });
  }, []);

  const studentList = students.map((user, idx) => (
    <div key={idx} className="room-detail-grand-wrapper__chat-block__user-item">
      <span>{user.name}</span>
      <div className="room-detail-grand-wrapper__chat-block__user-item__avatar">
        {user.avatar}
      </div>
    </div>
  ));
  const teacherList = teachers.map((user, idx) => (
    <div key={idx} className="room-detail-grand-wrapper__chat-block__user-item">
      <span>{user.name}</span>
      <div className="room-detail-grand-wrapper__chat-block__user-item__avatar">
        {user.avatar}
      </div>
    </div>
  ));

  const renderEverything = () => {
    return allMessages.map((message, idx) => (
      <Message key={idx} message={message} />
    ));
  };

  function toggleAudioSelected() {
    setAudioSelected((selected) => !selected);
  }
  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  function handlePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newMessage = createMessage({
      sender: { name: "Matt", avatar: "MH" },
      text_content: "OMG ITS WORKING!!!!",
      timeSent: "today",
      self: true,
    });
    socket.emit("message", newMessage);
    //trigger socket with message from variable Input and state Current User
  }

  const inputBlock = !audioSelected ? (
    <div className="room-detail-grand-wrapper__chat-block__chatroom__input">
      <div
        className="room-detail-grand-wrapper__chat-block__chatroom__input__audio-icon"
        onClick={() => toggleAudioSelected()}
      >
        <GiSpeaker />
      </div>
      <form onSubmit={handlePost}>
        <input
          type="text"
          value={input}
          onChange={(e) => handleTextChange(e)}
        />
        <button type="submit" className="submit-button">
          <IoIosSend className="send-icon" />
        </button>
      </form>
    </div>
  ) : (
    <div className="room-detail-grand-wrapper__chat-block__chatroom__input room-detail-grand-wrapper__chat-block__chatroom__input--audio">
      <div
        className="room-detail-grand-wrapper__chat-block__chatroom__input__audio-icon"
        onClick={() => toggleAudioSelected()}
      >
        <IoText />
      </div>
      <form onSubmit={handlePost}>
        <AudioCapture />
      </form>
    </div>
  );

  return (
    <div className="room-detail-grand-wrapper">
      <h1>Blue Team Chat</h1>
      <div className="room-detail-grand-wrapper__chat-block">
        <div className="room-detail-grand-wrapper__chat-block__user-list">
          <h3>Teachers:</h3>
          {teacherList}
          <h3>Teammates:</h3>
          {studentList}
        </div>
        <div className="room-detail-grand-wrapper__chat-block__chatroom">
          <div className="room-detail-grand-wrapper__chat-block__chatroom__messages-wrapper">
            {renderEverything()}
          </div>
          {inputBlock}
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
