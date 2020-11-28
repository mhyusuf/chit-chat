import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom' 
import Header from '../components/Header'
import Nav from '../components/Nav'
import EventDetail from '../pages/EventDetail';
import Profile from '../pages/Profile';
import RecentActivity from '../pages/RecentActivity';
import Resources from '../pages/Resources';
import RoomDetail from '../pages/RoomDetail';
import Rooms from '../pages/Rooms';
import StudentDetail from '../pages/StudentDetail';
import Students from '../pages/Students';
import TaskDetail from '../pages/TaskDetail';
import Tasks from '../pages/Tasks';

const TeacherApp: FunctionComponent<any> = () => {
  return(
    <>
      <Header />
      <div className="app-wrapper">
        <Nav />
        <div className="app-wrapper__router-wrapper">
          <Switch>
            <Route path="/home" component={RecentActivity}/>
            <Route path="/events/:id" component={EventDetail}/>
            <Route path="/tasks" component={Tasks} exact />
            <Route path="/tasks/:id" component={TaskDetail} />
            <Route path="/rooms" component={Rooms} exact />
            <Route path="/rooms/:id" component={RoomDetail} />
            <Route path="/students" component={Students} exact />
            <Route path="/students/:id" component={StudentDetail}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/resources" component={Resources}/>
          </Switch>
        </div>
      </div>
    </>
  )
}

export default TeacherApp;