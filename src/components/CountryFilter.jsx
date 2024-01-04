const CountryFilter = ({countrySearchFilterValue,onCountrySearchFilterChange}) =>{
    return(
        <>
        <h3>
            Search Countries:
        </h3>
        <input type="text" 
        value={countrySearchFilterValue} 
        onChange={onCountrySearchFilterChange}
        />
        </>
    )
}
export default CountryFilter