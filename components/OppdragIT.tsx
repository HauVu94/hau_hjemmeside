import React from "react";
import Image from "next/image";

const OppdragIT = () => {
  return (
    <>
      <div className="py-6 pb-10 pt-10">
        <h2 className="text-center text-4xl pb-2">
          Firma/Organisasjoner jeg har jobbet med som utvikler
        </h2>
      </div>
      <div className="grid pl-20 items-center justify-center gap-10 text-center md:grid-cols-2 lg:grid-cols-3 pb-10">
        <div>
          <Image
            src="/eco.svg"
            alt="EcoStor"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/HK.png"
            alt="Høyskolen Kristiania"
            height={100}
            width={200}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default OppdragIT;
