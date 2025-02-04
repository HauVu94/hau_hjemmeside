import React from "react";
import Image from "next/image";

const OppdragOptiker = () => {
  return (
    <>
      <div className="py-6 pb-10 pt-10">
        <h2 className="text-center text-3xl pb-2 font-bold">
          Firma jeg har jobbet hos som optiker
        </h2>
      </div>
      <div className="grid pl-20 items-center justify-center gap-10 text-center md:grid-cols-2 lg:grid-cols-3 pb-10">
        <div>
          <Image
            src="/brilleland.png"
            alt="Brilleland"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/Interoptik.png"
            alt="Interoptik"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/Coptikk.png"
            alt="C optik"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>

        <div>
          <Image
            src="/Specsavers.png"
            alt="Specsavers"
            height={100}
            width={250}
            className="object-contain"
          />
        </div>

        <div>
          <Image
            src="/synsam.png"
            alt="Synsam"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/OptoTeam.png"
            alt="Optoteam"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/partner.png"
            alt="Optikk Partner"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/synoptik.png"
            alt="synoptik"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/alliance.png"
            alt="alliance"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default OppdragOptiker;
