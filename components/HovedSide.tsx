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
        <h4> Hei, jeg er </h4>
        <h1 className="font-bold text-3xl">Hau Duc Vu</h1>
        <div className="">
          <p>
            <br />
            Jeg er 30 år fra Kristiansand og er bosatt i Oslo.Jeg ble
            uteksaminert våren 2024 fra IT studiet ved Høyskolen Kristiania.
          </p>
          <p>
            Visste du at jeg er tidligere er utdannet optiker med rett til
            rekvirering av diagnostiske medikamenter?
            <br /> Jeg har jobbet som optiker i åtte år. I 2021 fant jeg ut at
            jeg ville prøve ut noe nytt og utfordre meg selv,
            <br /> ved å studere IT på Høyskolen Kristiania. Jeg har kombinert
            optiker yrke med IT studier de siste tre årene.
            <br />
            I januar 2024 startet jeg som utvikler hos ECO STOR med mine
            medstudenter. Vi skal her hjelpe ECO STOR <br />
            med å lage et brukergrensesnitt for sine kunder, som en del av vårt
            bachelorprosjekt.
            <br />
            Jeg har nylig fullført mitt internship hos ECO STOR som
            juniorutvikler. For tiden jobber jeg som konsulentoptiker hos
            Optoteam, samtidig som jeg aktivt søker nye muligheter innen
            utvikling.
            <br />
          </p>
        </div>
        <p className="font-bold mt-4">
          Jeg søker etter utvikler jobb og er klar fra august 2024. <br />
          Håper vi snakkes.
        </p>
      </div>
    </div>
  );
};

export default HovedSide;
