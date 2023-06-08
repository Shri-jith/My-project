import React from 'react';
import {Link} from "react-router-dom";
import './final.css';
function Delivery(){

  return (
    <div>
  <h1 className="head">Online Delivery</h1>
  <form>
    <h2 className="head">Delivery Details</h2>
    <label htmlFor="name" className="text">Name:</label>
    <input type="text" className="box" id="name" name="name" required /><br /><br /><br /><br />
    <label htmlFor="address" className="text">Address:</label>
    <input type="text" className="box" id="address" name="address" required /><br /><br /><br /><br />
    <label htmlFor="phone" className="text">Phone:</label>
    <input type="tel" className="box" id="phone" name="phone" required /><br /><br /><br /><br />
    <label htmlFor="phone" className="text">PAYMENT TYPE:</label>
    <button className="btn" onclick="window.location.href = 'thanks.html';">Cash on Delivery</button>
    <button className="btn" onclick="window.location.href = 'payment.html';">Credit / Debit Card</button>
  </form>
</div>

);
}
export default Delivery;
