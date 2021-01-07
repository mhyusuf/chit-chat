import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState,
} from "react";
import axios from "axios";

import "./CourseEdit.scss";

const REACT_APP_SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:5000";

const CourseEdit: FunctionComponent<any> = ({ history }) => {
  const [formValues, setFormValues] = useState<{
    id: number | null;
    TeacherId: number | null;
    targetLanguage: string;
    name: string;
    sisterCourse: number | null;
  }>({
    id: null,
    TeacherId: null,
    targetLanguage: "",
    name: "",
    sisterCourse: null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((formValues) => ({
      ...formValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.put(
      `${REACT_APP_SERVER_URI}/admin/course/${formValues.id}`,
      formValues
    );
    history.push("/administrator");
  };

  return (
    <div>
      <h3>Edit course</h3>
      <form onSubmit={handleSubmit} className="edit-course-form">
        <label>
          Course ID
          <input
            type="number"
            name="id"
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          Teacher ID
          <input type="number" name="TeacherId" onChange={handleInputChange} />
        </label>
        <label>
          Language Code
          <input
            type="text"
            name="targetLanguage"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Course Name
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <label>
          Sister Course
          <input
            type="number"
            name="sisterCourse"
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseEdit;
