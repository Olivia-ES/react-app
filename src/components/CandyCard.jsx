import React from "react";
import './CandyCard.css';
import "./CandyList";

const CandyCard = ({ candy }) => {
  return (
  <div className="candy-card">
    <img src={candy.image} />
    <div className="candy-details">
    <h3>{candy.name}</h3>
    <p>{candy.descrip.slice(0, 100)+"..."}</p></div>
    
  </div>
  );
};

export default CandyCard;
