import PriceCard from "./PriceCard";

const Pricing = () => {
    return(
        <div className="py-32">
            <div className="text-center text-white lg:px-80 pb-36 px-14">
                <p className="text-[2rem] md:text-[2.75rem] font-bold leading-tight mb-5">Simple and Affordable Pricing</p>
                <p className="text-base md:text-lg text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat dignissimos temporibus illum. Facere optio eaque magnam, odio quidem autem!</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 grid-cols-1 px-14 lg:px-14">
                <PriceCard Plan={"Lite"} La={false} Flu={false} price={"40"}></PriceCard>
                <PriceCard Plan={"Basic"} La={true} Flu={false} price={"80"}></PriceCard>
                <PriceCard Plan={"Plus"} La={true} Flu={true} price={"120"}></PriceCard>
            </div>
        </div>
    )
}
export default Pricing;