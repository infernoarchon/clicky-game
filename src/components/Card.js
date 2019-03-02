import React from "react";




function Card(props) {
  
    var imgStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundColor: `${props.color}`
      };
  return (

    <div className="card" onClick={props.onClick}>
        <div 
          className="card-img" 
          data-id={props.id}
          alt="cardimg"
          style={imgStyle}
        />
      </div>
  );
}


export default Card;
