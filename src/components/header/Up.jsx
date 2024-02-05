import { FaAngleUp } from "react-icons/fa";
const Up = () =>{
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return(
        <div className="w-fit fixed bottom-10 right-10 rounded-md bg-blue-600 p-5 opacity-80 z-50" onClick={scrollToTop}>
            <FaAngleUp color="white" size="24"></FaAngleUp>
        </div>
    )
}
export default Up;