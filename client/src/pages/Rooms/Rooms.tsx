import React, { FunctionComponent } from "react";
import RoomPreview from "../../components/RoomPreview";

import "./Rooms.scss";

const mockData = [
  {
    roomName: "Blue",
    teamMembers: [
      "Timmy",
      "James",
      "Olivia",
      "Carmen",
      "Pili",
      "Juan",
      "Joe",
      "Matt",
      "Matt Again",
    ],
    unseenMessages: false,
    roomId: "somerandomstring",
  },
  {
    roomName: "Green",
    teamMembers: ["Timmy", "James", "Olivia", "Carmen", "Pili", "Juan"],
    unseenMessages: true,
    roomId: "somerandomstring",
  },
  {
    roomName: "Yellow",
    teamMembers: ["Timmy", "James", "Olivia", "Carmen", "Pili", "Juan"],
    unseenMessages: false,
    roomId: "somerandomstring",
  },
];

const Rooms: FunctionComponent = () => {
  return (
    <div className="rooms-grand-wrapper">
      <h1>Chats</h1>
      <div className="rooms-grand-wrapper__room-previews-wrapper">
        {mockData.map((event) => {
          return (
            <RoomPreview
              teamName={event.roomName}
              teamMembers={event.teamMembers}
              unseenMessages={event.unseenMessages}
              roomId={event.roomId}
              key={event.roomId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
