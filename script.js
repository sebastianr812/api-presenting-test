const documentLongitutde = document.querySelector('#long');
const documentLatitude = document.querySelector('#lat')

const api_url = 'http://api.open-notify.org/iss-now.json';




const getPosData = async function(){
    let response = await fetch(api_url)
    let data = await response.json()

    const {longitude, latitude} = data.iss_position

    console.log('latitude', latitude)
    console.log('longittude', longitude)
    
//    document.getElementById('long').textContent = `longitude: ${longitude}`
//    document.getElementById('lat').textContent = `latitude: ${latitude}`


    documentLongitutde.textContent = `longtitude: ${longitude}`
    documentLatitude.textContent= `latitude: ${latitude}`
    

}

getPosData()

const api_chuck = 'https://api.chucknorris.io/jokes/random';

const getJoke = async function(){
    let response = await fetch(api_chuck)
    let data = await response.json()

    let joke = data.value

    document.getElementById('theJoke').textContent = joke
}