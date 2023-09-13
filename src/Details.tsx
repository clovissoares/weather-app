import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"
import code from './codes';
import { FaArrowLeft } from 'react-icons/fa6'


interface weatherObject {
    latitude: number,
    longitude: number,
    generationtime_ms: number,
    utc_offset_seconds: number,
    timezone: string,
    timezone_abbreviation: string,
    elevation: number,
    daily_units: {
        time: string,
        weathercode: string,
        temperature_2m_max: string,
        temperature_2m_min: string,
        precipitation_probability_max: string,
        windspeed_10m_max: string
    },
    daily: {
        time: string[],
        weathercode: number[],
        temperature_2m_max: number[],
        temperature_2m_min: number[],
        precipitation_probability_max: number[],
        windspeed_10m_max: number[]
    }
}

export default function Details (){
    const [query] = useSearchParams();
    const [location, setLocation] = useState<weatherObject>();
    const navigate = useNavigate();

    const params = Object.fromEntries([...query]);

    useEffect(()=> {
        const getLocation = async () => {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${params.lat}&longitude=${params.long}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo`);
            return await response.json();
        }
        getLocation().then((data) => {
                setLocation(data);
            }).catch((err)=>{
                console.log(err);
            });
        console.log(`Location: ${location}`);
    }, []);

    return (
        <div className="bg-background min-h-screen h- text-primary p-10">
            <div className="flex items-baseline">
                <button className="mr-5 border-2 p-1 rounded-lg" onClick={()=>navigate('/')}><FaArrowLeft size={35}/></button>
                <h1 className="text-5xl font-bold mb-10">{params.name} - {params.country}</h1>
            </div>
            <div className="flex flex-wrap justify-between">
            {location?.daily.time.map((item, index)=>(
                index !== 0 && item ?
                    <div key={index} className="p-5 bg-button rounded-lg">
                        <div className="text-center border-b-2 pb-2 mb-2">
                            <p className="text-lg font-bold">
                                {location?.daily.time[index].replace("-","/").replace("-","/")}
                            </p>
                            <p className="font-light text-xs">Code: {location?.daily.weathercode[index]} ({code[location?.daily.weathercode[index]]})</p>
                        </div>
                        <p className="text-center text-sm font-bold">Temperature</p>
                        <div className="flex justify-between text-xs mb-2">
                            <p>Max: {location?.daily.temperature_2m_max[index]} C°</p>
                            <p>Min: {location?.daily.temperature_2m_min[index]} C°</p>
                        </div>
                        <p className="text-center text-sm font-bold">Wind Speed</p>
                        <p className="text-xs text-center mb-2">{location?.daily.windspeed_10m_max[index]} KM/H</p>
                        <p className="text-center text-sm font-bold">Precipitation probability</p>
                        <p className="text-center" >{location?.daily.precipitation_probability_max[index]} %</p>
                    </div>
                :
                    <div key={index} className="p-5 bg-button rounded-lg w-screen mb-10">
                        <div className="flex items-center pb-4 mb-1 border-b-2">
                        <p className="font-bold text-2xl mr-auto">
                            {
                               location?.daily.time[index].replace("-","/").replace("-","/")
                            }
                        </p>
                        <p className="text-2xl">Code: {location?.daily.weathercode[index]} ({code[location?.daily.weathercode[index]]})</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-center">
                                <p className="font-bold">Temperature </p>
                                <div className="flex">
                                    <p className="mr-10">Min: {location?.daily.temperature_2m_min[index]} C°</p>
                                    <p>Max: {location?.daily.temperature_2m_max[index]} C°</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p  className="font-bold">Wind max speed</p>
                                <p>{location?.daily.windspeed_10m_max[index]} KM/H</p>
                            </div>
                            <div className="text-center">
                                <p  className="font-bold">Precipitation probability</p>
                                <p>{location?.daily.precipitation_probability_max[index]} %</p>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    )
}