import { useState } from "react";
import ChallengeCard from "./ChallengeCard.jsx";

function ChallengeCardList({ activitiesChallenges }) {
  const [activities, setActivities] = useState(activitiesChallenges);
  const [svgColorRunning, setColorSvgRunning] = useState("white");
  const [runningIselected, setRunningIselected] = useState(false);
  const [svgColorCycling, setColorSvgCycling] = useState("white");
  const [cyclingIselected, setCyclingIselected] = useState(false);

  const changeColorRunning = (event) => {
    if (event === "onFocus") {
      setRunningIselected(true);
      setColorSvgRunning("black");
    } else if (event === "onBlur") {
      setRunningIselected(false);
      setColorSvgRunning("white");
    } else if (event === "onMouseEnter") {
      setColorSvgRunning("black");
      if (!runningIselected) {
        setColorSvgRunning("black");
      }
    } else if (event === "onMouseLeave") {
      if (!runningIselected) {
        setColorSvgRunning("white");
      }
    }
  };

  const changeColorCycling = (event) => {
    if (event === "onFocus") {
      setCyclingIselected(true);
      setColorSvgCycling("black");
    } else if (event === "onBlur") {
      setCyclingIselected(false);
      setColorSvgCycling("white");
    } else if (event === "onMouseEnter") {
      setColorSvgCycling("black");
      if (!cyclingIselected) {
        setColorSvgCycling("black");
      }
    } else if (event === "onMouseLeave") {
      if (!cyclingIselected) {
        setColorSvgCycling("white");
      }
    }
  };

  const filterTypesActivitiesChallenges = (typeActivityChallenge) => {
    if (typeActivityChallenge === "All races & challenges") {
      setActivities(activitiesChallenges);
      return;
    }

    const filteredActivitiesChallenges = activitiesChallenges.filter(
      (activityChallenge) =>
        activityChallenge.activityType == typeActivityChallenge
    );
    setActivities(filteredActivitiesChallenges);
  };

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
          .
        `}
      </style>

      <section className="bg-black w-full overflow-x-auto sm:px-10">
        <div className="flex space-x-4 p-4 sm:pl-10 sm:justify-center lg:justify-start md:justify-center pt-32 pt:mt-0">
          <div className="flex-shrink-0">
            <button
              className="bg-transparent border border-gray-300 rounded-10 hover:bg-white focus:bg-white hover:text-black text-white font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black"
              onClick={() => {
                filterTypesActivitiesChallenges("All races & challenges");
              }}
              key="All races & challenges"
            >
              All races & challenges
            </button>
          </div>

          <div className="flex-shrink-0">
            <button
              className="bg-transparent border border-gray-300 rounded-10 hover:text-black hover:bg-customYellow focus:bg-customYellow text-white font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black"
              onClick={() => {
                filterTypesActivitiesChallenges("Running");
              }}
              onMouseEnter={() => {
                changeColorRunning("onMouseEnter");
              }}
              onMouseLeave={() => {
                changeColorRunning("onMouseLeave");
              }}
              onFocus={() => {
                changeColorRunning("onFocus");
              }}
              onBlur={() => {
                changeColorRunning("onBlur");
              }}
              key="Running"
            >
              <svg
                className="group-632 ml-1 mr-1 w-5 h-5 transition-all duration-300 transform group-632-x"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9408 4.0491C16.0577 4.0491 16.9634 3.14148 16.9634 2.02423C16.9634 0.906675 16.0577 0 14.9408 0C13.821 0 12.914 0.90699 12.914 2.02423C12.914 3.14148 13.821 4.0491 14.9408 4.0491Z"
                  fill={svgColorRunning}
                />
                <path
                  d="M19.137 7.96852L15.7417 8.49825C15.2577 8.57339 14.7485 8.25106 14.6112 7.78068L13.6764 4.58459C13.5388 4.11452 13.0684 3.54911 12.6308 3.32844L7.99484 0.987562C7.55729 0.766891 6.81004 0.681654 6.33397 0.798145L2.26814 1.79353C1.79207 1.91002 1.40282 2.3662 1.40282 2.80723C1.40282 3.24825 1.79239 3.51564 2.26877 3.40136L5.82665 2.54836C6.30335 2.43407 7.03671 2.54678 7.4569 2.79839L8.60887 3.48818C9.02937 3.73979 9.03032 4.15335 8.61108 4.40748L5.04436 6.56683C4.62543 6.82097 4.08654 7.31408 3.84693 7.66387C3.60763 8.01271 4.52062 9.93403 4.73087 10.377L5.84212 12.7317C6.05206 13.1743 5.82286 13.5494 5.3329 13.5494H0.820996C0.331038 13.5494 -0.0373777 13.9361 0.00303118 14.4242L0.0608035 14.9975C0.100581 15.4862 0.534345 15.7589 1.02462 15.7589H8.88226C9.3719 15.7589 9.63045 15.5041 9.45682 15.0461L8.08071 11.4828C7.90645 11.0248 7.65452 10.2942 7.52098 9.82322L7.47489 9.67579C7.34104 9.20446 7.57781 8.6239 8.00084 8.37734L10.4759 6.93746C10.8989 6.69058 11.4669 6.38215 11.738 6.24956C12.0086 6.11728 12.3401 6.39541 12.4742 6.86706L13.3222 9.84279C13.456 10.3141 13.958 10.6153 14.4366 10.5118L19.1471 9.49206C19.6257 9.3882 20.0178 8.97243 20.0178 8.56739C20.0178 8.16235 19.6209 7.89307 19.137 7.96852Z"
                  fill={svgColorRunning}
                />
                <path
                  d="M6.32415 16.3903H4.42398C3.93371 16.3903 3.20603 16.5661 2.80605 16.8496L0.576614 18.4025C0.176944 18.6857 0.0822356 19.2302 0.365729 19.6302L0.807071 20.2452C1.09088 20.6449 1.63672 20.7184 2.01997 20.4135L6.51799 16.8906C6.90124 16.5857 6.81411 16.3903 6.32415 16.3903Z"
                  fill={svgColorRunning}
                />
              </svg>
              Running
            </button>
          </div>

          <div className="flex-shrink-0">
            <button
              className="bg-transparent border border-gray-300 rounded-10 hover:text-black hover:bg-customPink focus:bg-customPink text-white font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black"
              onClick={() => {
                filterTypesActivitiesChallenges("Cycling");
              }}
              onMouseEnter={() => {
                changeColorCycling("onMouseEnter");
              }}
              onMouseLeave={() => {
                changeColorCycling("onMouseLeave");
              }}
              onFocus={() => {
                changeColorCycling("onFocus");
              }}
              onBlur={() => {
                changeColorCycling("onBlur");
              }}
              key="Cycling"
            >
              <svg
                className="group-632 w-5 h-5 ml-1 mr-1 transition-all duration-300 transform group-632-x"
                viewBox="0 0 26 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8961 9.06446C17.4852 8.32662 17.1119 7.63137 16.7073 6.95491C16.6158 6.80083 16.4217 6.61292 16.2676 6.60666C15.4433 6.57284 14.6178 6.59037 13.5906 6.59037C14.6153 7.5324 15.5097 8.35292 16.3816 9.1534C14.9159 10.6015 13.5993 11.9043 12.2414 13.246C12.4281 12.0208 11.8606 10.7168 12.7049 9.54424C12.299 9.17845 11.8932 8.81141 11.4911 8.44813C11.4911 10.9448 11.4911 13.4852 11.4911 16.1184C11.0902 16.0846 10.7106 16.052 10.3273 16.0182C8.35053 19.6498 4.54859 19.621 2.53675 18.2969C0.0263443 16.6433 -0.74156 13.4602 0.779217 10.9711C2.51421 8.12869 5.53948 7.6702 9.14349 9.76346C9.14349 8.73249 9.14349 7.74787 9.14349 6.76325C9.14349 6.22333 9.14349 5.68217 9.14349 5.14225C9.146 4.0286 9.79865 3.28575 10.9211 3.25694C12.5421 3.2156 14.1656 3.2131 15.7866 3.2607C16.7261 3.28826 17.3412 3.91335 17.7758 4.68502C18.3872 5.76986 18.9659 6.87223 19.5371 7.97962C19.7 8.2953 19.8704 8.4143 20.2549 8.39176C23.1888 8.22515 25.5864 10.247 25.9597 13.167C26.3005 15.8391 24.444 18.3971 21.7156 19.0147C19.333 19.5533 16.7599 18.2605 15.7277 16.0044C14.6566 13.6644 15.3419 10.9698 17.4013 9.42649C17.5491 9.31374 17.6994 9.20726 17.8961 9.06446ZM9.15226 13.7207C9.14474 11.6575 7.43732 9.9664 5.37287 9.97767C3.30717 9.9902 1.62729 11.6914 1.63606 13.7646C1.64483 15.8391 3.33723 17.5114 5.41546 17.4989C7.49369 17.4864 9.15853 15.8015 9.15226 13.7207ZM18.7542 10.5026C17.1432 11.4296 16.4668 13.2572 17.0543 14.9922C17.6168 16.6558 19.3192 17.6855 21.1406 17.4638C22.8205 17.2596 24.2172 15.7814 24.35 14.0652C24.4928 12.2325 23.3804 10.6266 21.5928 10.1117C21.3122 10.0303 21.0103 10.0215 20.6696 9.97266C20.7523 10.2357 20.8061 10.4061 20.8625 10.5902C20.1272 11.0086 19.4382 11.1389 18.7542 10.5026Z"
                  fill={svgColorCycling}
                />
                <path
                  d="M21.7531 2.16842C21.7456 3.34972 20.7798 4.30553 19.6023 4.29676C18.421 4.28799 17.4839 3.32968 17.4865 2.13335C17.489 0.958316 18.4573 0 19.6386 0C20.7986 0.0012527 21.7607 0.987127 21.7531 2.16842Z"
                  fill={svgColorCycling}
                />
              </svg>
              Cycling
            </button>
          </div>
        </div>
      </section>

      <section className="bg-black flex justify-center flex-row flex-wrap pb-4 sm:px-16 lg:justify-start">
        {activities.map((activite) => (
          <ChallengeCard key={activite.id} activiteChallenge={activite} />
        ))}
      </section>
    </>
  );
}

export default ChallengeCardList;
