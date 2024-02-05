import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <>
        <div className="flex gap-x-48 px-14 mb-14 md:flex-row flex-col">
            <div className="basis-1/3">
            <div className="flex"><i className="text-white">Logo</i><p className="text-2xl font-semibold text-white mb-5">Startup</p></div>
            <p className="text-gray-400 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, autem?</p>
            <div className="flex gap-x-5 my-5">
            <FaFacebookF color="lightgray" />
            <FaTwitter color="lightgray" />
            <FaYoutube color="lightgray" />
            <FaLinkedin color="lightgray" />
            </div>
            </div>
            <div className="basis-2/3 grid grid-cols-3 gap-4">
                <p className="text-white text-lg font-semibold">Useful Links</p>
                <p className="text-white text-lg font-semibold">Terms</p>
                <p className="text-white text-lg font-semibold">Support & Help</p>
                <p className="text-gray-400 text-sm">Blog</p>
                <p className="text-gray-400 text-sm">TOS</p>
                <p className="text-gray-400 text-sm">Open Support Ticket</p>
                <p className="text-gray-400 text-sm">Pricing</p>
                <p className="text-gray-400 text-sm">Privacy Policy</p>
                <p className="text-gray-400 text-sm">Terms of Use</p>
                <p className="text-gray-400 text-sm">About</p>
                <p className="text-gray-400 text-sm">Refund Policy</p>
                <p className="text-gray-400 text-sm">Contact Us</p>
            </div>
        </div>
        <div className="bg-secondary text-center min-h-8 py-5 text-sm text-white"><p>Template by UI deck and Next.js Templates</p></div>
        </>
    )

}
export default Footer;