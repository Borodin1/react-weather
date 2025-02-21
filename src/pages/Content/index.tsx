import React from 'react'
import styles from './styles.module.css'
import { TopButtons } from '../../widgets/TopButtons'
import { SearchCity } from '../../widgets/SearchCity'
import { useWeather } from '../../entities/weather/hooks/useWeather'
import { TimeAndLocation } from '../../widgets/TimeAndLocation'
import { TempAndDetails } from '../../features/TempAndDetails'
import { ForecastWeather } from '../../features/Forecast'

export const Content: React.FC = () => {
    const {weather,time,units,forecastWeather} = useWeather()
    console.log(forecastWeather)
    return(
        <div className={styles['content']}>
            <TopButtons/>
            <SearchCity/>
            <TimeAndLocation city={weather?.name} country={weather?.sys.country} time={time} />
            {weather && <TempAndDetails data={weather} units={units} />}
            {forecastWeather && <ForecastWeather title='3 Hour Step Forecast' data={forecastWeather} />}
        </div>
    )
}
