import EachCountry from "./EachCountry";

const CountryList = ({ countries, handleShowCountryDetails }) => {
  if (countries.length === 0) {
    return (
      <>
        <p>Still Fetching data or Invalid Country filter</p>
      </>
    );
  } else {
    return (
      <>
        <h3>Countries :</h3>
        <div className="CountryList">
          {countries.map((country, i) => (
            <EachCountry
              key={i}
              country={country}
              handleShowCountryDetails={handleShowCountryDetails}
            />
          ))}
        </div>
      </>
    );
  }
};
export default CountryList;
