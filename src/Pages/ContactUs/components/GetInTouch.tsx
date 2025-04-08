import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactImg from "/images/Group 122.png";
import { toast } from "react-hot-toast";
import { Loader } from "lucide-react"; // Import the Loader component

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const GetInTouch = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State to track loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start the loader
    const name = `${form.firstName} ${form.lastName}`;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully!");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop the loader
    }
  };

  return (
    <section className="banner w-full px-4 md:px-10 md:py-10 py-4 flex justify-center items-center gap-4 overflow-clip max-w-7xl mx-auto mb-10">
      <div className="w-[100%] h-auto bg-[#284368] rounded-2xl z-20 flex justify-center items-center flex-col gap-4">
        <div>
          <h1 className="text-white text-2xl md:text-4xl font-bold p-4 text-center">Get in Touch</h1>
          <p className="text-white text-sm md:text-lg font-normal text-center">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 p-4">
          <div className="form px-4 md:px-8 py-2 w-[90vw] lg:w-[30vw] md:w-[60w]">
            <form className="text-white flex flex-col gap-4" onSubmit={sendEmail}>
              <div className="flex pt-4 gap-2">
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="border border-[#536986] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="border border-[#536986] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="border border-[#536986] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Type your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="border border-[#536986] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`rounded-lg py-2 flex items-center justify-center transition duration-300 ${
                  loading
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                    : "bg-[#C4DAF3] text-[#284368] hover:bg-[#0F1D33] hover:text-white"
                }`}
                disabled={loading} // Disable button while loading
              >
                {loading ? <Loader className="animate-spin w-5 h-5" /> : "Submit"}
              </button>
            </form>
          </div>

          <div className="image hidden lg:block w-[30vw] md:w-[50vw] h-[50%]">
            <img src={ContactImg} alt="Contact Us" className="h-[50%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;