import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


// const Login = ()=> {
//   return (<h2>Login</h2>)
// }

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Link to="/login">Log In</Link><br/>
        <Link to="/logout">Log Out</Link>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/friendslist' component={FriendsList}/>
      </div>
    </Router>
  );
}

export default App;
