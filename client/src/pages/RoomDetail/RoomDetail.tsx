import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from "react";
import { connect, useDispatch } from "react-redux";
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
import { GET_ALL_MESSAGES } from "../../actions/types";

const socket = io.connect("http://localhost:5000");

interface matchInterface {
  id: string;
}

interface RoomDetailProps extends RouteComponentProps<matchInterface> {
  roomDetail: RoomDetailState;
  getAllMessagesByRoom: (id: string) => void;
  getRoomUsers: (id: string) => void;
  user: User;
}

const RoomDetail: FunctionComponent<RoomDetailProps> = (props) => {
  const { roomDetail, getAllMessagesByRoom, getRoomUsers, match, user } = props;
  const [audioSelected, setAudioSelected] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const { id } = match.params;

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  useEffect(() => {
    getAllMessagesByRoom(id);
    getRoomUsers(id);

    socket.on("message", (newMessage: any) => {
      dispatch({
        type: GET_ALL_MESSAGES,
        payload: [...roomDetail.messages, newMessage],
      });
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
    const self = message.sender.name === user.name;
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
  async function handlePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (audioSelected) {
      // TODO;
    } else {
      socket.emit("message", {
        sender: user,
        type: "text",
        content: input,
        seenBy: [user.userId],
        createdAt: Date.now(),
      });
      createMessage({
        contentType: "text",
        textContent: input,
        RoomId: id,
      });
    }
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
  return { roomDetail, user };
};

export default connect(mapStateToProps, { getAllMessagesByRoom, getRoomUsers })(
  RoomDetail
);
