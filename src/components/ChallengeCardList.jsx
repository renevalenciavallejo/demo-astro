import ChallengeCard from "./ChallengeCard.jsx";
import { useState } from "react";
import { useTranslations } from "src/i18n/utils";
import run from "@assets/images/run.svg"
import cicle from "@assets/images/cicle.svg"
import "src/utils/styles/ChangeCardList.css"

function ChallengeCardList({ challenges, baseUrl, lang }) {

  let t = useTranslations(lang);

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

  return (
    <>
      

      <section className="bg-black w-full overflow-x-auto sm:px-10">
        <div className="flex space-x-4 p-4 sm:pl-10 sm:justify-center lg:justify-start md:justify-center pt-0 pt:mt-0">
          <div className="flex-shrink-0">
            <button
              className={`border border-gray-300 rounded-10 hover:bg-white focus:bg-white hover:text-black font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black ${
                selectedFilter === "All races & challenges"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
              onClick={() => {
                filterChallenges("All races & challenges")}}
            >
              {t("challenge-list-filter-all")}
            </button>
          </div>

          <div className="flex-shrink-0">
            <button
              className={`btn-list border border-gray-300 rounded-10 hover:text-black hover:bg-customYellow focus:bg-customYellow font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black ${
                selectedFilter === "Running"
                ? "bg-customYellow text-black" 
                : "bg-black text-white"
              }`}
              onClick={() => filterChallenges("Running")}
            >
              <img className={`w-6 h-6 pr-1 ${
                selectedFilter === "Running" ? "icon-btn" : "" 
              }`} src={run.src} alt="run" />
              {t("challenge-list-filter-running")}
            </button>
          </div>

          <div className="flex-shrink-0">
            <button
              className={`btn-list border border-gray-300 rounded-10 hover:text-black hover:bg-customPink focus:bg-customPink font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black ${
                selectedFilter === "Cycling"
                ? "bg-customPink text-black" 
                : "bg-black text-white"
              }`}
              onClick={() => filterChallenges("Cycling")}
            >
              <img className={`w-6 h-6 pr-1 ${
                selectedFilter === "Cycling" ? "icon-btn" : "" 
              }`} src={cicle.src} alt="cycle" />
              {t("challenge-list-filter-cycling")}
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
