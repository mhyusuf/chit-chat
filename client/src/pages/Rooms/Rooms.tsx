import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import RoomPreview from "../../components/RoomPreview";
import { getRoomsByCourse } from "../../actions/roomActions";
import "./Rooms.scss";
import {
  CourseState,
  RoomPreview as IRoomPreview,
} from "../../interfaces/reducerInterfaces";

interface RoomsProps {
  getRoomsByCourse: (id: string) => void;
  roomList: IRoomPreview[];
  activeCourse: number;
}

const Rooms: FunctionComponent<RoomsProps> = ({
  getRoomsByCourse,
  roomList,
  activeCourse,
}) => {
  useEffect(() => {
    if (activeCourse) getRoomsByCourse(`${activeCourse}`);
  }, [activeCourse]);

  return (
    <div className="rooms-grand-wrapper">
      <h1>Chats</h1>
      <div className="rooms-grand-wrapper__room-previews-wrapper">
        {roomList.length
          ? roomList.map((room, idx) => {
              return (
                <RoomPreview
                  teamName={room.name}
                  teamMembers={room.studentNames}
                  roomId={room.RoomId}
                  unseenMessages={room.unseenMessages}
                  key={`${idx}-room`}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

function mapStateToProps({
  roomList,
  course,
}: {
  roomList: IRoomPreview[];
  course: CourseState;
}) {
  return { roomList, activeCourse: course.activeCourse };
}

export default connect(mapStateToProps, { getRoomsByCourse })(Rooms);
