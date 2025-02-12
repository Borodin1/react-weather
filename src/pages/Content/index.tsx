import React from 'react'
import styles from './styles.module.css'
import { TopButtons } from '../../widgets/TopButtons'
import { SearchCity } from '../../widgets/SearchCity'
import { useWeather } from '../../entities/weather/hooks/useWeather'
import { TimeAndLocation } from '../../widgets/TimeAndLocation'

export const Content: React.FC = () => {
    const {weather,time} = useWeather()
    return(
        <div className={styles['content']}>
            <TopButtons/>
            <SearchCity/>
            <TimeAndLocation city={weather?.name} country={weather?.sys.country} time={time} />
        </div>
    )
}
