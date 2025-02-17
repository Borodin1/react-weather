import React from 'react'
import styles from './styles.module.css'
import { InputsCity } from '../../features/InputsCity'
import { TempCity } from '../../features/TempCity'
import { useAppDispatch } from '../../app/store'

export const SearchCity:React.FC =()=>{
    return(
        <div className={styles['search-city']}>
            <InputsCity/>
            <TempCity/>
        </div>
    )
}