const Navbar = () =>{
    return (
        <div className="flex bg-transparent text-white w-screen text-sm py-2 px-14">
            <div className="basis-1/4 flex"><i>Logo</i><p className="text-3xl font-semibold">Startup</p></div>
            <ul className="flex basis-1/2 gap-5 items-center">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Support</li>
                <li>Pages</li>
            </ul>
            <div className="flex basis-1/4 gap-5 items-center">
                <a href="" className="text-sm ml-auto">Sign In</a>
                <button className="bg-blue-600 text-white font-semibold rounded-md p-2 text-sm">Sign Up</button>
            </div>
        </div>
    )
}
export default Navbar;