import React, { useEffect } from 'react';

export default function Weather() {
    // API

  const weather = async (city) => {
    try {
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_KEY_APP}`;

        const response = await fetch(url); // Guarda petición
      
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Transforma data en JSON
      console.log(data);

    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  }

  useEffect(() => {
    weather('London', 'UK'); // Llama a la función weather con un ejemplo de ciudad y país
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
    </div>
  );
}
