import React, { FunctionComponent, useState } from "react";
import "./Login.scss";

const Login: FunctionComponent<any> = () => {
  const [teacherStatus, setTeacherStatus] = useState(false);

  function toggleTeacher(e: any) {
    e.preventDefault();
    setTeacherStatus((teacherStatus) => !teacherStatus);
  }

  const teacherButton = teacherStatus ? (
    <button
      className="toggle-button toggle-button--teacher"
      onClick={toggleTeacher}
    >
      change to Student login
    </button>
  ) : (
    <button
      className="toggle-button toggle-button--student"
      onClick={toggleTeacher}
    >
      change to Teacher login
    </button>
  );

  const promptText = teacherStatus ? (
    <h2>Login as Teacher</h2>
  ) : (
    <h2>Login as Student</h2>
  );

  return (
    <div className="login-grand-wrapper">
      <div className="login-grand-wrapper__center-block">
        <div className="login-grand-wrapper__center-block__top-row">
          {promptText}
          {teacherButton}
        </div>
        <form>
          <label className="align-email" htmlFor="email">
            Email:{" "}
          </label>
          <input className="align-email" name="email" type="text" />
          <label className="align-pw" htmlFor="pw">
            Password:{" "}
          </label>
          <input className="align-pw" name="pw" type="password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
