import React, { useState } from "react";
import "./App.css";
import { Tabs } from "./components/Tabs";

const App = () => {
  const [tab, setTab] = useState("zaměstnavatel");

  return (
    <>
      <Tabs tab={tab} setTab={setTab} />
    </>
  );
};

export default App;
