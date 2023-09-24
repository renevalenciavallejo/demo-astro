import running from "../assets/images/challenge-card-running.png";
import cycling from "../assets/images/challenge-card-cycling.png";
import { format } from "date-fns";
import { useTranslations } from "src/i18n/utils";

function ChallengeCard({ challenge, baseUrl }) {
  const maxLength = 28;

  const { title, lang, activityType, startTime, endTime, participants } =
    challenge.data;

  const { slug } = challenge;

  const truncatedTitle =
    title.length > maxLength ? title.substring(0, maxLength) + "..." : title;

  let activityImage = cycling.src;
  if (activityType === "Running") {
    activityImage = running.src;
  }

  const t = useTranslations(lang);

  return (
    <>
      <div className="flex flex-col justify-between text-white text-base font-poppins">
        <article className="flex flex-col justify-between mb-1 min-[360px]:w-[21.375rem] md:w-[22.5rem] h-[13.875rem] m-3 p-5 text-shadow_gray_800 bg-white rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-[1.5rem] min-[360px]:text-[1.75rem] leading-[1.875rem] font-bold italic">
              {truncatedTitle}
            </h2>
            <img src={activityImage} alt={activityType} />
          </div>
          <div>
            <ul>
              <li className="my-1 text-xs font-medium">
                <span className="font-bold">
                  {t("challenge-card.startTime")}:
                </span>
                {format(startTime, " MMM d, yyyy h:mm:ss aa")}
              </li>
              <li className="my-1 text-xs font-medium">
                <span className="font-bold">
                  {t("challenge-card.endTime")}:
                </span>
                {format(endTime, " MMM d, yyyy h:mm:ss aa")}
              </li>
            </ul>
          </div>
          <div>
            <a
              href={`${baseUrl}/${slug}`}
              className="block px-7 py-1.5 text-base font-semibold rounded-md bg-cobalt_blue_600 text-white text-center"
            >
              {t("challenge-card.button")}
            </a>
          </div>
        </article>

        <aside className="flex justify-center mb-4 pb-4">
          {/*<ImgChallenge activiteChallenge={activityType} className="" />
                <label className="font-medium text-base leading-normal font-poppins ml-2">{participants} Cyclists participating</label>*/}
        </aside>
      </div>
    </>
  );
}

export default ChallengeCard;
