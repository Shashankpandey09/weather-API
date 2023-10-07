const apiKey="12c13147d4113af716db9457dbd9beff";
const getWeather=document.querySelector("#submit");
const cityBox=document.querySelector("#text");
const image=document.querySelector("#icon");
const temp=document.querySelector("#temp1");
const para=document.querySelector("#fore");
const bubu=document.querySelector("#cards");

getWeather.addEventListener("click",()=>{
   const boxValue=cityBox.value;
   retreiveWeather(boxValue);
})
async function retreiveWeather(box){
    try {
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${box}&appid=${apiKey}&units=metric`);
    
   if(!response.ok){
    throw new Error("network response was not ok")
   }
   const data=await response.json();
   image.innerHTML=`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].main}">`
   temp.innerHTML=` <h2 class="temp">${Math.round(data.main.temp)}°C</h2>`;
   para.querySelector("#para").innerHTML=`  <p>${data.weather[0].description}</p>`;
   const arr=[`${data.main.feels_like}`,`${data.main.humidity}`,`${data.wind.speed}`];
   bubu.innerHTML=`<div class="elem">
   <p class="bubu">feels like:${arr[0]}</p>
</div>
<div class="elem">
   <p  class="bubu">Humidity:${arr[1]}%</p>
</div>
<div class="elem wind">
   <p  class="bubu">wind speed:${arr[2]}m/s</p>
</div>`
   
   
   console.log(data);
    } catch (error) {
        image.innerHTML=``
        temp.textContent=``;
        para.innerHTML=`<p>An error occured please correct your spellings</p>`;
        para.style.margin="15px"
        bubu.innerHTML=``
     
        
    }
}

