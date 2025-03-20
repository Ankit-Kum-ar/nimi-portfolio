import { Mail, Phone } from "lucide-react";
import Logo from "/images/logo.png";

const VisitingCard = () => {
    const phoneNumber = "+918851469617";
  return (
    <section className="visitingcardbanner w-full h-full rounded-2xl bg-[url(/images/Capa.png)] bg-white bg-no-repeat bg-contain flex flex-col justify-between  p-4">
        <img src={Logo} alt="NIMI" className=" h-10 w-20" loading="lazy"/>
        <p className="text-sm font-bold text-[#284368] ">NIMI DEVELOPERS PVT. LTD.</p>
        <div>
         <a
        href={`tel:${phoneNumber}`}
        className="flex items-center  shadow-lg cursor-pointer  transition-transform transform hover:scale-110"
      >
        <Phone className="text-[#284368] h-4 font-bold" />
        <p className="text-sm text-[#284368] font-bold">{phoneNumber}</p>
        </a>
        <a
        href="mailto:nimidevelopers2009@gmail.com"
        className="flex items-center  shadow-lg cursor-pointer transition-transform transform hover:scale-110"
      >
        <Mail className="text-[#284368] h-4 font-bold" />
        <p className="text-sm text-[#284368] font-bold">nimidevelopers2009@gmail.com</p>
        </a>
        </div>
        <div className="flex justify-end ">
        <p className="w-[70%] text-xs text-right text-[#284368] font-semibold">Plot No10, Main Road, Qutub Vihar-1, Dwarka Sector -19, New Delhi -110071</p>
        </div>

    </section>
  )
}

export default VisitingCard
