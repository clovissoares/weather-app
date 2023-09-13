import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass, FaLocationCrosshairs } from 'react-icons/fa6';
import flags from './flags';

interface CountryObject {
        results: [
            {
                id: number,
                name: string,
                latitude: number,
                longitude: number,
                country_code: string,
                timezone: string,
                country: string,
                admin1: string,
            }
        ],
        generationtime_ms: number
    }

export default function Home() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState<CountryObject>();

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition( position => {
        navigate({
            pathname:`/details`,
            search: `?lat=${position.coords.latitude}&long=${position.coords.longitude}`
        });
    })
  }

  const getCountryLocation = (lat:number, long:number, country:string, name:string) => {
    navigate({
        pathname:`/details`,
        search: `?lat=${lat}&long=${long}&country=${country}&name=${name}`
    });
  }

    useEffect(()=> {
        const getCountry = async () => {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`);
            return await response.json();
        }

        getCountry().then((data) => {
            setCountry(data);
        }).catch((err)=>{
            console.log(err);
        });

        console.log(country);
    }, [location]);

  return (
    <div className="bg-background min-h-screen h-max flex flex-col items-center">
        <h1 className="text-primary font-black font-sans mt-52 mb-10 text-5xl">Weather App</h1>
        <div className='text-primary rounded-lg bg-button flex items-center justify-start w-3/12 mb-10'>
            <FaMagnifyingGlass className="ml-3" size={25}/>
            <input 
            className="placeholder:text-primary w-full placeholder:font-sans placeholder:text-lg text-primary font-bold border-none outline-none p-2 bg-transparent" 
            type="text" 
            name="location" 
            id="location" 
            placeholder="Location" 
            onChange={(event)=>{
            setLocation(event.target.value);
            }}
            />
            <button onClick={getLocation} className='mr-2'><FaLocationCrosshairs size={25}/></button>
        </div>
        { 
        location === "" ? <></> :
        <div className='grid gap-3 grid-cols-4 mx-28'>
            {country?.results === undefined ? <></>: 
            <>
                {country?.results.map((value)=>(
                <button
                key={value.id} 
                className='flex items-center w-64 justify-center p-10 bg-button rounded-lg text-primary'
                onClick={
                    (event) => {
                        event.preventDefault();
                        getCountryLocation(
                            value.latitude,
                            value.longitude,
                            value.country,
                            value.name);
                    }
                }
                >
                    <img 
                    src={
                        value.country_code === "IN" ? 
                            flags.ins:
                        flags[
                            value.country_code.toLowerCase()
                        ]}
                    className='h-16 mr-5'
                    alt="" />
                    <div>
                        <p>{value.name}</p>
                        <p>{value.country}</p>
                    </div>
                </button>
            ))}</>}
        </div>
        }
    </div>
  );
};