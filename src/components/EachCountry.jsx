import Button from "./Button"

const EachCountry = ({country,handleShowCountryDetails})=>{
    return(
        <div className="EachCountryBox">
        {country.name.common}
        <Button text={"Show"} handleShowCountryDetails={handleShowCountryDetails} country={country}/>
        </div>
    )
}

export default EachCountry