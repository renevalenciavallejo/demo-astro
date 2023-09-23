import ChallengeCard from "./ChallengeCard.jsx";
import { useState } from "react";
import { useTranslations } from "src/i18n/utils";

function ChallengeCardList({ challenges, baseUrl, lang }) {
  const [selectedFilter, setSelectedFilter] = useState(
    "All races & challenges"
  );

  const filterChallenges = (type) => {
    setSelectedFilter(type);
  };

  const sortByStartTimeAscending = (a, b) => {
    const timeA = new Date(a.startTime).getTime();
    const timeB = new Date(b.startTime).getTime();

    return timeA - timeB;
  };

  const filteredChallenges =
    selectedFilter === "All races & challenges"
      ? challenges
      : challenges.filter(
          (challenge) => challenge.data.activityType === selectedFilter
        );

  const t = useTranslations(lang);

  return (
    <>
      <style>
        {`
          .w-full.overflow-x-auto::-webkit-scrollbar {
            display: none;
          }

          .w-full.overflow-x-auto {
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
        `}
      </style>

      <section className="bg-black w-full overflow-x-auto sm:px-10">
        <div className="flex space-x-4 p-4 sm:pl-10 sm:justify-center lg:justify-start md:justify-center pt-0 pt:mt-0">
          <div className="flex-shrink-0">
            <button
              className={`bg-transparent border border-gray-300 rounded-10 hover:bg-white focus:bg-white hover:text-black text-white font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black ${
                selectedFilter === "All races & challenges"
                  ? "bg-white text-black"
                  : ""
              }`}
              onClick={() => filterChallenges("All races & challenges")}
            >
              All races & challenges
            </button>
          </div>

          <div className="flex-shrink-0">
            <button
              className={`bg-transparent border border-gray-300 rounded-10 hover:text-black hover:bg-customYellow focus:bg-customYellow text-white font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black ${
                selectedFilter === "Running" ? "bg-customYellow text-black" : ""
              }`}
              onClick={() => filterChallenges("Running")}
            >
              Running
            </button>
          </div>

          <div className="flex-shrink-0">
            <button
              className={`bg-transparent border border-gray-300 rounded-10 hover:text-black hover:bg-customPink focus:bg-customPink text-white font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black ${
                selectedFilter === "Cycling" ? "bg-customPink text-black" : ""
              }`}
              onClick={() => filterChallenges("Cycling")}
            >
              Cycling
            </button>
          </div>
        </div>
      </section>

      <section className="bg-black flex justify-center flex-row flex-wrap pb-4 sm:px-16 lg:justify-start">
        {filteredChallenges.sort(sortByStartTimeAscending).map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            baseUrl={baseUrl}
          />
        ))}
      </section>
    </>
  );
}

export default ChallengeCardList;
