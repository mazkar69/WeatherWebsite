const status = document.querySelector("#city_name")
const sbtm = document.getElementById("serach-btn");
const inputtext = document.getElementById("search-bar");
const tempData = document.querySelector(".temp_data")
const desc = document.querySelector(".desc")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date_point = document.getElementById("today-date");
const day_point = document.getElementById("day");
// console.log(tempData)
const d = new Date();
date = d.getDate();
let day = days[d.getDay()];
console.log(day)

date_point.innerText = date;
day_point.innerText = day;

sbtm.addEventListener("click",async (e)=>{
    status.innerText = "Get Your Output Here:";
    e.preventDefault();
    const locationName = inputtext.value;
    
    if(locationName !== ""){
        try{
            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=4b092f77219dc2a93b4a1b815b4d86c3`

            const response = await fetch(url)
            const data = await response.json();
            const arrData = [data];
            tempData.innerText = arrData[0].main["temp"];
            desc.innerText = arrData[0].weather[0].main;


           
    

        }catch{
            status.innerText = "Sorry, No record available for this city."
            tempData.innerHTML = "";
            desc.innerText = "";
            

        }    
        

    }
    else{
        
        status.innerText = "Field can not be empty."

    }


})