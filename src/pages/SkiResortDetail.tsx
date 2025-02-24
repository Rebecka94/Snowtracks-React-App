import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getWeather, WeatherData } from "../api";
import { skidorter } from "../data";

export default function SkiResortDetail() {
  const { id } = useParams();
  const skiResort = skidorter.find((resort) => resort.id === Number(id));

  const [weather, setWeather] = useState<WeatherData>();

  useEffect(() => {
    if (skiResort) {
      getWeather(skiResort.namn).then((data) => {
        setWeather(data);
      });
    }
  }, [skiResort]);

  if (!skiResort) {
    return <h2>Skidorten finns inte</h2>;
  }

  return (
    <div>
      <h2>{skiResort.namn}</h2>
      <p>Land: {skiResort.land}</p>
      <p>Kontinent: {skiResort.kontinent}</p>

      {weather && (
        <div>
          <h3>Väderinformation</h3>
          <p>Temperatur: {weather.main.temp}°C</p>
          <p>Väder: {weather.weather[0].description}</p>
          <p>Vindhastighet: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
