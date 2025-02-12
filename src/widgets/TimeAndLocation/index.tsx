import React from "react";
import styles from './styles.module.css'

interface IProps {
  time?: string;
  city?: string;
  country?: string;
}

export const TimeAndLocation: React.FC<IProps> = ({ city, time, country }) => {
  return (
    <div className={styles['time-and-location']}>
      <div className={styles['time']}>
        <p>{time}</p>
      </div>

      <div className={styles['location']}>
        <p>{country ? `${city}, ${country}` : city}</p>
      </div>
    </div>
  );
};
