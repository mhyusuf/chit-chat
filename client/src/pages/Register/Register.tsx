import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { registerStudent } from "../../actions/studentActions";
import { connect } from "react-redux";
import { User } from "../../interfaces/reducerInterfaces";
import UserAvatar from "../../components/UserAvatar";
import "./Register.scss";

const Register = ({ registerStudent }: { registerStudent: Function }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    courseId: "",
    roomId: "",
    avatar: "monkey",
  });

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>): void => {
    console.log(e.target.name, e.target.value);
    setInput((prevInput) => {
      return { ...prevInput, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    const { email, name, password, avatar, roomId, courseId } = input;
    registerStudent(email, name, password, avatar, roomId, courseId);
    setInput({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      courseId: "",
      roomId: "",
      avatar: "",
    });
  };

  return (
    <div className="register-grand-wrapper">
      <div className="register-grand-wrapper__form">
        <h2>Register</h2>
        <form action="" onChange={handleChange}>
          <div className="register-grand-wrapper__form__div">
            <input
              required
              type="text"
              name="name"
              placeholder="name"
              value={input.name}
            />
            <input
              required
              type="email"
              name="email"
              value={input.email}
              placeholder="email"
            />
          </div>
          <div className="register-grand-wrapper__form__div">
            <input
              required
              type="password"
              name="password"
              value={input.password}
              placeholder="password"
            />
            <input
              required
              type="password"
              name="confirmPassword"
              value={input.confirmPassword}
              placeholder="confirm password"
            />
          </div>
          <div className="register-grand-wrapper__form__div">
            <div className="register-grand-wrapper__form__div__select">
              {/* <label htmlFor="avatar-select">Choose an avatar:</label> */}
              <select name="avatar" id="avatar-select">
                <option value="">--Choose an avatar:--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="butterfly">Butterfly</option>
                <option value="fox">Fox</option>
                <option value="lion">Lion</option>
                <option value="frog">Frog</option>
                <option value="monkey">Monkey</option>
                <option value="panda">Panda</option>
                <option value="mouse">Mouse</option>
              </select>
            </div>
            <div
              style={{
                width: "20vw",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <UserAvatar
                avatarString={input.avatar}
                smaller={true}
                className="smaller"
              />
            </div>
          </div>
          <div className="register-grand-wrapper__form__div">
            <input
              required
              type="text"
              name="courseId"
              value={input.courseId}
              id="courseId"
              placeholder="course id"
            />
            <input
              required
              type="text"
              name="roomId"
              value={input.roomId}
              id="roomId"
              placeholder="room id"
            />
          </div>
          {input.password !== "" &&
            input.password !== input.confirmPassword && (
              <p style={{ color: "red" }}>Passwords don't match</p>
            )}
          {(input.password === "" ||
            input.password === input.confirmPassword) && (
            <div style={{ height: "19.33px" }}></div>
          )}
          <button
            disabled={
              input.password === "" || input.password !== input.confirmPassword
            }
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
      <NavLink to="/">
        <button className="register-grand-wrapper__back-btn">back</button>
      </NavLink>
    </div>
  );
};

const mapStateToProps = ({ user }: { user: User }) => {
  return { user };
};

export default connect(mapStateToProps, { registerStudent })(Register);
