import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from "react";
import { connect, useDispatch } from "react-redux";
import io from "socket.io-client";
import axios from "axios";
import { IoIosSend } from "react-icons/io";
import { IoText } from "react-icons/io5";
import { GiSpeaker } from "react-icons/gi";
import { getAllMessagesByRoom, getRoomUsers } from "../../actions";

import AudioCapture from "../../components/AudioCapture";
import Message from "../../components/Message";
import {
  CourseState,
  Message as IMessage,
} from "../../interfaces/reducerInterfaces";
import "./RoomDetail.scss";
import {
  RoomDetailState,
  RoomParticipant,
  User,
} from "../../interfaces/reducerInterfaces";
import { RouteComponentProps } from "react-router-dom";
import UserAvatar from "../../components/UserAvatar";
import { SET_ERROR, CLEAR_ROOM_DETAIL } from "../../actions/types";
import translate from "../../utils/translate.js";

const socket = io.connect("/");

interface matchInterface {
  id: string;
}

interface RoomDetailProps extends RouteComponentProps<matchInterface> {
  roomDetail: RoomDetailState;
  getAllMessagesByRoom: (id: string) => void;
  getRoomUsers: (id: string) => void;
  user: User;
  targetLanguage: string;
  error: string;
}

const RoomDetail: FunctionComponent<RoomDetailProps> = (props) => {
  const {
    roomDetail,
    getAllMessagesByRoom,
    getRoomUsers,
    match,
    user,
    targetLanguage,
    error,
  } = props;
  const [audioSelected, setAudioSelected] = useState(false);
  const [input, setInput] = useState("");
  const [blobURL, setBlobURL] = useState("");
  const [localMessages, setLocalMessages] = useState<IMessage[]>([]);

  const { id } = match.params;

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    getRoomUsers(id);
    getAllMessagesByRoom(id);

    socket.on("message", (newMessage: any) => {
      setLocalMessages((msgs) => [...msgs, newMessage]);
    });

    return () => {
      dispatch({ type: CLEAR_ROOM_DETAIL });
      dispatch({ type: SET_ERROR, payload: "" });
    };
  }, []);

  useEffect(() => {
    setLocalMessages(roomDetail.messages);
  }, [roomDetail.messages]);

  function blobHandler(blob: any) {
    setBlobURL(blob);
  }

  const studentList = roomDetail.students.map(
    (user: RoomParticipant, idx: number) => {
      return (
        <div
          key={`${idx}/student`}
          className="room-detail-grand-wrapper__chat-block__user-item"
        >
          <span>{user.name}</span>
          <UserAvatar avatarString={user.avatar} />
        </div>
      );
    }
  );
  const teacherList = roomDetail.teachers.map(
    (user: RoomParticipant, idx: number) => (
      <div
        key={`${idx}/teacher`}
        className="room-detail-grand-wrapper__chat-block__user-item"
      >
        <span>{user.name}</span>
        <UserAvatar avatarString={user.avatar} />
      </div>
    )
  );

  const allMessagesJSX = localMessages.map((message, idx) => {
    const self = message.sender.name === user.name;
    const classes = self
      ? "message-grand-wrapper message-grand-wrapper--self"
      : "message-grand-wrapper";
    return (
      <div
        className={classes}
        ref={idx === localMessages.length - 1 ? setRef : null}
        key={`${idx}/${message.content}`}
      >
        <Message message={message} self={self} />
      </div>
    );
  });

  function toggleAudioSelected() {
    setAudioSelected((selected) => {
      dispatch({ type: SET_ERROR, payload: "" });
      return !selected;
    });
  }
  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  async function handlePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (audioSelected) {
      const res = await fetch(blobURL);
      const blob = await res.blob();
      const formData = new FormData();
      formData.append("contentType", "audio");
      formData.append("fileContent", blob);
      formData.append("RoomId", id);
      const { data } = await axios.post("/api/message", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      socket.emit("message", {
        sender: user,
        type: data.contentType,
        content: `/api/message/${data.id}/audio`,
        seenBy: data.seenBy,
        createdAt: data.createdAt,
      });
    } else {
      if (!input.trim()) {
        dispatch({ type: SET_ERROR, payload: "Please enter a message." });
      } else {
        dispatch({ type: SET_ERROR, payload: "" });
        socket.emit("message", {
          sender: user,
          type: "text",
          content: input,
          seenBy: [user.userId],
          createdAt: Date.now(),
        });
        axios.post("/api/message", {
          textContent: input,
          contentType: "text",
          RoomId: id,
        });
      }
    }
    setInput("");
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
        <AudioCapture blobHandler={blobHandler} />
      </form>
    </div>
  );

  return (
    <div className="room-detail-grand-wrapper">
      <h1>{roomDetail.roomName} Chat</h1>
      <div className="room-detail-grand-wrapper__chat-block">
        <div className="room-detail-grand-wrapper__chat-block__user-list">
          <h3>{translate("Teachers", targetLanguage)}:</h3>
          {teacherList}
          <h3>{translate("Teammates", targetLanguage)}:</h3>
          {studentList}
        </div>
        <div className="room-detail-grand-wrapper__chat-block__chatroom">
          <div className="room-detail-grand-wrapper__chat-block__chatroom__messages-wrapper">
            <div className="flex-div">{allMessagesJSX}</div>
          </div>
          {inputBlock}
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  roomDetail,
  user,
  course,
  error,
}: {
  roomDetail: RoomDetailState;
  user: User;
  course: CourseState;
  error: string;
}) => {
  return {
    roomDetail,
    user,
    targetLanguage: course.activeCourseDetail.targetLanguage,
    error,
  };
};

export default connect(mapStateToProps, { getAllMessagesByRoom, getRoomUsers })(
  RoomDetail
);
