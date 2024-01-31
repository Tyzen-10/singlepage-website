/* eslint-disable react/prop-types */
const BlogCard = ({img,name,pimg,pill,des})=>{
    return (
        <div className="relative bg-gray-300 bg-opacity-10 rounded-sm">
            <img src={img} className="h-48 w-full"></img>
            <p className="absolute top-2 right-2 bg-blue-500 text-white text-[10px] font-semibold rounded-full py-1 px-3">{pill}</p>
            <hr></hr>
            <p className=" text-white font-bold pl-6 pr-8 py-5">Best UI Components for building websites</p>
            <p className="text-gray-400 text-xs pl-6 pr-8 pb-5 leading-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptate veniam maiores quod. A Few more words as fillers.</p>
            <div className="flex">
                <div className="flex pl-6 pb-5 pr-8 gap-4">
                    <img src={pimg} alt="" className="h-10 w-10 rounded-full" />
                    <div className="leading-5 py-1">
                    <p className="text-white text-xs font-bold">By {name}</p>
                    <p className="text-gray-400 text-[9px]">{des}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogCard;