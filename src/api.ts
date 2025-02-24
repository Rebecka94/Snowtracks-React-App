export interface WeatherData {
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
  }>;
  wind: {
    speed: number;
  };
}

export async function getWeather(city: string): Promise<WeatherData> {
  const apiKey = "5069ff31208e4c7df784327e75554301";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  return response.json(); // Returnera väderdata som JSON
}
