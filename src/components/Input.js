import React, { useState } from "react";

export const Input = ({ tab, setTab, setMin, setMax }) => {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal === "") {
      return document.querySelector("input").focus();
    }
    if (tab === "zaměstnavatel") {
      setMax(inputVal);
      setInputVal("");
      setTab("zaměstnanec");
    } else {
      setMin(inputVal);
      setInputVal("");
      setTab("zaměstnavatel");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="nabídka">
        {tab === "zaměstnavatel" ? "Maximální nabídka:" : "Minimální mzda:"}
      </label>
      <input
        type="number"
        name="nabídka"
        min="1"
        placeholder="300 Kč"
        value={inputVal.toString()}
        onChange={(e) => setInputVal(Number(e.target.value))}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
