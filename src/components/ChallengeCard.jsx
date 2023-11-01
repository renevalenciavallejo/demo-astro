import running from "../assets/images/challenge-card-running.png";
import cycling from "../assets/images/challenge-card-cycling.png";
import { useTranslations } from "src/i18n/utils";
import ChallengeDate, { ChallengeDateFormat } from "@components/ChallengeDate";

function ImgChallenge({ activiteChallenge }) {
  if (activiteChallenge === "Running") {
    return (
      <svg
        className="pedal-bike-fill-0-wght-200-grad-0-opsz-24-1"
        width="26"
        height="20"
        viewBox="0 0 26 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.42605 18.125C4.04213 18.125 2.88208 17.6578 1.9459 16.7234C1.00972 15.7891 0.541626 14.6313 0.541626 13.25C0.541626 11.8958 1.01694 10.7378 1.96756 9.77605C2.91819 8.81423 4.06788 8.33332 5.41663 8.33332C6.65414 8.33332 7.73643 8.75207 8.66351 9.58958C9.59059 10.4271 10.125 11.4667 10.2666 12.7083H12.1791L9.85412 6.20833H8.66663C8.51315 6.20833 8.38451 6.15635 8.28069 6.05239C8.17687 5.94844 8.12496 5.81962 8.12496 5.66594C8.12496 5.51225 8.17687 5.38367 8.28069 5.28022C8.38451 5.17674 8.51315 5.125 8.66663 5.125H11.9166C12.0701 5.125 12.1987 5.17698 12.3026 5.28095C12.4064 5.38489 12.4583 5.51371 12.4583 5.6674C12.4583 5.82109 12.4064 5.94966 12.3026 6.05312C12.1987 6.15659 12.0701 6.20833 11.9166 6.20833H11.0166L11.7708 8.33332H18.1791L16.3583 3.33333C16.3166 3.20833 16.2472 3.11459 16.15 3.0521C16.0527 2.98959 15.9416 2.95833 15.8166 2.95833H14.0833C13.9298 2.95833 13.8012 2.90635 13.6974 2.80239C13.5935 2.69844 13.5416 2.56962 13.5416 2.41594C13.5416 2.26225 13.5935 2.13367 13.6974 2.03022C13.8012 1.92674 13.9298 1.875 14.0833 1.875H15.8166C16.1611 1.875 16.4757 1.97147 16.7604 2.16441C17.0451 2.35737 17.25 2.61923 17.375 2.94999L19.3416 8.32083H20.5833C21.932 8.32083 23.0817 8.79615 24.0324 9.74677C24.983 10.6974 25.4583 11.8471 25.4583 13.1958C25.4583 14.5508 24.9833 15.7041 24.0333 16.6558C23.0833 17.6075 21.9333 18.0833 20.5833 18.0833C19.3389 18.0833 18.2628 17.6736 17.3552 16.8542C16.4475 16.0347 15.9069 15.0139 15.7333 13.7917H10.2666C10.125 15.0375 9.58399 16.0712 8.64371 16.8927C7.70343 17.7142 6.63088 18.125 5.42605 18.125ZM5.41663 17.0417C6.32358 17.0417 7.12323 16.7552 7.81559 16.1823C8.50795 15.6094 8.95551 14.8125 9.1583 13.7917H6.49996C6.34649 13.7917 6.21784 13.7397 6.11402 13.6357C6.0102 13.5318 5.95829 13.403 5.95829 13.2493C5.95829 13.0956 6.0102 12.967 6.11402 12.8635C6.21784 12.7601 6.34649 12.7083 6.49996 12.7083H9.1583C8.95551 11.6833 8.50795 10.8854 7.81559 10.3146C7.12323 9.74375 6.32358 9.45833 5.41663 9.45833C4.34232 9.45833 3.4418 9.8217 2.71506 10.5484C1.98833 11.2752 1.62496 12.1757 1.62496 13.25C1.62496 14.2917 1.98833 15.184 2.71506 15.9271C3.4418 16.6701 4.34232 17.0417 5.41663 17.0417ZM13.3833 12.7083H15.7333C15.7958 12.2097 15.9802 11.6236 16.2864 10.95C16.5927 10.2764 17.0388 9.76528 17.625 9.41668H12.1541L13.3833 12.7083ZM20.5826 17.0417C21.6567 17.0417 22.5572 16.6701 23.2843 15.9271C24.0114 15.184 24.375 14.2889 24.375 13.2417C24.375 12.1736 24.0116 11.276 23.2849 10.549C22.5581 9.82187 21.6576 9.45833 20.5833 9.45833C20.4222 9.45833 20.2722 9.46181 20.1333 9.46876C19.9944 9.47569 19.8583 9.5 19.725 9.54167L20.6583 12.0354C20.7111 12.1715 20.7067 12.3072 20.6451 12.4424C20.5835 12.5776 20.4824 12.6732 20.3416 12.7292C20.2055 12.7819 20.0686 12.7775 19.9309 12.716C19.7931 12.6544 19.6967 12.5532 19.6416 12.4125L18.7625 9.92501C18.1375 10.2736 17.6527 10.7528 17.3083 11.3625C16.9639 11.9722 16.7916 12.6014 16.7916 13.25C16.7916 14.2917 17.1549 15.184 17.8815 15.9271C18.6081 16.6701 19.5085 17.0417 20.5826 17.0417Z"
          fill="#FFC3F5"
        />
      </svg>
    );
  } else if (activiteChallenge === "Cycling") {
    return (
      <svg
        className="steps-fill-0-wght-300-grad-0-opsz-24-3"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.49999 8.12499C5.0096 8.12499 5.49678 8.21821 5.96153 8.40464C6.42626 8.59107 6.84933 8.8611 7.23074 9.21472L15.0288 16.6666H15.8333C16.0694 16.6666 16.2673 16.5868 16.4271 16.4271C16.5868 16.2673 16.6667 16.0694 16.6667 15.8333C16.6667 15.7222 16.6562 15.6041 16.6354 15.4791C16.6146 15.3541 16.5417 15.2291 16.4167 15.1041L12.6042 11.2916L11.125 6.8333L9.07847 7.33651C8.67891 7.44335 8.31594 7.36883 7.98955 7.11297C7.66317 6.8571 7.49999 6.5251 7.49999 6.11699V3.85414L6.91665 3.56247L3.71634 7.84612C3.68108 7.89206 3.65276 7.93721 3.63138 7.98155C3.61002 8.02589 3.58972 8.0737 3.57049 8.12499H4.49999ZM4.49999 9.37495H3.47755C3.51387 9.50957 3.56595 9.63458 3.6338 9.74997C3.70163 9.86535 3.79058 9.97112 3.90063 10.0673L10.6667 16.2291C10.8194 16.3819 10.993 16.493 11.1875 16.5625C11.3819 16.6319 11.5833 16.6666 11.7917 16.6666H13.2132L6.3734 10.1186C6.12126 9.86642 5.83253 9.67945 5.50719 9.55766C5.18188 9.43585 4.84614 9.37495 4.49999 9.37495ZM11.7917 17.9166C11.4284 17.9166 11.082 17.8509 10.7524 17.7195C10.4228 17.5881 10.1197 17.3995 9.84297 17.1538L3.07213 11.008C2.51337 10.4941 2.1998 9.86695 2.13142 9.12658C2.06305 8.3862 2.25375 7.71153 2.70353 7.10255L5.91988 2.81089C6.09723 2.57158 6.33307 2.4132 6.6274 2.33574C6.92172 2.25828 7.20403 2.29273 7.47434 2.4391L8.06567 2.73076C8.2879 2.84615 8.4575 3.0024 8.57449 3.19951C8.69147 3.39662 8.74997 3.61483 8.74997 3.85414V6.14103L10.8125 5.60897C11.1277 5.52457 11.4289 5.5633 11.7163 5.72516C12.0037 5.88702 12.2008 6.12126 12.3077 6.42787L13.6939 10.5993L17.3077 14.2131C17.5427 14.4482 17.703 14.7014 17.7884 14.9727C17.8739 15.2441 17.9166 15.531 17.9166 15.8333C17.9166 16.4102 17.715 16.9017 17.3117 17.3076C16.9084 17.7136 16.4156 17.9166 15.8333 17.9166H11.7917Z"
          fill="#CAFF00"
        />
      </svg>
    );
  }
  return null;
}

