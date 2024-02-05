import BlogCard from "./BlogCard";

const Blogs = () => {
    return (
        <div className="py-36 bg-secondary">
            <div className="text-center text-white lg:px-80 pb-36 px-14">
                <p className="text-4xl font-semibold mb-5">Our Latest Blogs</p>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat dignissimos temporibus illum.<br></br> Facere optio eaque magnam, odio quidem autem!</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 px-14 md:px-36 lg:px-14">
                <BlogCard img={"src/blog1.jpeg"} name={"Venkatesan R S"} pimg={"src/passpic.jpeg"} pill={"Creative"} des={"React Developer"}></BlogCard>
                <BlogCard img={"src/blog2.jpeg"} name={"David Wellium"} pimg={"src/person2.jpeg"} pill={"Computer"} des={"UI/UX Designer"}></BlogCard>
                <BlogCard img={"src/blog3.jpeg"} name={"Micheal Frenzi"} pimg={"src/person3.jpeg"} pill={"Design"} des={"Graphic Designer"}></BlogCard>
            </div>
        </div>
    )
}
export default Blogs;