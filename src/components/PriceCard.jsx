/* eslint-disable react/prop-types */
import Tick from "./icons/Tick";
import Xmark from "./icons/Xmark";
const PriceCard = ({ Plan, La, Flu, price}) => {
  return (
    <div className="bg-gray-300 bg-opacity-10 p-5 rounded-sm">
      <div className="flex">
        <p className="text-xl text-white font-bold">
          ${price}<span className="text-gray-500">/mo</span>
        </p>
        <p className="ml-auto font-semibold text-white">{Plan}</p>
      </div>
      <p className="text-gray-500 text-xs leading-5">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, labore
        laudantium!{" "}
      </p>
      <button className="text-center bg-blue-600 text-white font-semibold rounded-md px-2 py-2.5 text-xs w-full my-5">
        Start Free Trial
      </button>
      <hr />
      <div className="grid md:grid-cols-12 grid-cols-10 gap-2 text-gray-400 xl:text-sm my-5 xl:leading-5 text-xs leading-4">
        <div className="col-span-1"><Tick></Tick></div>
        <p className="md:col-span-11 col-span-9">All UI Components</p>
        <div className="col-span-1"><Tick></Tick></div>
        <p className="md:col-span-11 col-span-9">Use with Unlimited Projects</p>
        <div className="col-span-1"><Tick></Tick></div>
        <p className="md:col-span-11 col-span-9">Commerical Use</p>
        <div className="col-span-1"><Tick></Tick></div>
        <p className="md:col-span-11 col-span-9">Email</p>
        <div className="col-span-1">{La ? <Tick></Tick> : <Xmark></Xmark>}</div>
        <p className="md:col-span-11 col-span-9">LifeTime Access</p>
        <div className="col-span-1">{Flu ? <Tick></Tick> : <Xmark></Xmark>}</div>
        <p className="md:col-span-11 col-span-9">Free Lifetime Updates</p>
      </div>
    </div>
  );
};
export default PriceCard;
