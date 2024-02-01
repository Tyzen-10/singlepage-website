/* eslint-disable react/prop-types */

const MainCard = ({heading,content,icon}) => {
    return(
        <div className="text-white">
        <i className="block bg-blue-600 bg-opacity-10 w-fit p-2 rounded-md">{icon}</i>
        <p className="text-lg mt-6 mb-4 font-bold">{heading}</p>
        <p className="text-[13px] text-gray-400 leading-5">{content}</p>
        </div>
    )
}
export default MainCard;