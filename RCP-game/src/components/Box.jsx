import React from 'react'

const Box = (props) => {
  return (
    <div>
        <div className={`box ${props.result}`}>
          <h1>{props.title}</h1>
          <img className="item-img" src={props.item && props.item.img} />
          <h2>{props.result}</h2>
        </div>
        
    </div>
    
  );
};

export default Box;