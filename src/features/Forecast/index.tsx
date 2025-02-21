import React from 'react'
import styles from './styles.module.css'
import { IForecastWeather } from '../../entities/weather/model/types'
import { getFormattedDateFromDt, getFormattedDateFromTimezone } from '../../shared/lib/formattedDate'

interface IForecast{
    title:string
    data:IForecastWeather []
}

export const ForecastWeather:React.FC<IForecast>=({title,data})=>{
    return(
        <div className={styles['forecast']}>
            <div className={styles['forecast-title']}>
                <p>{title}</p>
            </div>
            <hr />
        <div className={styles['forecast-details']}>
            {data.map((d,index)=>(
                    <div key={index} className={styles['forecast-item']}>
                        <p>{getFormattedDateFromDt(d?.dt)}</p>
                        <img src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`} alt="forecast weather" />
                        <p className={styles['forecast-temp']}>{d.main.temp}°</p>
                    </div>
                )
            )}
        </div>
        </div>
    )
}