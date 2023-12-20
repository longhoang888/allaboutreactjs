import React from "react";
import '../index.css';

/*
stateless component
*/

function Promo(props) {
    const styles = {
        color: "tomato", fontSize: "40px", fontWeight: "bold" 
    }

  return (
    <div className="promo-section">
      <div>
        <h1>{props.heading}</h1>
      </div>
      <div>
        <h2>{props.promoSubHeading}</h2>
      </div>
      <div>
        <h3 style={styles}>
          {props.css101}
        </h3>
      </div>
    </div>
  );
}

export default Promo;
