import React from 'react';
const BikeBox = ({ name, desc, img }) => (
  <div class="box">
    <div class="imgContainer">
      <img src={img}></img>
    </div>
    <h2>{name}</h2>
    <p>{desc}</p>
  </div>
);

export default BikeBox;
