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
        <div className="bg-secondary py-36">
            <div className="text-center text-white px-80 pb-36">
                <p className="text-4xl font-semibold mb-5">Main Features</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat dignissimos temporibus illum.<br></br> Facere optio eaque magnam, odio quidem autem!</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 px-14">
                <MainCard heading={"Crafted for Startups"} content={content_one} icon={<BsFillGrid1X2Fill color="RoyalBlue" size="36"/>}></MainCard>
                <MainCard heading={"High Quality Design"} content={content_one} icon={<BsLayersFill color="RoyalBlue" size="36"/>}></MainCard>
                <MainCard heading={"Next.js.13.x"} content={content_one} icon={<TbGridDots color="RoyalBlue" size="36"></TbGridDots>}></MainCard>
                <MainCard heading={"Tailwind CSS"} content={content_one} icon={<IoMdSettings color="RoyalBlue" size="36"></IoMdSettings>}></MainCard>
                <MainCard heading={"Fully Customisable"} content={content_one} icon={<SiPowerpages color="RoyalBlue" size="36"></SiPowerpages>}></MainCard>
                <MainCard heading={"Free and Open Source"} content={content_one} icon={<MdRestorePage color="RoyalBlue" size="36"></MdRestorePage>}></MainCard>
            </div>
        </div>
    )
}
export default MainFeature;