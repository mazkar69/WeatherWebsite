const status = document.querySelector("#city_name")
const sbtm = document.getElementById("serach-btn");
const inputtext = document.getElementById("search-bar");
const tempData = document.querySelector(".temp_data")
const desc = document.querySelector(".desc")

// console.log(tempData)

sbtm.addEventListener("click",async (e)=>{
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
            status.innerText = "Write city name properly."
            

        }    
        

    }
    else{
        
        status.innerText = "Field can not be empty."

    }


})