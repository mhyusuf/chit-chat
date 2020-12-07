import React, {
  FunctionComponent,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import axios from "axios";

const CourseDelete: FunctionComponent<any> = ({ history }) => {
  const [id, setId] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.delete(`/admin/course/${id}`);
    history.push("/administrator");
  };

  return (
    <div>
      <h3>Delete Course</h3>
      <form onSubmit={handleSubmit}>
        <label>Course ID</label>
        <input type="number" onChange={handleInputChange} name="id" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseDelete;
