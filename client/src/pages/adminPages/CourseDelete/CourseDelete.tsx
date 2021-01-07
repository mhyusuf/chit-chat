import React, {
  FunctionComponent,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import axios from "axios";
import "./CourseDelete.scss";

const REACT_APP_SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:5000";

const CourseDelete: FunctionComponent<any> = ({ history }) => {
  const [id, setId] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.delete(`${REACT_APP_SERVER_URI}/admin/course/${id}`);
    history.push("/administrator");
  };

  return (
    <div>
      <h3>Delete Course</h3>
      <form onSubmit={handleSubmit} className="delete-course-form">
        <label>
          Course ID
          <input type="number" onChange={handleInputChange} name="id" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseDelete;
