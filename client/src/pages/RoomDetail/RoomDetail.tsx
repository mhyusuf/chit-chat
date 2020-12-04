import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from "react";
import { connect } from "react-redux";
import { createMessage } from "../../apiService/messageService";
import io from "socket.io-client";
import { IoIosSend } from "react-icons/io";
import { IoText } from "react-icons/io5";
import { GiSpeaker } from "react-icons/gi";
import { getAllMessagesByRoom, getRoomUsers } from "../../actions";

import AudioCapture from "../../components/AudioCapture";
import Message from "../../components/Message";
import "./RoomDetail.scss";
import {
  RoomDetailState,
  RoomParticipant,
  User,
} from "../../interfaces/reducerInterfaces";
import { RouteComponentProps } from "react-router-dom";

const socket = io.connect("http://localhost:5000");

interface matchInterface {
  id: string;
}

interface RoomDetailProps extends RouteComponentProps<matchInterface> {
  roomDetail: RoomDetailState;
  getAllMessagesByRoom: (id: string) => void;
  getRoomUsers: (id: string) => void;
  username: string;
}

const RoomDetail: FunctionComponent<RoomDetailProps> = (props) => {
  const {
    roomDetail,
    getAllMessagesByRoom,
    getRoomUsers,
    match,
    username,
  } = props;
  const [audioSelected, setAudioSelected] = useState(false);
  const [input, setInput] = useState("");

  const { id } = match.params;

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  useEffect(() => {
    getAllMessagesByRoom(id);
    getRoomUsers(id);

    socket.on("message", (message: any) => {
      getAllMessagesByRoom(id);
    });
  }, []);

  const studentList = roomDetail.students.map(
    (user: RoomParticipant, idx: number) => (
      <div
        key={idx}
        className="room-detail-grand-wrapper__chat-block__user-item"
      >
        <span>{user.name}</span>
        <div className="room-detail-grand-wrapper__chat-block__user-item__avatar">
          {user.avatar}
        </div>
      </div>
    )
  );
  const teacherList = roomDetail.teachers.map(
    (user: RoomParticipant, idx: number) => (
      <div
        key={idx}
        className="room-detail-grand-wrapper__chat-block__user-item"
      >
        <span>{user.name}</span>
        <div className="room-detail-grand-wrapper__chat-block__user-item__avatar">
          {user.avatar}
        </div>
      </div>
    )
  );

  const allMessagesJSX = roomDetail.messages.map((message, idx) => {
    const self = message.sender.name === username;
    const classes = self
      ? "message-grand-wrapper message-grand-wrapper--self"
      : "message-grand-wrapper";
    return (
      <div
        className={classes}
        ref={idx === roomDetail.messages.length - 1 ? setRef : null}
      >
        <Message key={idx} message={message} self={self} />
      </div>
    );
  });

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
            <div className="flex-div">{allMessagesJSX}</div>
          </div>
          {inputBlock}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  roomDetail,
  user,
}: {
  roomDetail: RoomDetailState;
  user: User;
}) => {
  return { roomDetail, username: user.name };
};

export default connect(mapStateToProps, { getAllMessagesByRoom, getRoomUsers })(
  RoomDetail
);
