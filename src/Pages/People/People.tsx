import { Link } from "react-router-dom";
import PeopleCard from "./components/PeopleCard";
import { peopleData } from "@/utils/constant";

const People = () => {
    
  return (
    <div className="min-h-screen bg-[#90BAE9]/80 flex flex-col justify-center p-8">
      <div className=" mx-auto text-center"><h2 className="text-4xl font-bold text-[#1D2130] mb-4">
          Our Team
        </h2>
        <p className="text-lg text-[#525560] mb-12">
          Meet the dreamers, doers, and changemakers powering our purpose.
        </p></div>
      <div className="grid justify-center gap-4 md:gap-6 w-full max-w-7xl grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {peopleData.map((people, index) => (
          <div key={index} className={`${index % 2 === 0 ? "mt-10" : ""}`}>
            <Link to={`/people/${people.index}`}>
              <PeopleCard title={people.title} src={people.src} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;