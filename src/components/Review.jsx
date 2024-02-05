import ReviewCard from "./ReviewCard";

const Review = () => {
    return(
        <div className="bg-secondary py-36">
            <div className="text-center text-white lg:px-80 pb-36 px-14">
                <p className="text-4xl font-semibold mb-5">What Our Users Say</p>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat dignissimos temporibus illum.<br></br> Facere optio eaque magnam, odio quidem autem!</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 px-14">
                <ReviewCard name={"Venkatesan R S"} pimg={"src/passpic.jpeg"} des={"Founder @ ABC Tech"}></ReviewCard>
                <ReviewCard name={"David Wellium"} pimg={"src/person2.jpeg"} des={"Founder @ UI Deck"}></ReviewCard>
                <ReviewCard name={"Lethium Frenzi"} pimg={"src/person3.jpeg"} des={"Founder @ Tech Stack"}></ReviewCard>
            </div>
        </div>
    )
}
export default Review;