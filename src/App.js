import React, { useState } from "react";
import "./App.css";
import { Tabs } from "./components/Tabs";
import { Input } from "./components/Input";

const App = () => {
  const [tab, setTab] = useState("zaměstnavatel");

  return (
    <>
      <Tabs tab={tab} setTab={setTab} />
      <Input tab={tab} />
    </>
  );
};

export default App;
