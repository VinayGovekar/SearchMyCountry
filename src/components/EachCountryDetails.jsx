import DetailLineItem from "./DetailLineItem"

const EachCountryDetails = ({country})=>{
    return(
        <>
        <b>Details:</b>
        <table>
            <tbody>
            <DetailLineItem label={"Capital"} value={country.capital[0]}/>
            <DetailLineItem label={"Region"} value={country.region}/>
            <DetailLineItem label={"Area"} value={country.area}/>
            <DetailLineItem label={"Population"} value={country.population}/>
            <DetailLineItem label={"Lat Long"} value={country.latlng[0] + "/" +country.latlng[1]}/>
            </tbody>
        </table>
        </>
    )
}

export default EachCountryDetails