import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState,
} from "react";
import axios from "axios";

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
    await axios.post("/admin/course", formValues);
    history.push("/administrator");
  };

  return (
    <div>
      <h3>Create course pair</h3>
      <form onSubmit={handleSubmit}>
        <label>Level</label>
        <input type="number" onChange={handleInputChange} name="level" />

        <h4>Course A</h4>
        <label>Course Name</label>
        <input type="text" name="nameA" onChange={handleInputChange} />
        <label>Teacher ID</label>
        <input type="text" name="teacherA" onChange={handleInputChange} />
        <label>Language Code</label>
        <input type="text" name="langB" onChange={handleInputChange} />

        <h4>Course B</h4>
        <label>Course Name</label>
        <input type="text" name="nameB" onChange={handleInputChange} />
        <label>Teacher ID</label>
        <input type="text" name="teacherB" onChange={handleInputChange} />
        <label>Language Code</label>
        <input type="text" name="langA" onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseCreate;
