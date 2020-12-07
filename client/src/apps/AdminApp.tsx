import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

const AdminApp: FunctionComponent<any> = () => {
  return (
    <div>
      <Link to="/administrator/create-course">Create Course</Link>
      <Link to="/administrator/edit-course">Edit Course</Link>
      <Link to="/administrator/delete-course">Delete Course</Link>
    </div>
  );
};

export default AdminApp;
