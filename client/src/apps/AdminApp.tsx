import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

const AdminApp: FunctionComponent<any> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "2rem" }}>
      <Link to="/administrator/create-course">Create Course</Link>
      <Link to="/administrator/edit-course">Edit Course</Link>
      <Link to="/administrator/delete-course">Delete Course</Link>
      <Link to="/administrator/create-resource">Create Resource</Link>
    </div>
  );
};

export default AdminApp;
