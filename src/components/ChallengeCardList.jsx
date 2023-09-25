import ChallengeCard from "./ChallengeCard.jsx";
import { useState } from "react";
import { useTranslations } from "src/i18n/utils";
import run from "../assets/images/run.svg"
import cicle from "../assets/images/cicle.svg"

function ChallengeCardList({ challenges, baseUrl, lang }) {
  let t = useTranslations(lang);

  const [selectedFilter, setSelectedFilter] = useState(
    t("challenge-menu-all.button")
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
    selectedFilter === t("challenge-menu-all.button")
      ? challenges
      : challenges.filter(
          (challenge) => challenge.data.activityType === selectedFilter
        );

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

          .btn-list > img{
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(305deg) brightness(105%) contrast(103%);
          }

          .btn-list:hover > img{
            filter:brightness(0) saturate(100%) invert(0%) sepia(6%) saturate(5821%) hue-rotate(5deg) brightness(97%) contrast(83%);
          }

          .btn-list:focus > img{
            filter:brightness(0) saturate(100%) invert(0%) sepia(6%) saturate(5821%) hue-rotate(5deg) brightness(97%) contrast(83%);
          }
          
          .icon-btn{
            filter:brightness(0) saturate(100%) invert(0%) sepia(6%) saturate(5821%) hue-rotate(5deg) brightness(97%) contrast(83%) !important;
          }
        `}
      </style>

      <section className="bg-black w-full overflow-x-auto sm:px-10">
        <div className="flex space-x-4 p-4 sm:pl-10 sm:justify-center lg:justify-start md:justify-center pt-0 pt:mt-0">
          <div className="flex-shrink-0">
            <button
              className={`border border-gray-300 rounded-10 hover:bg-white focus:bg-white hover:text-black font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black ${
                selectedFilter === t("challenge-menu-all.button")
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
              onClick={() => {
                filterChallenges(t("challenge-menu-all.button"))}}
            >
              {t("challenge-menu-all.button")}
            </button>
          </div>

          <div className="flex-shrink-0">
            <button
              className={`btn-list border border-gray-300 rounded-10 hover:text-black hover:bg-customYellow focus:bg-customYellow font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black ${
                selectedFilter === t("challenge-menu-running.button") 
                ? "bg-customYellow text-black" 
                : "bg-black text-white"
              }`}
              onClick={() => filterChallenges(t("challenge-menu-running.button"))}
            >
              <img className={`w-6 h-6 pr-1 ${
                selectedFilter === t("challenge-menu-running.button") ? "icon-btn" : "" 
              }`} src={run.src} alt="run" />
              {t("challenge-menu-running.button")}
            </button>
          </div>

          <div className="flex-shrink-0">
            <button
              className={`btn-list border border-gray-300 rounded-10 hover:text-black hover:bg-customPink focus:bg-customPink font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black ${
                selectedFilter === t("challenge-menu-cycling.button") 
                ? "bg-customPink text-black" 
                : "bg-black text-white"
              }`}
              onClick={() => filterChallenges(t("challenge-menu-cycling.button"))}
            >
              <img className={`w-6 h-6 pr-1 ${
                selectedFilter === t("challenge-menu-cycling.button") ? "icon-btn" : "" 
              }`} src={cicle.src} alt="cycle" />
              {t("challenge-menu-cycling.button")}
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
