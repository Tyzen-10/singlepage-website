/* eslint-disable react/prop-types */
import { FaLayerGroup } from "react-icons/fa";
const MainCard = ({heading,content}) => {
    return(
        <div className="text-white">
        <i className="block bg-blue-600 bg-opacity-15 w-fit p-2 rounded-md"><FaLayerGroup color="#1E88E5" size="36"/></i>
        <p className="text-lg my-6 font-bold">{heading}</p>
        <p className="text-xs text-gray-400 leading-5">{content}</p>
        </div>
    )
}
export default MainCard;