function ChallengeCard({ challenge, baseUrl }) {
  const maxLength = 28;

  const { title, lang, activityType, startTime, endTime, entryFee, pot } =
    challenge.data;

  const { slug } = challenge;

  const truncatedTitle =
    title.length > maxLength ? title.substring(0, maxLength) + "..." : title;

  let activityImage = cycling.src;
  if (activityType === "Running") {
    activityImage = running.src;
  }

  const t = useTranslations(lang);
  const entryFeeString =
    entryFee > 0 ? ` $${entryFee} USD` : ` ${t("challenge-card.entryFeeFree")}`;

  const potString =
    pot !== null && pot > 0
      ? ` $${pot} USD`
      : ` ${t("challenge-card.potDynamic")}`;

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
                  {`${t("challenge-card.date")}: `}
                </span>
                <ChallengeDate
                  date={startTime}
                  lang={lang}
                  dateFormat={ChallengeDateFormat.Basic}
                  client:load
                />
                {` - `}
                <ChallengeDate
                  date={endTime}
                  lang={lang}
                  dateFormat={ChallengeDateFormat.Basic}
                  client:load
                />
              </li>
              <li className="my-1 text-xs font-medium">
                <span className="font-bold">
                  {t("challenge-card.entryFee")}:
                </span>
                {entryFeeString}
              </li>
              <li className="my-1 text-xs font-medium">
                <span className="font-bold">{t("challenge-card.pot")}:</span>
                {potString}
              </li>
            </ul>
          </div>
          <div>
            <a
              id="btn-challenge-detail-challenge-card"
              href={`${baseUrl}/${slug}`}
              className="block px-7 py-1.5 text-base font-semibold rounded-md bg-cobalt_blue_600 text-white text-center"
            >
              {t("challenge-card.button")}
            </a>
          </div>
        </article>
      </div>
    </>
  );
}

export default ChallengeCard;
