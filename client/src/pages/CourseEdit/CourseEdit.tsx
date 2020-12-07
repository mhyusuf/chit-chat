import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState,
} from "react";
import axios from "axios";

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
    await axios.put(`/admin/course/${formValues.id}`, formValues);
    history.push("/administrator");
  };

  return (
    <div>
      <h3>Edit course</h3>
      <form onSubmit={handleSubmit}>
        <label>Course ID</label>
        <input type="number" name="id" required onChange={handleInputChange} />
        <label>Teacher ID</label>
        <input type="number" name="TeacherId" onChange={handleInputChange} />
        <label>Language Code</label>
        <input type="text" name="targetLanguage" onChange={handleInputChange} />
        <label>Course Name</label>
        <input type="text" name="name" onChange={handleInputChange} />
        <label>Sister Course</label>
        <input type="number" name="sisterCourse" onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseEdit;
