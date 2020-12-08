import React, {
  FormEvent,
  FunctionComponent,
  useState,
  useEffect,
} from "react";
import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { loginTeacher, loginStudent } from "../../actions";
import Logo from "../../assets/color-logo.png";
import { History } from "history";
import "./Login.scss";
import { SET_ERROR } from "../../actions/types";

interface UserCredentials {
  email: string;
  password: string;
}

interface LoginProps {
  loginTeacher: (
    { email, password }: UserCredentials,
    history: History
  ) => Promise<void>;
  loginStudent: (
    { email, password }: UserCredentials,
    history: History
  ) => Promise<void>;
  error: string;
  history: History<any>;
}

const Login: FunctionComponent<LoginProps> = ({
  loginTeacher,
  loginStudent,
  history,
  error,
}) => {
  const [teacherStatus, setTeacherStatus] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch({ type: SET_ERROR, payload: "" });
    };
  }, []);

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
          <h1>Welcome to Chit Chat,</h1>{" "}
          <p>
            where foreign classrooms connect in real-time for language and
            cultural exchange
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
            {error && <div className="error">{error}</div>}
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
                required
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
                required
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
      <div className="register-link-container">
        <p>New to Chit Chat?</p>
        <NavLink to="/register">
          <button>Register</button>
        </NavLink>
      </div>
    </>
  );
};

const mapStateToProps = ({ error }: { error: string }) => {
  return { error };
};

export default connect(mapStateToProps, { loginStudent, loginTeacher })(Login);
