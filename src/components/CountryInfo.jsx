import Button from "./Button"
import EachCountryDetails from "./EachCountryDetails"
import WeatherDetails from "./WeatherDetails"
const CountryInfo = ({country,onCountryDetailsBack}) =>{
    return(
        <>
        <h3>
            Country Details
        </h3>
        <ul>
            <li>
                <h4>Name : {country.name.common}</h4>
            </li>
            <li>
                <EachCountryDetails country={country}/>
            </li>
            <li>
                <h4>Flag:</h4> 
                <img src={country.flags.png} alt={country.flags.alt}/>
            </li>
            <li>    
                <WeatherDetails/>
            </li>
        </ul>
        
        <button onClick={onCountryDetailsBack}>
            Back
        </button>
        </>
    )
}

export default CountryInfo