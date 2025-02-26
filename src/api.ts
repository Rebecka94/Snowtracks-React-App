export interface WeatherData {
  main: {
    temp: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
}

export async function getWeather(city: string): Promise<WeatherData> {
  const apiKey = "2187984a4bac73bb4e0f7a62534dd97b";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  return response.json();
}
