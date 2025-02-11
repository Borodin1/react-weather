import React from 'react'
import styles from './styles.module.css'

export const TempCity:React.FC =()=>{
    return(
        <div className={styles['temp-city']}>
            <button>°C</button>
            <span>|</span>
            <button>°F</button>
        </div>
    )
}