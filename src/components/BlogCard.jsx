/* eslint-disable react/prop-types */
const BlogCard = ({img,name,pimg,pill,des})=>{
    return (
        <div className="relative bg-gray-300 bg-opacity-10 rounded-sm">
            <img src={img} className="h-48 w-full object-cover"></img>
            <p className="absolute top-2 right-2 bg-blue-600 text-white md:text-sm text-[10px] font-semibold rounded-full py-1 px-3 md:px-4 md:py-2 bg-opacity-95">{pill}</p>
            <hr></hr>
            <p className=" md:text-2xl text-lg text-white font-bold pl-6 pr-8 py-5 hover:text-blue-600">Best UI Components for building websites</p>
            <p className="text-gray-400 ml-6 mr-8 pb-5 leading-normal md:text-base text-xs border-b-2 border-gray-500 border-opacity-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate veniam maiores quod. A Few more words.</p>
            <div className="flex">
                <div className="flex pl-6 pb-5 pr-8 gap-4 mt-5">
                    <img src={pimg} alt="" className="h-10 w-10 rounded-full object-cover" />
                    <div className="leading-5 py-1">
                    <p className="text-white text-sm font-medium">By {name}</p>
                    <p className="text-gray-400 text-[13px]">{des}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogCard;