const Environment = {
    production: (process.env.REACT_APP_PRODUCTION === 'true'),
    // production: false,
    api: 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m',
    statics: process.env.REACT_APP_STATICS
}

export default Environment;


