import React from "react";



function Card(props) {
    var imgStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundColor: `${props.color}`
      };
  return (
    <div className="card">
        <div className="card-img"
          alt="cardimg"
          style={imgStyle}
        />
      </div>
  );
}


export default Card;
