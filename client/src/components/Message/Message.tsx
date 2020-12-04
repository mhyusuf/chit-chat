import React, { FunctionComponent } from "react";
import "./Message.scss";
// {sender: {name: 'Matt', avatar: 'MH'},
// text_content: 'Hola amigos! ¿Qué tal?',
// timeSent: 'today', self: true},

const Message: FunctionComponent<any> = (props) => {
  const { sender, content, createdAt } = props.message;

  return props.self ? (
    <>
      <div className="message-grand-wrapper__message-block">
        <p className="text">{content}</p>
        <p className="timestamp">{createdAt}</p>
      </div>
      <div className="message-grand-wrapper__avatar-wrapper">
        <div className="message-grand-wrapper__avatar-wrapper__avatar" />
      </div>
    </>
  ) : (
    <>
      <div className="message-grand-wrapper__avatar-wrapper">
        <div className="message-grand-wrapper__avatar-wrapper__avatar" />
      </div>
      <div className="message-grand-wrapper__message-block">
        <p className="text">{content}</p>
        <p className="timestamp">{createdAt}</p>
      </div>
    </>
  );
};

export default Message;
