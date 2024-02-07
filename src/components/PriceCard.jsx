/* eslint-disable react/prop-types */
import Tick from "./icons/Tick";
import Xmark from "./icons/Xmark";
const PriceCard = ({ Plan, La, Flu, price }) => {
  return (
    <div className="bg-gray-300 bg-opacity-10 p-5 rounded-sm">
      <div className="flex mb-2">
        <p className="md:text-2xl text-xl text-white font-bold">
          ${price}
          <span className="text-gray-500 md:text-xl text-lg">/mo</span>
        </p>
        <p className="ml-auto font-semibold text-white md:text-xl">{Plan}</p>
      </div>
      <p className="text-gray-400 md:text-base text-sm leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, labore!
      </p>
      <button className="text-center bg-blue-600 text-white font-semibold rounded-md px-2 py-3 md:text-base text-sm w-full my-5 cursor-pointer hover:bg-blue-700">
        Start Free Trial
      </button>
      <hr />
      <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-10 gap-x-2 gap-y-3 text-gray-400 md:text-base font-medium text-sm my-5 xl:leading-5 leading-4">
        <div className="col-span-1">
          <Tick></Tick>
        </div>
        <p className="lg:col-span-11 col-span-9 md:col-span-7 xl:py-0.5">
          All UI Components
        </p>
        <div className="col-span-1">
          <Tick></Tick>
        </div>
        <p className="lg:col-span-11 col-span-9 md:col-span-7 xl:py-0.5">
          Use with Unlimited Projects
        </p>
        <div className="col-span-1">
          <Tick></Tick>
        </div>
        <p className="lg:col-span-11 col-span-9 md:col-span-7 xl:py-0.5">
          Commerical Use
        </p>
        <div className="col-span-1">
          <Tick></Tick>
        </div>
        <p className="lg:col-span-11 col-span-9 md:col-span-7 xl:py-0.5">Email</p>
        <div className="col-span-1">{La ? <Tick></Tick> : <Xmark></Xmark>}</div>
        <p className="lg:col-span-11 col-span-9 md:col-span-7 xl:py-0.5">
          LifeTime Access
        </p>
        <div className="col-span-1">
          {Flu ? <Tick></Tick> : <Xmark></Xmark>}
        </div>
        <p className="lg:col-span-11 col-span-9 md:col-span-7 xl:py-0.5">
          Free Lifetime Updates
        </p>
      </div>
    </div>
  );
};
export default PriceCard;
