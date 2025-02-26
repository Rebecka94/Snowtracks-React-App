import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { getWeather, WeatherData } from "../api";
import { skidorter } from "../data";

const Container = styled.div`
display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: auto;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


const WeatherInfo = styled.div`
  padding: 10px;
  border-radius: 8px;
`;

const WeatherIcon = styled.img`
  width: 90px;
  height: 90px;
`;

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
    <Container>
      <h3>Väderinformation</h3>
      <TitleWrapper>
        <h2>{skiResort.namn}</h2>
        {weather && (
          <WeatherIcon
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        )}
      </TitleWrapper>
      {weather && (
        <WeatherInfo>
          <div>
            <p>Temperatur: {weather.main.temp}°C</p>
            <p>Väder: {weather.weather[0].description}</p>
            <p>Vindhastighet: {weather.wind.speed} m/s</p>
          </div>
        </WeatherInfo>
      )}
    </Container>
  );
}
