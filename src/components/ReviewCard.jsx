/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
const ReviewCard = ({name,pimg,des})=>{
    return (
        <div className="bg-gray-300 bg-opacity-10 px-8 py-8 rounded-md">
        <div className="flex gap-2"><FaStar color="orange"></FaStar><FaStar color="orange"></FaStar><FaStar color="orange"></FaStar><FaStar color="orange"></FaStar><FaStar color="orange"></FaStar></div>
        <p className="text-white md:text-base text-sm mt-5 mb-8 pb-8 leading-normal pr-8 border-b-gray-500 border-b-2 border-opacity-20">{"'"}Our Members are so impressed. It{"'"}s intutive. It{"'"}s clean. It{"'"}s Distraction free. If you are building a community.{"'"}</p>
        
        <div className="flex gap-4 mt-8">
        <img src={pimg} alt="" className="h-10 w-10 rounded-full" />
                    <div className="leading-5">
                    <p className="text-white md:text-base text-sm font-bold">{name}</p>
                    <p className="text-gray-400 md:text-xs text-[10px]">{des}</p>
                    </div>
        </div>
        </div>
    )
}
export default ReviewCard;