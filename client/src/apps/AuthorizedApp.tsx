import React, { FunctionComponent, useState } from "react";
import TeacherApp from "./TeacherApp";
import StudentApp from "./StudentApp";

const AuthorizedApp: FunctionComponent<any> = () => {
  const [isTeacher, setIsTeacher] = useState(false);

  return <div>{isTeacher ? <TeacherApp /> : <StudentApp />}</div>;
};

export default AuthorizedApp;
