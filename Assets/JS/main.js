let container = document.getElementById("container")
let card = document.getElementById("dayInfo")
let convert = document.getElementById("convert")
let postArr = weatherData.days
let showCard = false
let celsius = false


// creating id for each post, for the filter function
postArr.forEach((el, i) => el.id = i)

//showing posts on screen
postArr.forEach((el, i) => {
    container.innerHTML +=
        `
                <div class="cardWeather" id=${i} onclick="cardInfo(this.id)">
                    <h2>${el.day}</h2>
                    <h3 class="temp">${el.temp} ${weatherData.tempUnit}</h3> 
                </div>
            `
});


//opening card info
cardInfo = (id) => {
    let filteredElement = postArr.filter(el => el.id == id)
    let temperature = celsius ? filteredElement[0].temp + 273.15 : filteredElement[0].temp
    
    showCard = true

    card.style.visibility = "visible"
    card.innerHTML =
        `
        <i class="far fa-times-circle closeBtn" onclick="closeCardInfo()"></i>
        <h2>${filteredElement[0].day}</h2>
        <h3 class="temp">${temperature} ${celsius ? "K" : weatherData.tempUnit}</h3> 
        <p>Wind Direction: <span><i class="fas fa-arrow-up + ${filteredElement[0].windDirection}" id="arrow"></i></span> </p>
        <p>Wind Speed:${filteredElement[0].windSpeed} ${weatherData.windSpeedUnit}</p>
        <p>Type: ${filteredElement[0].type} </p>
        `
}

//closing card info
closeCardInfo = () => {
    showCard = false
    card.style.visibility = "hidden"
}

//converting celsius to kelvin
convert.addEventListener("click", () => {
    celsius = !celsius
    container.innerHTML = ""
    postArr.forEach((el, i) => {
        container.innerHTML +=
            `
                    <div class="cardWeather" id=${i} onclick="cardInfo(this.id)">
                        <h2>${el.day}</h2>
                        <h3 class="temp">${celsius ? el.temp + 273.15 : el.temp} ${celsius ? "K" : weatherData.tempUnit}</h3> 
                    </div>
                `
    });
})



