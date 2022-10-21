import React, {useState} from 'react';
import { Form } from 'react-bootstrap';


const WeatherPanel = () =>{
    let url = 'https://api.open-meteo.com/v1/forecast?';
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState([]);
    const [show, setShow] = useState([]);
    const [location, setLocation] = useState("");

    const getLocation = async (loc) =>{
        setLoading(true);
        setLocation(loc);
        //weather

        url = `${url}latitude=${loc.latitude}&longitude=${loc.longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
        await fetch(url).then((response)=>{
            if(!response.ok) throw {response}
            return response.json;
        }).then((weatherData) =>{
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        })
    
    }


    return(<React.Fragment>
        <Form
        newLocation = {getLocation}
        />
    </React.Fragment>)

}