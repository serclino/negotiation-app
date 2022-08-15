import React from "react";

export const Tabs = ({ tab, setTab }) => {
  return (
    <section className="tabs">
      <div>
        <button
          onClick={() => setTab("zaměstnavatel")}
          style={{ borderTopLeftRadius: "10px" }}
          className={tab === "zaměstnavatel" ? "active" : null}
        >
          Zaměstnavatel
        </button>
      </div>
      <div>
        <button
          onClick={() => setTab("zaměstnanec")}
          style={{ borderTopRightRadius: "10px" }}
          className={tab === "zaměstnanec" && "active"}
        >
          Zaměstnanec
        </button>
      </div>
    </section>
  );
};
