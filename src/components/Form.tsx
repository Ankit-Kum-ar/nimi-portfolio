import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast"; // Import toast
import { Loader } from "lucide-react"; // Import Loader

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  // Removed unused 'submitted' state

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          // Removed unused 'setSubmitted'
          formRef.current?.reset();
          toast.success("Message sent successfully!"); // Success toast
          // Removed unused 'setSubmitted' timeout
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message. Please try again."); // Error toast
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="Form-container md:h-[450px] xl:h-[480px] md:w-[30vw] w-[90vw] relative px-4 md:px-8 py-2 md:absolute md:right-20 bg-[#FFFFFF] rounded-2xl z-10 mt-2">
      <div>
        <h3 className="pt-4 font-bold text-xl">Get in Touch</h3>
        <p className="font-normal text-xs">
          Your Journey to Exceptional Living Starts Here
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="flex pt-4 gap-4">
          {/* First Name */}
          <div className="flex flex-col w-1/2">
            <label htmlFor="firstName" className="text-xs md:text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Ali"
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col w-1/2">
            <label htmlFor="lastName" className="text-xs md:text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Tufan"
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-xs md:text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="example@example.com"
            required
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-xs md:text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Type your message here..."
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#1B4C89] text-white rounded-lg py-2 flex items-center justify-center cursor-pointer hover:bg-[#0F1D33] transition duration-300"
          disabled={loading} // Disable button while loading
        >
          {loading ? <Loader className="animate-spin w-5 h-5" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;