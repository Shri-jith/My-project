import React from 'react'
import {Link} from "react-router-dom";
import './g1.css';
function SecondPage() {
  return (
    <div class='two'>
  <div className="login">
    <a className="btn btn-danger" href="HTML\Login.html" role="button">LOGIN</a></div>
  <div className="sign"><a className="btn btn-danger" href="HTML\signup.html" role="button">SIGN UP</a>
  </div>
  <div className="tank">
    <h3>Normal Gamer</h3><hr />
    <ul>
      <li>No discounts</li>
      <li>NO early access</li>
      <li>NO Random choosing of Visiting Main branch yearly once</li>
      <li>NO Coupen Card for Every puschase</li>
    </ul>
  </div>
  <div className="tank1">
    <h3>PRINCE Gamer</h3><hr />
    <ul>
      <li>Discounts</li>
      <li>Early access</li>
      <li>Random choosing of Visiting Main branch yearly once</li>
      <li>Coupen Card for Every puschase</li>
      <li style={{listStyle:'none'}}><Link to="Final">$499 Yearly</Link></li>
    </ul>
    <a className="btn btn-dark" href="mem.html" role="button">$499(Yearly)</a></div>
  <div className="Terms">
    <ul>
      Terms and Conditions:
      <li>This card is non-transferable.
      </li><li>The cardholder must present this card upon entry to the gaming club.</li>
      <li>The cardholder agrees to abide by all gaming club rules and regulations.</li>
      <li>The gaming club reserves the right to revoke membership privileges for any reason.</li>
      <li>Lost or stolen cards must be reported immediately to the gaming club.</li>
    </ul>
  </div>
  <div className="waytothird">
    <a className="btn btn-dark" href="Third.html" role="button">CD STORE</a></div>
  <div>
    <div className="waytofourth">
      <a className="btn btn-dark" href="fourth.html" role="button">ACCESSORIES STORE</a></div>
    <div>
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgX9TNTvM3C5w42-2ZD3fcuWtXCl2rKZhw8_G4cNLqUOrYCv06T8XjpOcq8Vl1wS1Km4RNWhULjEKanch0A5-HLry7mnyx87hTTR9-JjJpZhy3F_04PfNdOkEuANMe4B8STVLiVoZyvxfvqmchL6vFmJ9xYrKebaO896KF5S_PQe7LJ4jBTm8VekT--Bw/s320/tomm.png" className="tom" />
    </div>
  </div></div>

  );}
  function Final(){
    return (
      <div>
      <h1 className="head">Thanks for Becoming a Proud MEMBER</h1>
      <title>HELLO PRINCE</title>
    </div>
    
    );
}

export default SecondPage;