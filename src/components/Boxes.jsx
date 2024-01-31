const Boxes = () =>{
    return(
        <div className="flex h-full gap-10 pr-20 pl-20 py-10">
            <div className="bg-blue-300 opacity-10 h-full basis-2/3"></div>
            <div className="flex flex-col basis-1/3 gap-8">
                <div className="w-full basis-2/3 bg-blue-500 opacity-10"></div>
                <div className="w-full basis-1/3 bg-blue-500 opacity-10"></div>
            </div>
        </div>
    )
}
export default Boxes;