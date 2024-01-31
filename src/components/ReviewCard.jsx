/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
const ReviewCard = ({name,pimg,des})=>{
    return (
        <div className="bg-gray-300 bg-opacity-10 p-5 rounded-md">
        <div className="flex"><FaStar color="orange"></FaStar><FaStar color="orange"></FaStar><FaStar color="orange"></FaStar><FaStar color="orange"></FaStar><FaStar color="orange"></FaStar></div>
        <p className="text-white text-xs my-5 leading-5 pr-8">"Our Members are so impressed. It's intutive. It's clean. It's Distraction free. If you are building a community. Surely worth every penny."</p>
        <hr className="text-gray-400"></hr>
        <div className="flex gap-4 mt-5">
        <img src={pimg} alt="" className="h-10 w-10 rounded-full" />
                    <div className="leading-5">
                    <p className="text-white text-sm font-bold">{name}</p>
                    <p className="text-gray-400 text-[10px]">{des}</p>
                    </div>
        </div>
        </div>
    )
}
export default ReviewCard;