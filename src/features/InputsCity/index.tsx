import React from 'react'
import { BiSearch, BiCurrentLocation } from "react-icons/bi"

import styles from './styles.module.css'

export const InputsCity:React.FC =()=>{
    return(
        <div className={styles['inputs-city']}>
            <input type="text" placeholder='search by city...' />
            <BiSearch className={styles['icon']} />
            <BiCurrentLocation className={styles['icon']} />
        </div>
    )
}