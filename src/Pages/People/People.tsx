import { Link } from "react-router-dom";
import PeopleCard from "./components/PeopleCard";
import { peopleData } from "@/utils/constant";

const People = () => {
    
  return (
    <div className="min-h-screen bg-[#90BAE9]/80 flex justify-center p-8">
      <div className="grid gap-4 md:gap-6 w-full max-w-6xl grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
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