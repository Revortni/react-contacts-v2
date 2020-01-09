import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink
} from 'react-router-dom';

import './styles/Main.css';

import { fetchUserData } from './fetchData';
import Profile from './Profile';

export const Main = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetchUserData().then(data => {
      setAllUsers(data);
    });
  }, []);
  return (
    <Router>
      <div>
        <div className='nav_bar_wrapper'>
          <div className='nav_bar container'>
            <ul className='clearfix'>
              <li>
                <NavLink to='/home' activeClassName='nav_selected'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' activeClassName='nav_selected'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/allUsers' activeClassName='nav_selected'>
                  All Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/allUsers'>
            <ProfileList allUsers={allUsers} />
          </Route>
          <Route path={`/user/:userId`}>
            <RenderProfile allUsers={allUsers} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className='container'>
      <div className='pages'>
        <h2>Home</h2>
        <p>You are Home :)</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className='container'>
      <div className='pages'>
        <h2>About</h2>
        <p>Basically just trying out react router</p>
      </div>
    </div>
  );
};

const RenderProfile = ({ allUsers }) => {
  const { userId } = useParams();
  return <Profile userInfo={allUsers[userId - 1]} />;
};

const ProfileList = ({ allUsers }) => {
  return (
    <div className='user_list_wrapper container'>
      <h2>Users</h2>
      <ul className='user_list clearfix'>
        {allUsers.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              <img src={user.profileImage} alt='profileImage' />
              <div>{user.firstName}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
