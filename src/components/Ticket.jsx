/* eslint-disable react/no-unescaped-entities */
const Ticket = () => {
    return (
        <div className="flex py-28 px-14 gap-x-10 lg:flex-row flex-col lg:gap-y-0 gap-y-10">
            <div className="basis-2/3 bg-gray-300 bg-opacity-10 p-10 rounded-sm">
                <p className="text-2xl font-semibold text-white">Need help? Open a Ticket</p>
                <p className="text-sm text-gray-400 mt-2">Our support team will get back to you asap.</p>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-2 py-10">
                    <label htmlFor="field1" className="text-white text-xs font-semibold">Your Name</label>
                    <label htmlFor="field2" className="text-white text-xs font-semibold">Your Email</label>
                    <input className="bg-blue-500 bg-opacity-10 text-gray-400 text-sm shadow-md px-4 py-2 rounded-md" type="text" placeholder="Enter your name" id="field1"></input>
                    <input className="bg-blue-500 bg-opacity-10 text-gray-400 text-sm shadow-md px-4 py-2 rounded-md" type="email" placeholder="Enter Mail" id="field2"></input>
                </div>
                <>
                <label htmlFor="field3" className="block text-white text-xs font-semibold mb-2">Your Message</label>
                <textarea name="" id="field3" className=" w-full h-48 md:block hidden bg-blue-500 bg-opacity-10 text-gray-400 text-sm shadow-md px-4 py-2 rounded-md" placeholder="Enter Your Message"></textarea>
                </>
                <button className="bg-blue-600 text-white font-semibold rounded-md py-4 px-5 text-xs mt-10">Submit Ticket</button>
            </div>
            <div className="basis-1/3 bg-blue-600 bg-opacity-10 p-10">
                <p className="text-xl text-white font-semibold">Subscribe to recieve future updates.</p>
                <p className="text-sm text-gray-400 mt-2 pb-10 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facilis iste mollitia necessitatibus commodi.</p>
                <hr />
                <input className="w-full mt-10 mb-2 bg-gray-300 bg-opacity-10 text-gray-400 text-sm shadow-md px-4 py-2 rounded-md" type="text" placeholder="Enter your name" id="fielda"></input>
                <input className="w-full mt-2 mb-2  bg-gray-300 bg-opacity-10 text-gray-400 text-sm shadow-md px-4 py-2 rounded-md" type="email" placeholder="Enter Mail" id="fieldb"></input>
                <button className="w-full bg-blue-600 text-white font-semibold rounded-md py-3 px-5 text-xs mt-2 mb-2">Subscribe</button>                
                <p className=" text-center text-sm text-gray-400 mt-2 leading-5">No spam guaranteed, So Please don't send <br />any spam mail.</p>
            </div>
        </div>
    )
}
export default Ticket;