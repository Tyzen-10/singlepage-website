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

  const navbarClasses = `sticky top-0 flex w-screen text-white text-sm py-4 md:py-6 md:px-14 px-6 z-50 ${isSticky ? 'bg-transparent bg-opacity-80 backdrop-blur-md' : 'bg-primary'}`;
    return (
        <div className={navbarClasses} id="navbar">
            <div className="basis-1/6 flex"><i>Logo</i><p className="text-3xl font-semibold">Startup</p></div>
            <ul className={`nav-links absolute ${isOpen ? 'top-[100%] visible' : 'md:visible invisible'} md:static md:flex-row flex-col flex basis-1/3 md:gap-10 gap-10 md:items-center min-h-[50vh] md:min-h-fit left-0 w-full md:p-0 p-5 md:bg-transparent ${isSticky ? 'bg-secondary bg-opacity-80 backdrop-blur' : 'bg-primary backdrop-blur bg-opacity-80'} text-xl md:text-base`}>
                <li className="hover:text-gray-500">Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Support</li>
                <li>Pages</li>
            </ul>
            <div className="flex basis-1/6 gap-5 items-center ml-auto">
                <a href="" className="ml-auto md:text-base text-sm font-semibold">Login</a>
                <button className="bg-blue-600 text-white font-semibold rounded-md px-2 py-2 md:px-5 md:py-3 md:text-base text-sm hover:bg-blue-700">New?</button>
                <IoMenu color="RoyalBlue" size="32" className="cursor-pointer md:hidden" onClick={onToggleMenu} id="menu"></IoMenu>
            </div>
        </div>
    )
}
export default Navbar;