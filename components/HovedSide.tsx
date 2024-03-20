import React from "react";
import Image from "next/image";

const HovedSide = () => {
  return (
    <div className="text-center items-start space-y-2 md:flex md:flex-col md:items-center lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 pt-20">
      <div className="flex flex-col items-center pl-52 space-x-2 pt-4 pb-10">
        <div className="w-48 h-48">
          <Image
            src={"/Hulk.jpg"}
            alt="hau"
            width={200}
            height={200}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className=" pt-8 pb-8 xl:col-span-2 text-left">
        <h1 className="text-3xl">Hei, Velkommen </h1>
        <h3 className="text-xl">
          <br />
          Mitt navn er Hau Duc Vu
        </h3>
        <div className="">
          <p>
            IT student ved Høyskolen Kristiania, og blir uteksaminert våren
            2024. Jeg er 29 år fra Kristiansand og er bosatt i Oslo.
          </p>
          <p>
            Visste du at jeg er tidligere er utdannet optiker med rett til
            rekvivering av diagnostikse medikamenter?
            <br /> Jeg har jobbet som optiker i åtte år, men i 2021 fant jeg ut
            at jeg ville prøve ut noe nytt og utfordre meg selv,
            <br /> ved å studere IT på Høyskolen Kristiana. Jeg har kombinert
            optiker jobb med IT studier de siste tre årene.
            <br />
            I januar 2024 startet jeg som utvikler hos ECO STOR med mine
            medstudenter.
            <br /> Vi skal her hjelpe ECO STOR med å lage et brukergrensesnitt
            for sine kunder, som en del av vårt bachelorprosjekt.
            <br />
            <br />
          </p>
        </div>
        <p className="font-bold">
          Jeg søker etter utvikler jobb og er klar fra august 2024. <br />
          Håper vi snakkes.
        </p>
      </div>
    </div>
  );
};

export default HovedSide;
