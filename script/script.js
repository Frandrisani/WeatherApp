//! DI SEGUITO TUTTE LE DICHIARAZIONI E INIZIALIZZAZIONI DI VARIABILI E COSTANTI
//todo -  let citta = "qui metteremo l'elemento nella pagina per cercare la citta" ;
// * DI SEGUITO I RICHIAMI ALLE CLASSI HTML
let InsiemeDiInformazioni = document.getElementsByClassName("informazioni");
let descrizioneMeteo = document.getElementById("informazioniMeteoAttuale");
let icona = document.getElementById("wicon");
// * DI SEGUITO GLI ELEMENTI CREATI DINAMICAMENTE - section1
let temperaturaAttuale = document.createElement("p");
let citta = document.createElement("p");
let data = document.createElement("p");
let desc = document.createElement("p");
let currentNameDay;
let currentDay;
let currentMonth;
let hours;
let imagePath;
let iconcode;
let iconurl;
// * DI SEGUITO GLI ELEMENTI CREATI DINAMICAMENTE - section2
let divVento = document.getElementById("vento");
let divTemperatura = document.getElementById("temperatura");
let divUmidita = document.getElementById("umidita");
let divSole = document.getElementById("sole");
let velocitaVento = document.createElement("p");
let temperaturaMin = document.createElement("p");
let temperaturaMax = document.createElement("p");
let umidita = document.createElement("p");
let alba = document.createElement("p");
let tramonto = document.createElement("p");
//-------------------------------------------------------------------------------------------------
// Data
const now = new Date();
console.log(Date.now());
// FINE Data
//-------------------------------------------------------------------------------------------------
// Sigla Giorni Settimana
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", " Fri", "Sat"];
// FINE Sigla Giorni Settimana
//-------------------------------------------------------------------------------------------------
// Sigla Giorni Settimana
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// FINE Sigla Giorni Settimana
//-------------------------------------------------------------------------------------------------
// Funzione per sapere la data attuale
const todayIs = function () {
  const indexOfTheCurrentMonth = now.getMonth();
  currentMonth = monthNames[indexOfTheCurrentMonth];
  const indexOfTheCurrentDay = now.getDay();
  currentNameDay = dayNames[indexOfTheCurrentDay];
  currentDay = now.getDate();
  console.log("il currentMonth è", currentMonth);
  console.log("il currentNameDay è", currentNameDay);
  console.log("il currentDay è", currentDay);
};
todayIs();
// FINE Funzione per sapere la data attuale
//-------------------------------------------------------------------------------------------------
// Funzione per sapere l'ora attuale
const timeIs = function () {
  hours = now.getHours();
  console.log("l'ora è", hours);
};
timeIs();
// FINE Funzione per sapere l'ora attuale
//-------------------------------------------------------------------------------------------------
// Funzione per aggiungere l'icona del meteo in base alle attuali condizioni meteo
const iconaMeteo = function () {}; //todo
// FINE Funzione per aggiungere l'icona del meteo in base alle attuali condizioni meteo
//-------------------------------------------------------------------------------------------------
// Funzione per aggiungere backgrounf in base all'ora attuale
const background = function () {
  if (hours >= 5 && hours <= 8) {
    imagePath = "../assets/img/alba.png";
    document.body.style.background = `url('${imagePath}')`;
  } else if (hours >= 9 && hours <= 15) {
    imagePath = "../assets/img/mattino.png";
    document.body.style.background = `url('${imagePath}')`;
  } else if (hours >= 16 && hours <= 17) {
    imagePath = "../assets/img/tramonto.png";
    document.body.style.background = `url('${imagePath}')`;
  } else if (hours >= 18 && hours <= 20) {
    imagePath = "../assets/img/sera.png";
    document.body.style.background = `url('${imagePath}')`;
  } else if (hours >= 21 && hours <= 4) {
    imagePath = "../assets/img/sera.png";
    document.body.style.background = `url('${imagePath}')`;
  }
};
background();
// FINE Funzione per aggiungere backgrounf in base all'ora attuale
//-------------------------------------------------------------------------------------------------
// Funzione per aggiungere i dati dell'API al documento html
const displayData = (weather) => {
  console.log(weather); // Questa riga aggiunta mostrerà tutti i dati dell'API in console
  //--- SECTION 1 ---
  data.innerText = `${currentNameDay}, ${currentDay} ${currentMonth}`;
  InsiemeDiInformazioni[0].appendChild(data);
  //---
  const temperaturaArrotondata = Math.floor(weather.main.temp);
  temperaturaAttuale.innerHTML = temperaturaArrotondata + `°C`;
  InsiemeDiInformazioni[0].appendChild(temperaturaAttuale);
  //---
  citta.innerText = "Matera";
  InsiemeDiInformazioni[0].appendChild(citta);
  //---
  desc.innerText = `${weather.weather[0].description} `;
  descrizioneMeteo.appendChild(desc);
  //---
  desc.innerText = `${weather.weather[0].description} `;
  descrizioneMeteo.appendChild(desc);
  //---
  iconcode = weather.weather[0].icon;
  iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  icona.setAttribute("src", iconurl);
  //--- SECTION 2 ---
  velocitaVento.innerText = `${weather.wind.speed} Km/h`;
  divVento.appendChild(velocitaVento);
  //---
  temperaturaMin.innerText = `Minima ${weather.main.temp_min} °C`;
  divTemperatura.appendChild(temperaturaMin);
  //---
  temperaturaMax.innerText = `Massima ${weather.main.temp_max} °C`;
  divTemperatura.appendChild(temperaturaMax);
  //---
  umidita.innerHTML = `${weather.main.humidity} %`;
  divUmidita.appendChild(umidita);
  //---
  // alba.innerHTML = `${weather.wind.speed} Km/h`;
  // divSole.appendChild(alba);
  // //---
  // tramonto.innerHTML = `${weather.wind.speed} Km/h`;
  // divSole.appendChild(tramonto);
};
// FINE Funzione per aggiungere i dati dell'API al documento html
//-------------------------------------------------------------------------------------------------
// Funzione per acquisire i dati dall'API
const api = function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Matera&lang=it&units=metric&appid=a63802e946b9f5a182cb26e719489298`
  )
    .then((response) => response.json())
    .then(displayData)
    .catch((err) => alert("Wrong City name"));
};
api();
//* fINE Funzione per acquisire i dati dall'API
//-------------------------------------------------------------------------------------------------
