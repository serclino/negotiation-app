import React from "react";

export const PopUp = ({ min, setMin, max, setMax, setTab }) => {
  const getOutcome = (min, max) => {
    if (min < max || min === max) {
      return "Úspěch! 🤝";
    } else {
      return "Nevyšlo to... 😟";
    }
  };

  const reset = () => {
    setMin(null);
    setMax(null);
    setTab("zaměstnavatel");
  };

  return (
    <div className="popup">
      <h1>{getOutcome(min, max)}</h1>
      <p>
        Max. nabídka zaměstnavatele: <br /> <b>{max} Kč</b>
      </p>
      <p>
        Min. očekávaná mzda zaměstnance: <br /> <b>{min} Kč</b>
      </p>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
