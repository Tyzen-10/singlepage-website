import Clients from "./clients";
import Play from "./icons/Play";
import Tick from "./icons/Tick";

const Middle = () => {
  return (
    <>
      <div className="text-white py-32 lg:px-80 px-14">
        <p className=" text-center text-[2rem] md:text-[2.75rem] font-bold mb-5 leading-tight">
          We are here to help.
        </p>
        <p className=" text-center text-gray-400 md:text-lg text-base mb-28">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat
          dignissimos temporibus illum. Facere optio eaque magnam, odio quidem
          autem!
        </p>
        <div className="overflow-hidden relative z-1">
          <img
            src="src/help2.jpeg"
            alt="help"
            className="lg:h-96 mx-auto rounded-sm"
          />
          <Play></Play>
        </div>
      </div>
      <Clients></Clients>
      <div className="grid lg:grid-cols-2 gap-20 grid-cols-1 py-36">
        <div className="text-white">
          <p className="text-[2rem] md:text-[2.75rem] font-bold leading-tight px-12">
            Crafted for Startups, Saas and Business Sites.
          </p>
          <p className="text-base md:text-lg text-gray-400 px-12 my-5 leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            totam, cupiditate est exercitationem maxime explicabo minima quia,
            corporis quae quod ab ea earum eius nesciunt culpa quis, sed
            voluptas asperiores.
          </p>
          <div className="grid grid-cols-2 px-12">
            <div className="grid md:grid-cols-12 grid-cols-8 lg:grid-cols-9 gap-x-2 gap-y-6 text-gray-400 md:text-base font-medium text-sm my-5 leading-normal">
              <div className="col-span-1">
                <Tick></Tick>
              </div>
              <p className="md:col-span-11 col-span-7 lg:col-span-8">Premium Quality</p>
              <div className="col-span-1">
                <Tick></Tick>
              </div>
              <p className="md:col-span-11 col-span-7 lg:col-span-8">Tailwind CSS</p>
              <div className="col-span-1">
                <Tick></Tick>
              </div>
              <p className="md:col-span-11 col-span-7 lg:col-span-8">Use For Lifetime</p>
            </div>
            <div className="grid md:grid-cols-12 grid-cols-8 lg:grid-cols-9 gap-x-2 gap-y-6 text-gray-400 md:text-base font-medium my-5 text-sm leading-normal">
              <div className="col-span-1">
                <Tick></Tick>
              </div>
              <p className="md:col-span-11 col-span-7 lg:col-span-8">Next.js</p>
              <div className="col-span-1">
                <Tick></Tick>
              </div>
              <p className="md:col-span-11 col-span-7 lg:col-span-8">Rich Documentation</p>
              <div className="col-span-1">
                <Tick></Tick>
              </div>
              <p className="md:col-span-11 col-span-7 lg:col-span-8">Developer Friendly</p>
            </div>
          </div>
        </div>
        <div className="mx-12 min-h-[450px]">
          <img src="src/about-image.svg" alt="boxes" />
        </div>
      </div>
    </>
  );
};
export default Middle;
