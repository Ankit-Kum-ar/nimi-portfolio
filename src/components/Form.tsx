
const Form = () => {
  return (
    <div className="Form-container md:h-[450px] xl:h-[480px] md:w-[30vw] w-[90vw] relative px-4 md:px-8 py-2 md:absolute md:right-20 bg-[#FFFFFF] rounded-2xl z-10">
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
  )
}

export default Form
