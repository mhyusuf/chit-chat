import React, { useState } from "react";
import { registerStudent } from "../../actions/studentActions";
import { connect } from "react-redux";
import { User } from "../../interfaces/reducerInterfaces";
import "./Register.scss";
import cat from "../../assets/cat.png";

const Register = ({ registerStudent }: { registerStudent: Function }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    courseId: "",
    roomId: "",
    avatar: "cat",
  });

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>): void => {
    setInput((prevInput) => {
      return { ...prevInput, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    console.log(input);
    const { email, name, password, avatar, roomId, courseId } = input;
    registerStudent(email, name, password, avatar, roomId, courseId);
    // setInput({
    //   name: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   courseId: "",
    //   roomId: "",
    //   avatar: "cat",
    // });
  };

  return (
    <div className="register-grand-wrapper">
      <div className="register-grand-wrapper__form">
        <h2>Register</h2>
        <form action="" onChange={handleChange}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={input.name}
          />
          <input
            type="email"
            name="email"
            value={input.email}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            value={input.password}
            placeholder="password"
          />
          <input
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            placeholder="confirm password"
          />
          <input
            type="text"
            name="courseId"
            value={input.courseId}
            id="courseId"
            placeholder="course id"
          />
          <input
            type="text"
            name="roomId"
            value={input.roomId}
            id="roomId"
            placeholder="room id"
          />
          <button onClick={handleClick}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }: { user: User }) => {
  return { user };
};

export default connect(mapStateToProps, { registerStudent })(Register);

// avatar: "cat"
// confirmPassword: "password"
// courseId: "ffcbd9d6-e39a-4504-83b6-29da127d14bc"
// email: "andre@andre.com"
// name: "Andre"
// password: "password"
// roomId: "2a38b80c-027e-45c4-b7e5-d431b7179af9"
