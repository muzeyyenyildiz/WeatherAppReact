# WeatherAppReact
Project was created with React and React-Bootstrap

## Features
- Search city
- Current weather
- Daily forecast for 7 days
- Responsive Design
 
## Screenshot
![plot](src/img/WeatherApp.JPG)

## API Usage

#### OpenWeatherApi
#### How to make an API call

```http
  https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
```

| Parametre | Necessity    | Explanation               |
| :-------- | :------- | :------------------------- |
| `lat, lon` | `required` | Geographical coordinates (latitude, longitude) |
| `appid` | `required` | Your unique API key|
| `exclude` | `optional` | current / minutely / hourly / daily / alerts|
| `units` | `optional` | standard / metric / imperial|

