import React from "react";

export const Tabs = ({ tab, setTab, max, min }) => {
  return (
    <section className="tabs">
        <div>
          <button
            onClick={() => setTab("zaměstnavatel")}
            style={{ borderTopLeftRadius: "10px" }}
            className={tab === "zaměstnavatel" ? "active" : ""}
            disabled={max}
          >
            Zaměstnavatel
          </button>
        </div>
        <div>
          <button
            onClick={() => setTab("zaměstnanec")}
            style={{ borderTopRightRadius: "10px" }}
            className={tab === "zaměstnanec" ? "active" : ""}
            disabled={min}
          >
            Zaměstnanec
          </button>
        </div>
    </section>
  );
};
