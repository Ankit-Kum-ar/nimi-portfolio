import ContactImg from "/images/Group 122.png"
const GetInTouch = () => {
  return (
    <section className="banner  w-full px-4 md:px-10 md:py-10 py-4 flex justify-center items-center gap-4 overflow-clip max-w-7xl mx-auto mb-10 ">
        <div className="w-[100%] h-auto bg-[#284368] rounded-2xl z-20 flex justify-center items-center flex-col gap-4">
            <div>
                <h1 className="text-white text-2xl md:text-4xl font-bold p-4 text-center">Get in Touch</h1>
                <p className="text-white text-sm md:text-lg font-normal text-center">Reach out, and let's create a universe of possibilities together!</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 p-4">
                <div className="form  px-4 md:px-8 py-2 w-[90vw] lg:w-[30vw] md:w-[60w]">
                <form className=" text-white flex flex-col gap-4">
            <div className="flex pt-4 gap-2">
                {/* First Name */}
                <div className="flex flex-col w-1/2">
                    {/* <label htmlFor="firstName" className="text-xs md:text-sm font-medium text-white">First Name</label> */}
                    <input 
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        className="border border-[#536986]  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Last Name */}
                <div className="flex flex-col w-1/2">
                    {/* <label htmlFor="lastName" className="text-xs md:text-sm font-medium">Last Name</label> */}
                    <input 
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        className="border border-[#536986]  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
                {/* <label htmlFor="email" className="text-xs md:text-sm font-medium">Email</label> */}
                <input 
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="border border-[#536986] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Message */}
            <div className="flex flex-col">
                {/* <label htmlFor="message" className="text-xs md:text-sm font-medium">Message</label> */}
                <textarea 
                    id="message"
                    rows={4}
                    placeholder="Type your message here..."
                    className="border border-[#536986]  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-[#C4DAF3] text-[#284368] rounded-lg py-2 cursor-pointer hover:bg-[#0F1D33] hover:text-white transition duration-300"
            >
                Submit
            </button>
        </form>

                </div>
                <div className="image hidden lg:block w-[30vw] md:w-[50vw] h-[50%]">
                    <img src={ContactImg} alt="Contact Us" className="h-[5
                    0%]" />
                 </div>
            </div>

        </div>

    </section>
  )
}

export default GetInTouch
