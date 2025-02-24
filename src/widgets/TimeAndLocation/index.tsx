import React from "react";
import styles from './styles.module.css'
import { getFormattedDateFromDt } from '../../shared/lib/formattedDate';

interface IProps {
  time: number;
  city?: string;
  country?: string;
}

export const TimeAndLocation: React.FC<IProps> = ({ city, time, country }) => {
  return (
    <div className={styles['time-and-location']}>
      <div className={styles['time']}>
        <p>{getFormattedDateFromDt(time,'full')}</p>
      </div>

      <div className={styles['location']}>
        <p>{country ? `${city}, ${country}` : city}</p>
      </div>
    </div>
  );
};
