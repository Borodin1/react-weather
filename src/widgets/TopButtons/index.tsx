import React from 'react'
import styles from './styles.module.css'
import { mock } from './mock'

export const TopButtons: React.FC = () => {
    return(
        <div className={styles['top-buttons']}>
            {mock.map((city)=>{
                return(
                    <button key={city}>{city}</button>
                )
            })}
        </div>
    )
}