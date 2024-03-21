"use client";
import React, { useState } from "react";
import OppdragIT from "./OppdragIT";
import OppdragOptiker from "./OppdragOptiker";
import { NAV_LINKS } from "../constants";

const Oppdrag = () => {
  const [selectedOppdrag, setSelectedOppdrag] = useState("IT");

  const handleOppdragSelect = (key: string) => {
    setSelectedOppdrag(key);
  };

  return (
    <div className="max-container padding-container relative">
      <nav className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-center font-bold">
        <p className="font-normal">Oppdragsgiver: </p>
        <div className="flex flex-col lg:flex-row gap-6 underline">
          {NAV_LINKS.map(({ key, label }) => (
            <button key={key} onClick={() => handleOppdragSelect(key)}>
              {label}
            </button>
          ))}
        </div>
      </nav>
      <div>
        {selectedOppdrag === "IT" && <OppdragIT />}
        {selectedOppdrag === "Optiker" && <OppdragOptiker />}
      </div>
    </div>
  );
};

export default Oppdrag;
