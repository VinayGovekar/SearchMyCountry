import { useEffect, useState } from "react"
import CountryFilter from "./CountryFilter"

import countryService from '../services/countriesService'
import CountryBodyDetails from "./CountryBodyDetails"


let defaultCountries = []
const CountryBody =()=>{
    const [countries,setCountries] = useState(defaultCountries)
    const [countrySearchFilterValue,setCountrySearchFilterValue] = useState("")
    const [countryToShow,setCountryToShow] =useState(null)

    let hook = ()=>{
        countryService.GetAll().then(newCountries=>{
            defaultCountries=newCountries
            setCountries(newCountries)
        })
    }

    useEffect(hook,[])

    const onCountrySearchFilterChange = (event)=>{
        var newFilterValue = event.target.value
        if(newFilterValue!==""){
            setCountrySearchFilterValue(newFilterValue)
            var filteredCountries = countries
                                    .filter(country=>
                                    country.name.common.toLowerCase().includes(newFilterValue.toLowerCase()))
            setCountries(filteredCountries)
        }
        else{
            setCountries(defaultCountries)
            setCountrySearchFilterValue("")
        }
        
    }

    const handleShowCountryDetails =(showCounty)=>{
        console.log(`Clicked on show for ${showCounty.name.common}`)
        setCountryToShow(countries.filter(country=>country.name.common===showCounty.name.common))
    }

    const onCountryDetailsBack = () => setCountryToShow(null)
    return(
        <>
        <CountryFilter 
        countrySearchFilterValue={countrySearchFilterValue}
        onCountrySearchFilterChange={onCountrySearchFilterChange}/>
    
        <CountryBodyDetails countries={countries} 
        handleShowCountryDetails={handleShowCountryDetails} 
        countryToShow={countryToShow} 
        onCountryDetailsBack={onCountryDetailsBack}/>
        </>
    )
}
export default CountryBody