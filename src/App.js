import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
  Link
} from "react-router-dom";
import ClassSchedule from './Components/ClassSchedule';
import CourseList from './Components/CourseList';
import Course from './Components/Course';
import Assessment from './Components/Assessments';
import UserAuth from './Components/UserAuth';

export const UserDetailsContext = React.createContext(null);

function App() {
  const [userName, setUserName] = React.useState("");
  const [edxToken, setEdxToken] = React.useState('');
  const [msAuthToken, setMsAuthToken] = React.useState('');
  const UserNameContext = { userName, setUserName };
  const EdxTokenContext = { edxToken, setEdxToken };
  const MsAuthTokenContext = { msAuthToken, setMsAuthToken };

  return (
    <Router>
      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <UserDetailsContext.Provider value={{ UserNameContext, EdxTokenContext, MsAuthTokenContext }}>
        {/* <Switch>
          <Route exact path="/login">
            <UserAuth />
          </Route>
          <Route exact path="/baseform">
            <ClassSchedule />
          </Route>
          <Route path="/CourseList">
            <CourseList />
          </Route>
          <Route path="/Course"
            render={(props) => <Course {...props} />}
          >
          </Route>
          <Route path="/assessment">
            <Assessment />
          </Route>
          <Route exact path="/">
            <Redirect to="/baseform" />
          </Route>

        </Switch> */}
        <HashRouter basename="/">
          {/* <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr /> */}

          <Route exact path="/login">
            <UserAuth />
          </Route>
          <Route exact path="/baseform">
            <ClassSchedule />
          </Route>
          <Route path="/CourseList">
            <CourseList />
          </Route>
          <Route path="/Course"
            render={(props) => <Course {...props} />}
          >
          </Route>
          <Route path="/assessment">
            <Assessment />
          </Route>
          <Route exact path="/">
            <Redirect to="/baseform" />
          </Route>
          {/* </div> */}
        </HashRouter>
      </UserDetailsContext.Provider>
    </Router>
  )
}

export default App;
