import React from "react";
import Image from "next/image";

const HovedSide = () => {
  return (
    <div className="text-centerq items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 pt-20">
      <div className="flex flex-col items-center pl-52 space-x-2 pt-8 pb-8">
        <Image
          src={"/Hulk.jpg"}
          alt="hau"
          width={200}
          height={200}
          className="rounded-2xl"
        />
      </div>
      <div className=" pt-8 pb-8 xl:col-span-2">
        <h1 className="text-3xl text-left">Hei, velkommen til Hau Duc Vu</h1>
        <div className="mt-2 text-left pl-4 xl:col-span-2"></div>
        <p>
          <br />
          Jeg er IT student ved Høyskolen Kristiania, jeg blir ferdig med IT
          utdanningen min sommer 2024.
          <br /> Visste du at jeg er tidligere er utdannet optiker med rett til
          rekvivering av diagnostikse medikamenter.
          <br />
        </p>
        <p>
          <br />
          Jeg har jobbet som optiker i ca. 8 år, men i 2021 fant jeg ut at jeg
          ville prøve ut noe nytt og utfordre meg selv,
          <br /> derfor søkte jeg på studie på Høyeskolen Kristiana. Jeg har
          siden studie start jobbet som optiker ved sidna. <br />
          Januar 2024 startet jeg som utvikler hos ECO STOR med mine med
          studenter.
          <br /> Vi skal her hjelpe ECO STOR med å lage en brukergrensesnitt for
          sine kunder. Her skal vi være ut bachelortiden og ut sommer 2024.{" "}
          <br />
          <br />
        </p>
        <p className="font-bold">
          Jeg søker etter utvikler jobb og er klar fra august 2024. <br />
          Håper vi snakkes.
        </p>
      </div>
    </div>
  );
};

export default HovedSide;
