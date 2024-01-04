const Button = ({handleShowCountryDetails,text,country})=>{
    return(
        <button onClick={()=>handleShowCountryDetails(country)}>
            {text}
        </button>
    )
}
export default Button