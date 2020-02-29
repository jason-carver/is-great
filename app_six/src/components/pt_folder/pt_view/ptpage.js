import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col, Control, Table } from "react-bootstrap";
import "./ptpage.css";
import { render } from "@testing-library/react";


function Ptpage(props){
  return (
    <div>      
      <button>
        <Link to="./rewards/index" className="btn btn-link">
         Spend Your Reward Points
        </Link>
      </button>
​
      <button>
        <Link to="../" className="btn btn-link">
          LogOut
        </Link>
      </button> 
      <p>welocome to your page {props.location.state.username}</p>

       {/* sent a GET request */}

axios.get('http://localhost:5000/Patient/:username,patient)
  .then(res => {
    console.log('this is the patient data ' patient)
  });


    
    </div>
  );
}
export default Ptpage;
