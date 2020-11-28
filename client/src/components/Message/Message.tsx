import React, { FunctionComponent } from "react";
import "./Message.scss";
// {sender: {name: 'Matt', avatar: 'MH'},
// text_content: 'Hola amigos! ¿Qué tal?',
// timeSent: 'today', self: true},

const Message: FunctionComponent<any> = (props) => {
  const { sender, text_content, timeSent, self } = props.message;

  return self ? (
    <div className="message-grand-wrapper message-grand-wrapper--self">
      <div className="message-grand-wrapper__message-block">
        <p className="text">{text_content}</p>
        <p className="timestamp">{timeSent}</p>
      </div>
      <div className="message-grand-wrapper__avatar">{sender.avatar}</div>
    </div>
  ) : (
    <div className="message-grand-wrapper">
      <div className="message-grand-wrapper__avatar">{sender.avatar}</div>
      <div className="message-grand-wrapper__message-block">
        <p className="text">{text_content}</p>
        <p className="timestamp">{timeSent}</p>
      </div>
    </div>
  );
};

export default Message;
