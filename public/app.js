const openweatherURL = `api.openweathermap.org/data/2.5/weather?q=London&appid=d766fef235784f384b36dd2bc1f6d9b1`

const weathIcons = {
    'Rain': "wi wi-day-rain",
    'Cloud': "wi wi-day-cloudy",
    'Clear': "wi wi-day-sunny",
    'Snow': "wi wi-day-snow",
    'mist': "wi wi-day-fog",
    'Drizzle': "wi wi-day-sleet",
 }
/** IL FAUT :
  1 savoir l'addresse IP de visiteur
  2 contacter une API pour savoir la localisation de l'utilisateur
  3 renvoyé la méteo
 */



async function getMeteoInfos() {
    //savoir l'addresse IP de visiteur
    const ip = await fetch("http://api.ipify.org/?format=json").then(result => result.json())
        .then(data => data.ip)
        .catch(error => console.error(error))

    //102.170.33.120
    const city = await fetch("http://api.ipapi.com/102.170.33.120?access_key=51c77fe51597ea20c5b170ea45b2555f")
        .then(response => response.json)
        .then(json =>json.ip)
        .catch(error => console.error(error) )


        console.log(city)


}

let displayMeteoInfos = (meteo) => {
    if (!(meteo instanceof Object)) throw 'Param must be an Object';

}

let infos = getMeteoInfos()

// displayMeteoInfos()