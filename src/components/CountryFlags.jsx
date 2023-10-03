import Flag from "react-flagkit";

function CountryFlag({ countryName, countryAbbreviation }) {
  return (
    <div className="flex gap-2 px-px items-center flex-row">
      <Flag country={countryAbbreviation} size={20} />
      <h3>{countryName}</h3>
    </div>
  );
}

export default CountryFlag;
