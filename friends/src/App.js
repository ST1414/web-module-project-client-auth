import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login'


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
        
        {/* add, edit, or remove friends  */}

        <Route path='/login' component={Login}/>
      </div>
    </Router>
  );
}

export default App;
