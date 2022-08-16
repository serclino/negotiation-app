import React, { useState } from "react";
import "./App.css";
import { Tabs } from "./components/Tabs";
import { Input } from "./components/Input";
import { PopUp } from "./components/PopUp";

const App = () => {
  const [tab, setTab] = useState("zaměstnavatel");
  const [max, setMax] = useState(null);
  const [min, setMin] = useState(null);

  return (
    <>
      <Tabs tab={tab} setTab={setTab} max={max} min={min} />
      <Input
        tab={tab}
        setTab={setTab}
        min={min}
        setMin={setMin}
        max={max}
        setMax={setMax}
      />
      {min && max && (
        <PopUp
          min={min}
          setMin={setMin}
          max={max}
          setMax={setMax}
          setTab={setTab}
        />
      )}
    </>
  );
};

export default App;
