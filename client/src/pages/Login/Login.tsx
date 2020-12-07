import React, { FormEvent, FunctionComponent, useState } from "react";
import { connect } from "react-redux";
import { loginTeacher, loginStudent } from "../../actions";
import Logo from "../../assets/color-logo.png";
import "./Login.scss";

const Login: FunctionComponent<any> = ({
  loginTeacher,
  loginStudent,
  history,
}) => {
  const [teacherStatus, setTeacherStatus] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  function toggleTeacher(e: any) {
    e.preventDefault();
    setTeacherStatus((teacherStatus) => !teacherStatus);
  }

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    if (teacherStatus) loginTeacher(formData, history);
    else loginStudent(formData, history);
  };

  const teacherButton = teacherStatus ? (
    <button
      className="toggle-button toggle-button--teacher"
      onClick={toggleTeacher}
    >
      switch to <br />
      Student login
    </button>
  ) : (
    <button
      className="toggle-button toggle-button--student"
      onClick={toggleTeacher}
    >
      switch to <br />
      Teacher login
    </button>
  );

  const promptText = teacherStatus ? (
    <h2>Login as Teacher</h2>
  ) : (
    <h2>Login as Student</h2>
  );

  return (
    <>
      <div className="top-page-grand-wrapper">
        <div className="bottom-half-grand-wrapper__textbox">
          <p>
            <h1>Welcome to Chit Chat,</h1> where foreign classrooms connect in
            real-time for language and cultural exchange
          </p>
        </div>
        <img src={Logo} alt="" />
      </div>
      <div className="bottom-half-grand-wrapper">
        <div className="bottom-half-grand-wrapper__login-grand-wrapper">
          <div className="bottom-half-grand-wrapper__login-grand-wrapper__center-block">
            <div className="bottom-half-grand-wrapper__login-grand-wrapper__center-block__top-row">
              {promptText}
              {teacherButton}
            </div>
            <form onSubmit={loginHandler}>
              <label className="align-email" htmlFor="email">
                Email:{" "}
              </label>
              <input
                onChange={handleInputChange}
                value={formData.email}
                className="align-email"
                name="email"
                type="text"
              />
              <label className="align-pw" htmlFor="password">
                Password:{" "}
              </label>
              <input
                onChange={handleInputChange}
                value={formData.password}
                className="align-pw"
                name="password"
                type="password"
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { loginStudent, loginTeacher })(Login);
