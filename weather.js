function search() {
    place = wplace.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5b4bee0ba241d092159faf007e166080`).then(d => d.json()).then(res => displaydata(res))
}
function displaydata(placeDetails) {
    placename=placeDetails.name
    temperature=placeDetails.main.temp
    wthrtype=placeDetails.weather[0].description
    windspeed=placeDetails.wind.speed
    humidity=placeDetails.main.humidity
    sunrise=placeDetails.sys.sunrise
    sunset=placeDetails.sys.sunset
    t=temperature - 273.15
    
    htmldata = `<section class="vh-100" >
    <div class="container  h-100">
  
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4">
  
          <div class="card" style="color: #4B515D; border-radius: 35px;">
            <div class="card-body p-4">
  
              <div class="d-flex">
                <h6 class="flex-grow-1">${placename}</h6>
                <h6>15:07</h6>
              </div>
  
              <div class="d-flex flex-column text-center mt-5 mb-4">
                <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${t.toFixed(2)} </h6>
                <span class="small" style="color: #868B94">Stormy</span>
              </div>
  
              <div class="d-flex align-items-center">
                <div class="flex-grow-1" style="font-size: 1rem;">
                  <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${windspeed}m/s
                    </span></div>
                  <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${humidity}%</span>
                  </div>
                  <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${sunrise} </span>
                  </div>
                </div>
                <div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                    width="100px">
                </div>
              </div>
  
            </div>
          </div>
  
        </div>
      </div>
  
    </div>
  </section>`
        result.innerHTML= htmldata
}