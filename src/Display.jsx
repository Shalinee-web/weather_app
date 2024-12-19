import React from 'react';

export default function Display(props) {
  return (
    <div className="row">
      
      <div className="col-10 d-flex justify-content-center align-items-center">
      {props.weather.map((weather) => {
        return (
          <div key={weather.id} className="col-3 mb-2">
            <div className="">
              <img
                width="100%"
                src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                alt="weather icon"
              />
              <h4 className="p-3 text-center">{weather.cityname}</h4>
             
              <h4 className="p-3 text-center">Temp:{weather. temperature}</h4>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
