import React from 'react'

const Box = (props) => {
  return (
    <div>
        <div className="box">
            <h1>{props.title}</h1>
            <img className="item-img" src={props.item && props.item.img}/>
            <h2>WIN</h2>
        </div>
        
    </div>
    
  );
};

export default Box;