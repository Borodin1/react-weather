import React from 'react'
import styles from './styles.module.css'
import { TopButtons } from '../../widgets/TopButtons'
import { SearchCity } from '../../widgets/SearchCity'

export const Content: React.FC = () => {
    return(
        <div className={styles['content']}>
            <TopButtons/>
            <SearchCity/>
        </div>
    )
}
