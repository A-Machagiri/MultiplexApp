import "../bookticket.css";
import React from "react";
import { useState, useRef } from "react";
import Image1 from "../images/movies_screen/screen.png";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Bookticket(props) {
  const navigate = useNavigate();

  const ref = useRef(null);
  const [show,setShow] = useState(false);
  console.log(ref);
  const [count, setCount] = useState(0);
  const [Price, setPrice] = useState(0);
  const handleBooking = () =>{
    setShow(true);
  }
  const handleClose =() =>{
    setShow(false);
    navigate('/');
  
  }
  function changecolor(e) {
    if (e.target.className !== "row") {
      if (e.target.style.background !== "green") {
        e.target.style.background = "green";
        setCount(count + 1);
        setPrice(Price + 150);
      } else {
        //e.target.style.background = " #01163E";
        e.target.style.background = "red";

        setCount(count - 1);
        setPrice(Price - 150);
      }
    }
  }
  let tl = gsap.timeline({ ease: "power1.in" });
  let clicked = false;

  function buttonanimation(e2) {
    if (clicked === false && count !== 0) {
      clicked = true;
      e2.target.innerText = "";
      tl.to("#button", { width: "50px", duration: 0.5 });
      tl.to(ref, { y: "0%", duration: 0.5 });
      console.log(e2);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    let data = {
      MovieName: props.name === undefined ? props.match.params.title : props.name ,
      Price: Price,
      "count ": count,
    };
    let fetchoption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(`https://book-my-show-back-end.onrender.com/booking${props.name === undefined ? props.match.params.tilte : props.name}`, fetchoption);
  }

  return (
    <body1>
      <ul className="showcase">
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>

      <div className="container">
        <div className="movie-screen">
          <img src={Image1} alt="screen" />
        </div>

        <div className="row-container">
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat"></div>
          </div>
          <h5 className="subtitle"> ₹150</h5>

          <div className="text-wrapper">
            <p className="text">
              Selected Seats <span id="count">{count}</span>
            </p>
            <p className="text">
              Total Price ₹<span id="total">{Price}</span>
            </p>
            <div>
              <input type = 'submit' value={'Confirm Booking'} onClick={handleBooking} />
              </div>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ticket Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>You Movie ticket has been confirmed</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
            
              
          </div>
        </div>
      </div> 
      <h1>E-Ticket</h1>
     
      
    </body1>
  );
}

