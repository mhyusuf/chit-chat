import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";

import { Course } from "../../interfaces/reducerInterfaces";
import "./CourseSelect.scss";

interface CourseSelectProps {
  courses: Course[];
  setActiveCourse: (course: string) => void;
}

const CourseSelect: FunctionComponent<CourseSelectProps> = ({
  courses,
  setActiveCourse,
}) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  useEffect(() => {
    setSelectedCourse(courses[0].id);
    setActiveCourse(courses[0].id);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(e.target.value);
    setActiveCourse(e.target.value);
  };

  return (
    <div className="course-select-grand-wrapper">
      <select value={selectedCourse} onChange={handleChange}>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseSelect;
