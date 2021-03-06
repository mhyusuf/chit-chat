import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState,
} from "react";
import axios from "axios";

import "./CourseCreate.scss";

const REACT_APP_SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:5000";

const CourseCreate: FunctionComponent<any> = ({ history }) => {
  const [formValues, setFormValues] = useState<{
    level: number | null;
    teacherA: string;
    teacherB: string;
    langA: string;
    langB: string;
    nameA: string;
    nameB: string;
  }>({
    level: null,
    teacherA: "",
    teacherB: "",
    langA: "",
    langB: "",
    nameA: "",
    nameB: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((formValues) => ({
      ...formValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post(`${REACT_APP_SERVER_URI}/admin/course`, formValues);
    history.push("/administrator");
  };

  return (
    <div>
      <h3>Create course pair</h3>
      <form onSubmit={handleSubmit} className="create-course-form">
        <label>
          Level
          <input type="number" onChange={handleInputChange} name="level" />
        </label>
        <div className="course-create-section">
          <h4>Course A</h4>
          <label>
            Course Name
            <input type="text" name="nameA" onChange={handleInputChange} />
          </label>
          <label>
            Teacher ID
            <input type="text" name="teacherA" onChange={handleInputChange} />
          </label>
          <label>
            Language Code
            <input type="text" name="langB" onChange={handleInputChange} />
          </label>
        </div>

        <div className="course-create-section">
          <h4>Course B</h4>
          <label>
            Course Name
            <input type="text" name="nameB" onChange={handleInputChange} />
          </label>
          <label>
            Teacher ID
            <input type="text" name="teacherB" onChange={handleInputChange} />
          </label>
          <label>
            Language Code
            <input type="text" name="langA" onChange={handleInputChange} />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseCreate;
