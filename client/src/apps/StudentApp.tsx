import React, { FunctionComponent, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import StudentNav from "../components/StudentNav";
import AssignmentDetail from "../pages/AssignmentDetail";
import MyAssignments from "../pages/MyAssignments";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import RecentActivity from "../pages/RecentActivity";
import RoomDetail from "../pages/RoomDetail";
import StudentDetail from "../pages/StudentDetail";
import Students from "../pages/Students";
import TaskDetail from "../pages/TaskDetail";
import Tasks from "../pages/Tasks";
import { CourseState, StudentUser } from "../interfaces/reducerInterfaces";
import { setActiveCourse } from "../actions";
import { connect } from "react-redux";

interface StudentAppProps {
  user: StudentUser;
  setActiveCourse: Function;
}

const StudentApp: FunctionComponent<StudentAppProps> = (props) => {
  const { user, setActiveCourse } = props;

  useEffect(() => {
    setActiveCourse(`${user.CourseId}`);
  }, []);

  return (
    <>
      <Header />
      <div className="app-wrapper">
        <StudentNav roomId={user.RoomId} />
        <div className="app-wrapper__router-wrapper">
          <Switch>
            <Route path="/home" component={RecentActivity} />
            <Route path="/assignments/" component={MyAssignments} exact />
            <Route path="/assignments/:id" component={AssignmentDetail} />
            <Route path="/tasks" component={Tasks} exact />
            <Route path="/tasks/:id" component={TaskDetail} />
            <Route path="/rooms/:id" component={RoomDetail} />
            <Route path="/students" component={Students} exact />
            <Route path="/students/:id" component={StudentDetail} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </>
  );
};

function mapStateToProps({ user }: { user: StudentUser }) {
  return { user };
}

export default connect(mapStateToProps, { setActiveCourse })(StudentApp);
