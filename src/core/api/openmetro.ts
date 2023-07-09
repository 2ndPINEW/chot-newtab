import { OpenMetroApiResponse, Weather } from '../types/openmetro';

export async function getWeatherData(props: {
  latitude: number;
  longitude: number;
}): Promise<Weather[]> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${props.latitude}&longitude=${props.longitude}&daily=precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max&timezone=Asia%2FTokyo`;
  const res = await fetch(url);
  const json = (await res.json()) as OpenMetroApiResponse;
  const weathers = json.daily.time.map((time, index) => {
    return {
      date: time,
      precipitationSum: json.daily.precipitation_sum[index],
      rainSum: json.daily.rain_sum[index],
      showersSum: json.daily.showers_sum[index],
      snowfallSum: json.daily.snowfall_sum[index],
      precipitationHours: json.daily.precipitation_hours[index],
      precipitationProbabilityMax: json.daily.precipitation_probability_max[index],
    };
  });
  return weathers;
}
