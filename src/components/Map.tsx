
const Map = () => {
  return (
    <div  className="flex flex-col md:flex-row gap-6 relative justify-center py-4 items-center bg-[#283D68] ">
    <div className="w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.9842580341358!2d77.03551315385069!3d28.577325129222128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aeb7d8d192d%3A0x8fd7a6d09c7e455c!2sNIMI%20GROUP!5e0!3m2!1sen!2sin!4v1742303871361!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-lg"
      ></iframe>
    </div>
    <div className="Form-container md:h-[80vh] md:w-[30vw] w-[80vw] relative px-4 md:px-8 py-2 md:absolute md:right-20 bg-[#FFFFFF] rounded-2xl z-10">
        <div>
        <h3 className=" pt-4 font-bold text-xl">Get in Touch</h3>
        <p className=" font-normal text-xs">Your Journey to Exceptional Living Starts Here</p></div>


        {/* Form */}
        <form className=" flex flex-col gap-4">
            <div className="flex pt-4 gap-4">
                {/* First Name */}
                <div className="flex flex-col w-1/2">
                    <label htmlFor="firstName" className="text-xs md:text-sm font-medium">First Name</label>
                    <input 
                        type="text"
                        id="firstName"
                        placeholder="Ali"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Last Name */}
                <div className="flex flex-col w-1/2">
                    <label htmlFor="lastName" className="text-xs md:text-sm font-medium">Last Name</label>
                    <input 
                        type="text"
                        id="lastName"
                        placeholder="Tufan"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
                <label htmlFor="email" className="text-xs md:text-sm font-medium">Email</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="example.com"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Message */}
            <div className="flex flex-col">
                <label htmlFor="message" className="text-xs md:text-sm font-medium">Message</label>
                <textarea 
                    id="message"
                    rows={4}
                    placeholder="Type your message here..."
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-[#1B4C89] text-white rounded-lg py-2 cursor-pointer hover:bg-[#0F1D33] transition duration-300"
            >
                Submit
            </button>
        </form>
    </div>
  </div>
  )
}

export default Map
