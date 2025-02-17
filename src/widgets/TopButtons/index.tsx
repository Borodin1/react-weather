import React from "react";
import styles from "./styles.module.css";
import { mock } from "./mock";
import { useAppDispatch } from "../../app/store";
import { setCity } from "../../entities/weather/model/weatherSlice";

export const TopButtons: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles["top-buttons"]}>
      {mock.map((city) => {
        return (
          <button key={city} onClick={() => dispatch(setCity(city))}>
            {city}
          </button>
        );
      })}
    </div>
  );
};
