import React from 'react'
import {Link} from "react-router-dom";
import './payment.css';
function Payment(){
  return (
   
<div>
  <h1 className="boox">CARD PAYMENT</h1>
  <div className="texxt">
    <form action="/payment" method="post">
      <label htmlFor="name">Name on Card:</label>
      <input type="text" className="box" id="name" name="name" required /><br /><br />
      <label htmlFor="card-number">Card Number:</label>
      <input type="text" className="box" id="card-number" name="card-number" required /><br /><br />
      <label htmlFor="expiry-date">Expiry Date:</label>
      <input type="text" className="box" id="expiry-date" name="expiry-date" required /><br /><br />
      <label htmlFor="cvv">CVV:</label>
      <input type="text" className="box" id="cvv" name="cvv" required /><br /><br />
      <div className="sub"><a className="btn btn-dark" href="thanks.html" role="button">Submit</a></div>
    </form>
  </div>
</div>


  );
}
export default Payment;