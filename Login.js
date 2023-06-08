import React from 'react'
import {Link} from "react-router-dom";
import './Login.css';
function Login(){
  return (
    <div>
  <h2>Login</h2>
  <form action="/action_page.php" method="post">
    <div className="imgcontainer">
      <img src="https://icons-for-free.com/iconfiles/png/512/login+person+profile+user+users+icon-1320166527284195604.png" alt="Avatar" className="avatar" />
    </div>
    <div className="container">
      <label htmlFor="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
      </label>
    </div>
    <div className="container" style={{backgroundColor: '#f1f1f1'}}>
      <button type="button" className="cancelbtn">Cancel</button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>

  );
}
export default Login;
