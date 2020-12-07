import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

const AdminApp: FunctionComponent<any> = () => {
  return <Link to="/administrator/create-course">Create Course</Link>;
};

export default AdminApp;
