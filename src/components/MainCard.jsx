/* eslint-disable react/prop-types */

const MainCard = ({heading,content,icon}) => {
    return(
        <div className="text-white">
        <i className="block bg-blue-600 bg-opacity-10 w-fit p-2 md:p-3 rounded-md">{icon}</i>
        <p className="md:text-2xl text-xl mt-6 mb-4 font-bold">{heading}</p>
        <p className="text-gray-400 font-medium leading-5 md:leading-relaxed md:text-base text-sm">{content}</p>
        </div>
    )
}
export default MainCard;