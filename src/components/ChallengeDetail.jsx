import { useState } from "react";

function ChallengeDetail() {
  const [showDatail, setShowDetail] = useState(true);
  const [svgColorDetail, setColorSvgDetail] = useState("white");
  const [detailIselected, setDetailIselected] = useState(false);
  const [svgColorParcipant, setColorSvgParcipant] = useState("white");
  const [parcipantIselected, setParcipantIselected] = useState(false);

  const changeColorDetail = (event) => {
    if (event === "onFocus") {
      setDetailIselected(true);
      setColorSvgDetail("black");
    } else if (event === "onBlur") {
      setDetailIselected(false);
      setColorSvgDetail("white");
    } else if (event === "onMouseEnter") {
      setColorSvgDetail("black");
      if (!detailIselected) {
        setColorSvgDetail("black");
      }
    } else if (event === "onMouseLeave") {
      if (!detailIselected) {
        setColorSvgDetail("white");
      }
    }
  };

  const changeColorParcipant = (event) => {
    if (event === "onFocus") {
      setParcipantIselected(true);
      setColorSvgParcipant("black");
    } else if (event === "onBlur") {
      setParcipantIselected(false);
      setColorSvgParcipant("white");
    } else if (event === "onMouseEnter") {
      setColorSvgParcipant("black");
      if (!parcipantIselected) {
        setColorSvgParcipant("black");
      }
    } else if (event === "onMouseLeave") {
      if (!parcipantIselected) {
        setColorSvgParcipant("white");
      }
    }
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
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

      <section className="bg-black w-full overflow-x-auto pt-0 px-4 md:px-14">
        <div className="flex space-x-4  sm:justify-center lg:justify-start md:justify-center">
          <div className="flex-shrink-0">
            <button
              className="bg-transparent border border-gray-300 rounded-10 hover:text-black hover:bg-white focus:bg-white text-white font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black"
              onClick={() => {
                setShowDetail(true);
              }}
              onMouseEnter={() => {
                changeColorDetail("onMouseEnter");
              }}
              onMouseLeave={() => {
                changeColorDetail("onMouseLeave");
              }}
              onFocus={() => {
                changeColorDetail("onFocus");
              }}
              onBlur={() => {
                changeColorDetail("onBlur");
              }}
              key="details"
            >
              <svg
                className="group-632 w-5 h-5 ml-1 mr-1 transition-all duration-300 transform group-632-x"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.668734 14.1736L0.668735 14.1736C0.866538 14.4911 1.16924 14.65 1.5545 14.65H16.4452C16.8304 14.65 17.1331 14.4911 17.3309 14.1736L17.2036 14.0943L17.3309 14.1736C17.4272 14.0192 17.4806 13.8571 17.4831 13.6891C17.4856 13.5211 17.4371 13.3575 17.3454 13.2003L17.3448 13.1992L9.90077 0.680554C9.90054 0.680151 9.90031 0.679749 9.90008 0.679347C9.71006 0.34734 9.40054 0.183374 8.99984 0.183374C8.59912 0.183374 8.2896 0.347347 8.09958 0.679368L0.654894 13.1992L0.654889 13.1992L0.654234 13.2003C0.562616 13.3575 0.514088 13.5211 0.516596 13.6891C0.519104 13.8571 0.57249 14.0192 0.668734 14.1736ZM8.11679 4.06146V12.9801H2.81253L8.11679 4.06146ZM9.88288 4.06146L15.1871 12.9801H9.88288V4.06146Z"
                  fill={svgColorDetail}
                  stroke="#161616"
                  strokeWidth="0.3"
                />
              </svg>
              Challenge details
            </button>
          </div>

          <div className="flex-shrink-0">
            <button
              className="bg-transparent border border-gray-300 rounded-10 hover:text-black hover:bg-white focus:bg-white text-white font-bold py-1 px-3 rounded-full inline-flex items-center focus:text-black"
              onClick={() => {
                setShowDetail(false);
              }}
              onMouseEnter={() => {
                changeColorParcipant("onMouseEnter");
              }}
              onMouseLeave={() => {
                changeColorParcipant("onMouseLeave");
              }}
              onFocus={() => {
                changeColorParcipant("onFocus");
              }}
              onBlur={() => {
                changeColorParcipant("onBlur");
              }}
              key="Participant"
            >
              <svg
                className="group-632 w-5 h-5 ml-1 mr-1 transition-all duration-300 transform group-632-x"
                viewBox="0 0 26 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 16.4423V14.9423H16.625V16.4423H3.5ZM5.4327 12.75V11.25H18.5576V12.75H5.4327ZM7.375 9.05771V7.55774H20.5V9.05771H7.375Z"
                  fill={svgColorParcipant}
                />
              </svg>
              Participants and times
            </button>
          </div>
        </div>
      </section>

      {showDatail ? (
        <section className="bg-black w-full text-white px-4 md:px-14 lg:flex lg:flex-row md:flex-col pt-12">
          <div className="lg:w-8/12 lg:flex-grow-3 lg:border-r lg:border-opacity-25 lg:border-white lg:pb-0 pb-11 lg:pr-16 border-opacity-25 border-b lg:border-b-0 border-white">
            <h1 className="box-border text-left font-semibold text-white text-lg font-poppins pb-3">
              Description:
            </h1>
            <p className="font-normal text-base font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
              <br />
              <br />
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
              <br />
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <div className="flex lg:flex-row flex-col lg:items-center items-start lg:justify-between justify-between lg:gap-0 gap-8 pt-8 lg:pr-24">
              <div>
                <h2>Entry fee:</h2>
                <p>$ 3,00 USD</p>
              </div>

              <div>
                <h2>Pot:</h2>
                <p>500,00 USD</p>
              </div>

              <div>
                <h2>Participants:</h2>
                <p>14</p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:pl-16 w-full lg:w-1/3">
            <h1 className="box-border text-left font-semibold text-white text-lg font-poppins pb-3">
              Rewards
            </h1>

            <div className="w-full">
              <h2 className="text-white text-left font-semibold text-16 font-poppins">
                Category N°1
              </h2>
              <p className="text-white text-left font-normal text-xs font-poppins">
                Category description
              </p>
              <div className="flex flex-row items-center gap-3">
                <svg
                  className="emoji-events-fill-0-wght-400-grad-0-opsz-24-1"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 39.3751V35.6251H20.625V29.8126C19.0938 29.4688 17.7266 28.8204 16.5235 27.8672C15.3203 26.9141 14.4375 25.7188 13.875 24.2813C11.5313 24 9.57032 22.9766 7.99219 21.211C6.41406 19.4453 5.625 17.375 5.625 15V13.125C5.625 12.0938 5.99219 11.2109 6.72657 10.4766C7.46094 9.7422 8.34376 9.37501 9.37501 9.37501H13.125V5.625H31.8751V9.37501H35.6251C36.6563 9.37501 37.5391 9.7422 38.2735 10.4766C39.0079 11.2109 39.3751 12.0938 39.3751 13.125V15C39.3751 17.375 38.586 19.4453 37.0079 21.211C35.4298 22.9766 33.4688 24 31.1251 24.2813C30.5626 25.7188 29.6797 26.9141 28.4766 27.8672C27.2735 28.8204 25.9063 29.4688 24.375 29.8126V35.6251H31.8751V39.3751H13.125ZM13.125 20.25V13.125H9.37501V15C9.37501 16.1875 9.71876 17.2578 10.4063 18.211C11.0938 19.1641 12 19.8438 13.125 20.25ZM22.5 26.25C24.0625 26.25 25.3907 25.7032 26.4844 24.6094C27.5782 23.5157 28.125 22.1875 28.125 20.625V9.37501H16.875V20.625C16.875 22.1875 17.4219 23.5157 18.5157 24.6094C19.6094 25.7032 20.9375 26.25 22.5 26.25ZM31.8751 20.25C33.0001 19.8438 33.9063 19.1641 34.5938 18.211C35.2813 17.2578 35.6251 16.1875 35.6251 15V13.125H31.8751V20.25Z"
                    fill="white"
                  />
                </svg>{" "}
                <span className="text-white font-bold text-3xl font-poppins">
                  $100,00
                </span>{" "}
                <span className="text-white font-medium italic text-xs font-poppins">
                  USD
                </span>
              </div>
            </div>

            <div className="my-6 border border-opacity-25 border-white w-40"></div>

            <div className="w-full">
              <h2 className="text-white text-left font-semibold text-16 font-poppins">
                Category N°2
              </h2>
              <p className="text-white text-left font-normal text-xs font-poppins">
                Category description
              </p>
              <div className="flex flex-row items-center gap-3">
                <svg
                  className="emoji-events-fill-0-wght-400-grad-0-opsz-24-1"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 39.3751V35.6251H20.625V29.8126C19.0938 29.4688 17.7266 28.8204 16.5235 27.8672C15.3203 26.9141 14.4375 25.7188 13.875 24.2813C11.5313 24 9.57032 22.9766 7.99219 21.211C6.41406 19.4453 5.625 17.375 5.625 15V13.125C5.625 12.0938 5.99219 11.2109 6.72657 10.4766C7.46094 9.7422 8.34376 9.37501 9.37501 9.37501H13.125V5.625H31.8751V9.37501H35.6251C36.6563 9.37501 37.5391 9.7422 38.2735 10.4766C39.0079 11.2109 39.3751 12.0938 39.3751 13.125V15C39.3751 17.375 38.586 19.4453 37.0079 21.211C35.4298 22.9766 33.4688 24 31.1251 24.2813C30.5626 25.7188 29.6797 26.9141 28.4766 27.8672C27.2735 28.8204 25.9063 29.4688 24.375 29.8126V35.6251H31.8751V39.3751H13.125ZM13.125 20.25V13.125H9.37501V15C9.37501 16.1875 9.71876 17.2578 10.4063 18.211C11.0938 19.1641 12 19.8438 13.125 20.25ZM22.5 26.25C24.0625 26.25 25.3907 25.7032 26.4844 24.6094C27.5782 23.5157 28.125 22.1875 28.125 20.625V9.37501H16.875V20.625C16.875 22.1875 17.4219 23.5157 18.5157 24.6094C19.6094 25.7032 20.9375 26.25 22.5 26.25ZM31.8751 20.25C33.0001 19.8438 33.9063 19.1641 34.5938 18.211C35.2813 17.2578 35.6251 16.1875 35.6251 15V13.125H31.8751V20.25Z"
                    fill="white"
                  />
                </svg>{" "}
                <span className="text-white font-bold text-3xl font-poppins">
                  $100,00
                </span>{" "}
                <span className="text-white font-medium italic text-xs font-poppins">
                  USD
                </span>
              </div>
            </div>

            <div className="my-6 border border-opacity-25 border-white w-40"></div>

            <div className="w-full">
              <h2 className="text-white text-left font-semibold text-16 font-poppins">
                Category N°3
              </h2>
              <p className="text-white text-left font-normal text-xs font-poppins">
                Category description
              </p>
              <div className="flex flex-row items-center gap-3">
                <svg
                  className="emoji-events-fill-0-wght-400-grad-0-opsz-24-1"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 39.3751V35.6251H20.625V29.8126C19.0938 29.4688 17.7266 28.8204 16.5235 27.8672C15.3203 26.9141 14.4375 25.7188 13.875 24.2813C11.5313 24 9.57032 22.9766 7.99219 21.211C6.41406 19.4453 5.625 17.375 5.625 15V13.125C5.625 12.0938 5.99219 11.2109 6.72657 10.4766C7.46094 9.7422 8.34376 9.37501 9.37501 9.37501H13.125V5.625H31.8751V9.37501H35.6251C36.6563 9.37501 37.5391 9.7422 38.2735 10.4766C39.0079 11.2109 39.3751 12.0938 39.3751 13.125V15C39.3751 17.375 38.586 19.4453 37.0079 21.211C35.4298 22.9766 33.4688 24 31.1251 24.2813C30.5626 25.7188 29.6797 26.9141 28.4766 27.8672C27.2735 28.8204 25.9063 29.4688 24.375 29.8126V35.6251H31.8751V39.3751H13.125ZM13.125 20.25V13.125H9.37501V15C9.37501 16.1875 9.71876 17.2578 10.4063 18.211C11.0938 19.1641 12 19.8438 13.125 20.25ZM22.5 26.25C24.0625 26.25 25.3907 25.7032 26.4844 24.6094C27.5782 23.5157 28.125 22.1875 28.125 20.625V9.37501H16.875V20.625C16.875 22.1875 17.4219 23.5157 18.5157 24.6094C19.6094 25.7032 20.9375 26.25 22.5 26.25ZM31.8751 20.25C33.0001 19.8438 33.9063 19.1641 34.5938 18.211C35.2813 17.2578 35.6251 16.1875 35.6251 15V13.125H31.8751V20.25Z"
                    fill="white"
                  />
                </svg>{" "}
                <span className="text-white font-bold text-3xl font-poppins">
                  $100,00
                </span>{" "}
                <span className="text-white font-medium italic text-xs font-poppins">
                  USD
                </span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between pb-4">
            <div>
              <button
                id="dropdownRadioButton"
                data-dropdown-toggle="dropdownRadio"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <svg
                  className="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                </svg>
                Last 30 days
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownRadio"
                className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
                style={{
                  position: "absolute",
                  inset: "auto auto 0px 0px",
                  margin: "0px",
                  transform: "translate3d(522.5px, 3847.5px, 0px)",
                }}
              >
                <ul
                  className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownRadioButton"
                >
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-1"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="filter-radio-example-1"
                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        Last day
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="filter-radio-example-2"
                        type="radio"
                        value=""
                        name="filter-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        checked={selectedOption === ""}
                        onChange={handleRadioChange}
                      />
                      <label
                        htmlFor="filter-radio-example-2"
                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        Last 7 days
                      </label>
                    </div>
                  </li>
                  {/* Otros elementos li aquí */}
                </ul>
              </div>
            </div>
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" classNamess="px-6 py-3">
                  Product name
                </th>
                <th scope="col" classNamess="px-6 py-3">
                  Color
                </th>
                <th scope="col" classNamess="px-6 py-3">
                  Category
                </th>
                <th scope="col" classNameass="px-6 py-3">
                  Price
                </th>
                <th scope="col" classNames="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr classNameass="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td classNamess="px-6 py-4">
                  <a
                    href="#"
                    classNamess="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr classNames="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    classNameass="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      )}

      <section className="bg-black flex justify-center pt-16 pb-32">
        <button className="hidden lg:block text-white font-semibold text-base font-poppins bg-[#0054ff] rounded-md pt-3 px-8 pb-2">
          I want to participate in this challenge
        </button>
        <button className="block lg:hidden text-white font-semibold text-base font-poppins bg-[#0054ff] rounded-md pt-3 px-6 pb-2">
          Participate in this challenge
        </button>
      </section>
    </>
  );
}

export default ChallengeDetail;
