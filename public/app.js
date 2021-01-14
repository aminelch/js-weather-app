
   const OPENWEARHER_APIKEY= 'd766fef235784f384b36dd2bc1f6d9b1'
    /** IL FAUT :
      1 savoir l'addresse IP de visiteur
      2 contacter une API pour savoir la localisation de l'utilisateur
      3 renvoyé la méteo
     */

        // async function getUserIP() {

        //     return await fetch('https://ipapi.co/json/')
        //         .then(function(response) {
        //             return response.json();
        //         })
        //         .then(function(data) {
        //             console.log(data.ip);
        //         }).catch(error => {return error} )
        // }


fetch('https://ipapi.co/json/')
    .then(response => {
            console.log(response)
    }).then(respon)
    .catch(error => {
            console.log(error)
        })

    // const openweatherURL= `api.openweathermap.org/data/2.5/weather?q=London&appid={${OPENWEARHER_APIKEY}}`

    // console.log(openweatherURL)

