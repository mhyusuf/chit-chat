import React, { FunctionComponent, useState } from "react";
import TeacherApp from "./TeacherApp";
import StudentApp from "./StudentApp";
import { connect } from "react-redux";
import { User } from "../interfaces/reducerInterfaces";

const AuthorizedApp: FunctionComponent<any> = ({ user }) => {
  return <div>{user.isTeacher ? <TeacherApp /> : <StudentApp />}</div>;
};

function mapStateToProps({ user }: { user: User }) {
  return { user };
}
export default connect(mapStateToProps, {})(AuthorizedApp);
