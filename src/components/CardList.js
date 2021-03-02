import React from "react";
import "../App.css";

const CardList = (props) => {
    return (
      <div className="cardsGrid">
        {props.tasks.map(data => {
          return (
              <div>
                <img src={data.link}></img>
                <p className="cardTitle">{data.name}</p>
              </div>
          );
        })}
      </div>
    );
  };





  export default CardList