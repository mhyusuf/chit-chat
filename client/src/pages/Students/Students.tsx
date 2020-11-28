import React, { FunctionComponent } from "react";
import StudentPreview from "../../components/StudentPreview";

import "./Students.scss";

const mocks = [
  { name: "Dave", id: 1 },
  { name: "David", id: 2 },
  { name: "David D", id: 3 },
  { name: "Davey D", id: 4 },
  { name: "Brian", id: 5 },
  { name: "Dora", id: 6 },
  { name: "The", id: 7 },
  { name: "Explorer", id: 8 },
  { name: "Explorer", id: 9 },
  { name: "Dave", id: 10 },
  { name: "David", id: 11 },
  { name: "David D", id: 13 },
  { name: "Davey D", id: 14 },
  { name: "Brian", id: 15 },
  { name: "Dora", id: 16 },
  { name: "The", id: 17 },
  { name: "Explorer", id: 18 },
  { name: "Explorer", id: 19 },
  { name: "Dave", id: 21 },
  { name: "David", id: 22 },
  { name: "David D", id: 23 },
  { name: "Davey D", id: 24 },
  { name: "Brian", id: 25 },
  { name: "Dora", id: 26 },
  { name: "The", id: 27 },
  { name: "Explorer", id: 28 },
  { name: "Explorer", id: 29 },
];

const Students: FunctionComponent = () => {
  return (
    <div className="students-grand-wrapper">
      <h1>Students: Class 7e</h1>
      <div className="students-grand-wrapper__students-container">
        <div className="students-grand-wrapper__students-container__students-container-wrapper">
          {mocks.map((student) => {
            return (
              <StudentPreview
                name={student.name}
                studentId={student.id}
                key={student.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Students;
