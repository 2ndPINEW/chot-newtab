export type OpenMetroApiResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: 'Asia/Tokyo';
  timezone_abbreviation: 'JST';
  elevation: number;
  daily_units: {
    time: string;
    precipitation_sum: 'mm';
    rain_sum: 'mm';
    showers_sum: 'mm';
    snowfall_sum: 'cm';
    precipitation_hours: 'h';
    precipitation_probability_max: '%';
  };
  daily: {
    time: string[];
    precipitation_sum: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
    precipitation_hours: number[];
    precipitation_probability_max: number[];
  };
};

export type Weather = {
  date: string;
  precipitationSum: number;
  rainSum: number;
  showersSum: number;
  snowfallSum: number;
  precipitationHours: number;
  precipitationProbabilityMax: number;
};
