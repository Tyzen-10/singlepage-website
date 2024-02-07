import MainCard from "./MainCard";
import { BsLayersFill } from "react-icons/bs";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { MdRestorePage } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
const MainFeature = () => {
     const content_one = "Writing 30 words that could possibly make this paragraph look big and confuse the readers on what they are currently reading and make them question reality. Adding 10 more words for this to become a 4 line paragraph."
    return (
        <div className="bg-secondary py-32">
            <div className="text-center text-white lg:px-80 pb-36 px-14">
                <p className="text-[2rem] md:text-[2.75rem] font-bold leading-tight mb-5">Main Features</p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat dignissimos temporibus illum. Facere optio eaque magnam, odio quidem autem!</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 px-14 md:px-36 lg:px-14">
                <MainCard heading={"Crafted for Startups"} content={content_one} icon={<BsFillGrid1X2Fill color="RoyalBlue" size="42"/>}></MainCard>
                <MainCard heading={"High Quality Design"} content={content_one} icon={<BsLayersFill color="RoyalBlue" size="42"/>}></MainCard>
                <MainCard heading={"Next.js.13.x"} content={content_one} icon={<TbGridDots color="RoyalBlue" size="42"></TbGridDots>}></MainCard>
                <MainCard heading={"Tailwind CSS"} content={content_one} icon={<IoMdSettings color="RoyalBlue" size="42"></IoMdSettings>}></MainCard>
                <MainCard heading={"Fully Customisable"} content={content_one} icon={<SiPowerpages color="RoyalBlue" size="42"></SiPowerpages>}></MainCard>
                <MainCard heading={"Free and Open Source"} content={content_one} icon={<MdRestorePage color="RoyalBlue" size="42"></MdRestorePage>}></MainCard>
            </div>
        </div>
    )
}
export default MainFeature;