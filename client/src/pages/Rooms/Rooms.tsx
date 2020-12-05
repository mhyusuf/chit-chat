import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import RoomPreview from "../../components/RoomPreview";
import { getRoomsByCourse } from "../../actions/roomActions";
import "./Rooms.scss";

interface IRoomPreview {
  name: string;
  studentNames: string[];
  unseenMessages: boolean;
  RoomId: string;
}
interface RoomListState {
  roomsByCourse: IRoomPreview[];
}

const mockData = [
  {
    name: "Blue",
    studentNames: [
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
    RoomId: "somerandomstring",
  },
  {
    name: "Green",
    studentNames: ["Timmy", "James", "Olivia", "Carmen", "Pili", "Juan"],
    unseenMessages: true,
    RoomId: "somerandomstring",
  },
  {
    name: "Yellow",
    studentNames: ["Timmy", "James", "Olivia", "Carmen", "Pili", "Juan"],
    unseenMessages: false,
    RoomId: "somerandomstring",
  },
];

const courseId = "1";

interface RoomsProps {
  getRoomsByCourse: (id: string) => void;
  roomList: RoomListState;
}

const Rooms: FunctionComponent<RoomsProps> = ({
  getRoomsByCourse,
  roomList,
}) => {
  useEffect(() => {
    getRoomsByCourse(courseId);
  }, []);

  console.log(roomList);

  return (
    <div className="rooms-grand-wrapper">
      <h1>Chats</h1>
      <div className="rooms-grand-wrapper__room-previews-wrapper">
        {roomList.roomsByCourse.length &&
          roomList.roomsByCourse.map((room, idx) => {
            return (
              <RoomPreview
                teamName={room.name}
                teamMembers={room.studentNames}
                roomId={room.RoomId}
                key={`${idx}-room`}
              />
            );
          })}
      </div>
    </div>
  );
};

function mapStateToProps({ roomList }: { roomList: RoomListState }) {
  return { roomList };
}

export default connect(mapStateToProps, { getRoomsByCourse })(Rooms);
