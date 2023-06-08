import React from 'react'
import {Link} from "react-router-dom";
import './signup.css';
function Signup(){
  return (
    <div class='sign'>
  <link rel="stylesheet" href="signup.css" />
  <form action="action_page.php" method="post">
    <div className="background">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </div>
    </div></form>
</div>

  );
}
export default Signup;