import React from 'react'
import {Link} from "react-router-dom";
import './final.css';
function Finals(){
  return ( 
    <div>
  <link rel="stylesheet" href="final.css" />
  <title>
    Delivery Time!
  </title>
  <div class='final'>
    <h1 classname="head">Online Delivery</h1>
    <form>
      <h2 classname="head">Delivery Details</h2>
      <label htmlfor="name" classname="text">Name:</label>
      <input type="text" classname="box" id="name" name="name" required /><br /><br /><br /><br />
      <label htmlfor="address" classname="text">Address:</label>
      <input type="text" classname="box" id="address" name="address" required /><br /><br /><br /><br />
      <label htmlfor="phone" classname="text">Phone:</label>
      <input type="tel" classname="box" id="phone" name="phone" required /><br /><br /><br /><br />
      <label htmlfor="phone" classname="text">PAYMENT TYPE:</label>
      <button classname="button3" onclick="window.location.href = 'Thanks.js';">
      <Link to="/COD">
        COD </Link></button>
      <button classname="button3" onclick="window.location.href = 'Payment.js';">Credit / Debit Card</button>
    </form>
  </div>
</div>
  )
}
export default Finals ;