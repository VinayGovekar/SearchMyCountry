const CountryFilter = ({countrySearchFilterValue,onCountrySearchFilterChange}) =>{
    return(
        <>
        <h3>
            <span className="SearchCountriesTitle">
                Search Countries:
            </span>
        </h3>
        <input className="SearchCountriesInput" type="search" placeholder="Search..."  
            value={countrySearchFilterValue} 
            onChange={onCountrySearchFilterChange}
        />
        
        </>
    )
}
export default CountryFilter