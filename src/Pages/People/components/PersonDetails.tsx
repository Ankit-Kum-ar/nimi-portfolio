import { useParams } from "react-router-dom";
import { peopleData } from "@/utils/constant";

const PersonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const person = peopleData.find((p) => p.index === parseInt(id || "", 10));

  if (!person) {
    return <div className="text-center text-xl text-red-500 mt-20">Person not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#90BAE9] to-[#6A9FD8] flex justify-center items-center p-8">
        <div className="max-w-3xl bg-[#F0F4FA] p-8 rounded-lg shadow-lg">        
            <h1 className="text-3xl font-bold text-[#2C3E50] mb-6 text-center">{person.title}</h1>
            <img
                src={person.src}
                alt={person.title}
                className="w-full h-auto rounded-lg mb-6 shadow-md bg-[#F0F4FA] p-4"
            />
            <p className="md:text-lg text-[#34495E] leading-relaxed">{person.description}</p>
        </div>
    </div>
  );
};

export default PersonDetails;