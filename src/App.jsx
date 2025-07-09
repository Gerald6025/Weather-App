import React, { useState } from 'react';

const api = {
  key: "5d00fd8bc918521585483bae2ccd3739",
  base: "https://api.openweathermap.org/data/2.5/weather",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className=' bg-center bg-cover h-[100vh]'
    style={{backgroundImage: `url('/pexels-pixabay-531756.jpg')` }} >
      <div className='bg-[#0000007e] h-[100vh] w-full flex flex-col justify-center items-center gap-20 pt-10 text-white'>
      <header className='text-5xl'>
        <h1>Weather App</h1>
      </header>

      <div>
        <input
          type="text"
          placeholder='Enter Your City/Town'
          onChange={(e) => setSearch(e.target.value)}
          className='border-2 p-1 rounded-l-2xl '
        />
        <button onClick={searchPressed}  className='border-2 p-1 px-2 rounded-r-2xl'>Search</button>
      </div>

      <div className='location text-3xl'>
        <p>{weather.name}</p>
      </div>

      <div className='temp text-3xl'>
        <p>{weather.main?.temp}°C</p>
      </div>

      <div className='condition text-3xl'>
       
        <p>{weather.weather?.[0]?.description}</p>
      </div>
    </div>
    </div>
  );
}

export default App;
