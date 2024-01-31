import MainCard from "./MainCard";

const MainFeature = () => {
     const content_one = "Writing 30 words that could possibly make this paragraph look big and confuse the readers on what they are currently reading and make them question reality. Adding 10 more words for this to become a 4 line paragraph."
    return (
        <div className="bg-secondary py-36">
            <div className="text-center text-white px-80 pb-36">
                <p className="text-4xl font-semibold mb-5">Main Features</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat dignissimos temporibus illum.<br></br> Facere optio eaque magnam, odio quidem autem!</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 px-14">
                <MainCard heading={"Crafted for Startups"} content={content_one}></MainCard>
                <MainCard heading={"High Quality Design"} content={content_one}></MainCard>
                <MainCard heading={"Next.js.13.x"} content={content_one}></MainCard>
                <MainCard heading={"Tailwind CSS"} content={content_one}></MainCard>
                <MainCard heading={"Fully Customisable"} content={content_one}></MainCard>
                <MainCard heading={"Free and Open Source"} content={content_one}></MainCard>
            </div>
        </div>
    )
}
export default MainFeature;