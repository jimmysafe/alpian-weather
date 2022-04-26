# :zap: Alpian Weather :zap:

### Weather App application based on [Open Weather Map API](https://openweathermap.org/api)

### App Infrastructure:

-   Typescript
-   Create React App
-   TailwindCSS
-   React Query
-   ESLint / Prettier
-   Husky Git hooks

### Demo:

:rocket: [Live Demo](https://alpian-weather.vercel.app/) :rocket:

![enter image description here](https://user-images.githubusercontent.com/12184812/165280291-40dfe242-f2b5-40a5-8f7c-99a8b4e6691f.gif)

### Environments:

> :warning: The following is here only for easy access for Alpian Devs

Please add a `.env` file in the root directory (follow the structure of `.env.sample` file) and replace `REACT_APP_WEATHER_API_ACCESS_KEY=` with the following

```
REACT_APP_WEATHER_API_ACCESS_KEY=fd6523545a5e76b679ca37c16869c5e7
```

### Installation:

```
npm install
```

### Usage:

```
npm run dev
```

### :warning: First Run on localhost :warning:

Openweathermap api is protected by CORS policy.
In order to run this app locally and bypass the CORS issue this app uses heroku's proxy (https://cors-anywhere.herokuapp.com/).

On First run please visit https://cors-anywhere.herokuapp.com/corsdemo and click on `Request temporary access to the demo server` to gain temporary access.

![enter image description here](https://user-images.githubusercontent.com/12184812/165278044-1afbb3f8-bc5c-4083-94cb-9626396357e7.png)
