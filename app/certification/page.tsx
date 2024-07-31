import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center overflow-y-auto p-2 w-full h-full flex-col">
        <div className="w-full max-w-lg h-auto text-center ">
          <div className="rounded-lg p-4">
            <h1 className="text-4xl font-semibold ">
              Velkommen til mine sertifiseringer
            </h1>
            <p className="mt-4">
              Jeg har ikke tatt noen sertifisering per dags dato
            </p>
          </div>
        </div>
      </div>

      <div className="grid pl-20 items-center justify-center gap-10 text-center md:grid-cols-2 lg:grid-cols-3 pb-10">
        {/* <div className="flex-1 w-80 h-64 mt-8 p-4 flex flex-col items-center justify-center border-2  border-yellow-400 ">
          Første sertifisering
          <Image
            className="mt-4"
            src="/hulk.jpg"
            alt="eco_logo"
            width={100}
            height={100}
          />
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default page;
