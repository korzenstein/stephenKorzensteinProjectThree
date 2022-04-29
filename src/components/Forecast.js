const Forecast = ({weather}) => {
    return (
        <div className="weatherContainer">
            <h4>Current Weather</h4>

            { weather.loading ? 
            <>
            <p>{Math.round((weather.main.temp)-273.15)} C</p>
            <p>{weather.name}</p>
            <p>{weather.weather[0].description}</p>
            <p>{weather.wind.deg}</p>
            <p>{weather.wind.speed}</p>
            </>
            : <p></p>
        }
            
            
        </div>
    )
}

export default Forecast