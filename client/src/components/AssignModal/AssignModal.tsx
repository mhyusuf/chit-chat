import React, { FunctionComponent } from "react";

import "./AssignModal.scss";

const AssignModal: FunctionComponent<any> = ({ handleClose }) => {
  return (
    <div onClick={handleClose} className="AssignModal__grand-wrapper">
      <h1>Assigment Modal</h1>
    </div>
  );
};

export default AssignModal;
