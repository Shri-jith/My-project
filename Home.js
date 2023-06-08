import React from "react"; 
import {Link} from "react-router-dom";
import './home.css';
function Home(){ 
  return (
    <div class='Home'>
    <div className="container">
      <h1>TOMMY GAME CITY</h1><hr /><br />
      <h3 className="text">
        <ul className="text">
          <li>Welcome to our online gaming company, where we're dedicated to providing immersive and captivating gaming experiences that bring people together. Our team of talented developers, designers, and storytellers work tirelessly to create visually stunning virtual worlds that are filled with endless possibilities.</li><br /><br />
          <li>We offer a diverse portfolio of games, catering to both casual gamers and hardcore enthusiasts. Whether you're seeking action-packed shooters, epic role-playing adventures, mind-bending puzzles, or strategic simulations, we have something for everyone. Our goal is to ensure that every player can find their perfect gaming experience within our selection of games.</li><br /><br />
          <li>Furthermore, we embrace technological advancements to deliver cutting-edge experiences. We stay at the forefront of innovation, incorporating virtual reality, augmented reality, mobile gaming, and cross-platform compatibility into our games. We want our players to enjoy our games on the devices and platforms of their choice.</li><br /><br />
          <li>Join us on this incredible journey as we continue to redefine the boundaries of gaming. Immerse yourself in breathtaking worlds, unleash your inner hero, and create unforgettable memories with players from around the world. Welcome to our online gaming company, where dreams become reality and adventure awaits at every turn. Get ready to level up and experience gaming like never before!</li><br />
        </ul>
      </h3>
      <button className="GFG" onclick="window.location.href = 'SecondPage.js';">
        <Link to="second">
        Become a MEMBER </Link>
        </button><br></br>
      <button className="GFG" onclick="window.location.href = 'SecondPage.js';">
        <Link to="second">
        Plans </Link>
        </button><br></br>
      <button className="GFG" onclick="window.location.href = 'ThirdPage.js';">
        <Link to="Threee">
        Buy CD </Link>
        </button><br></br>
      <button className="GFG" onclick="window.location.href = 'SecondPage.js';">
        <Link to="four">
        ACCESSORIES </Link>
        </button><br></br>
      <button className="GFG" onclick="window.location.href = 'SecondPage.js';">
        <Link to="Five">
        LOGIN </Link>
        </button><br></br>
      <button className="GFG" onclick="window.location.href = 'Signup.js';">
        <Link to="/Six">
        signup </Link>
        </button><br></br>
    </div>
    <div>
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgX9TNTvM3C5w42-2ZD3fcuWtXCl2rKZhw8_G4cNLqUOrYCv06T8XjpOcq8Vl1wS1Km4RNWhULjEKanch0A5-HLry7mnyx87hTTR9-JjJpZhy3F_04PfNdOkEuANMe4B8STVLiVoZyvxfvqmchL6vFmJ9xYrKebaO896KF5S_PQe7LJ4jBTm8VekT--Bw/s320/tomm.png" className="tom" />
    </div>
  </div>
  
  );
}
export default Home;
