interface Props {
  countryCode: string;
  country: string;
}

const CountryFlag = ({ countryCode, country }: Props) => {
  const jsDelivr =
    "https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG";
  const role = "img";
  const size = 20;

  const flagSrc = `${jsDelivr}/${countryCode}.svg`;

  return (
    <img src={flagSrc} role={role} alt={country} height={size} width={size} />
  );
};

export default CountryFlag;
