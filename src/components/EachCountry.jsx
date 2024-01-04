import Button from "./Button"

const EachCountry = ({country,handleShowCountryDetails})=>{
    return(
        <>
        <tr>
            <td>{country.name.common}</td>
            <td><Button text={"Show"} handleShowCountryDetails={handleShowCountryDetails} country={country}/></td>
        </tr>
        
        </>
    )
}

export default EachCountry