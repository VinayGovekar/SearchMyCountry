import CountryInfo from "./CountryInfo"
import CountryList from "./CountryList"
const CountryBodyDetails = ({countries,handleShowCountryDetails,countryToShow,onCountryDetailsBack})=>{
    if(countryToShow===null){
        return(
            <>
            <CountryList countries={countries}
            handleShowCountryDetails={handleShowCountryDetails}
            />
            </>
        )
    }
    return(
        <>
        <CountryInfo country={countryToShow[0]} onCountryDetailsBack={onCountryDetailsBack}/>
        </>
    )
}
export default CountryBodyDetails