import React from "react";
import "../App.css";
import {nanoid} from 'nanoid'

const CardList = (props) => {
    return (
      <div className={props.display}>
        {props.tasks.map(data => {
          return (
              <div key={data.name + nanoid()}>
                <img src={data.link}></img>
                <p className={props.titleClass} >{data.name}</p>
              </div>
          );
        })}
      </div>
    );
  };





  export default CardList