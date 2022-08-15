import React from "react";

export const Input = ({ tab }) => {
  return (
    <>
      {tab === "zaměstnavatel" && <h1>{tab}</h1>}
      {tab === "zaměstnanec" && <h1>{tab}</h1>}
    </>
  );
};
