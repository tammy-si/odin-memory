import React from 'react';
import '../style.css'

function Card(props) {
    console.log(props.shuffle)
  // Declare a new state variable, which we'll call "count"
  return (
    <div className='card' onClick={props.shuffle}>
      <img src={props.img_url} alt={props.name} className='cardImage'></img>
      <p>{props.name}</p>
    </div>
  );
}

export default Card