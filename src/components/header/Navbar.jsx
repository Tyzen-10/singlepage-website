import { useState,useEffect } from "react";
import { IoMenu } from "react-icons/io5";
const Navbar = () =>{
    const [isOpen,setOpen] = useState(false)
    const onToggleMenu = () =>{
        setOpen(!isOpen);
    }
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sticky = document.getElementById('navbar').offsetTop;
      console.log("sticky : "+ sticky)

      if (sticky>30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const navbarClasses = `sticky top-0 flex w-screen text-white text-sm py-2 md:px-14 px-6 z-50 ${isSticky ? 'bg-transparent bg-opacity-80 backdrop-blur-md' : 'bg-primary'}`;
    return (
        <div className={navbarClasses} id="navbar">
            <div className="basis-1/4 flex"><i>Logo</i><p className="text-3xl font-semibold">Startup</p></div>
            <ul className={`nav-links absolute ${isOpen ? 'top-[100%] visible' : 'md:visible invisible'} md:static md:flex-row flex-col flex basis-1/2 md:gap-5 gap-10 md:items-center min-h-[50vh] md:min-h-fit left-0 w-full md:p-0 p-5 md:bg-transparent ${isSticky ? 'bg-secondary bg-opacity-80 backdrop-blur' : 'bg-primary backdrop-blur bg-opacity-80'} text-xl md:text-sm`}>
                <li className="hover:text-gray-500">Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Support</li>
                <li>Pages</li>
            </ul>
            <div className="flex basis-1/4 gap-5 items-center ml-auto">
                <a href="" className="text-sm ml-auto">Login</a>
                <button className="bg-blue-600 text-white font-semibold rounded-md p-2 text-sm">New User?</button>
                <IoMenu color="RoyalBlue" size="32" className="cursor-pointer md:hidden" onClick={onToggleMenu} id="menu"></IoMenu>
            </div>
        </div>
    )
}
export default Navbar;