import React from "react";
import styles from "./styles.module.css";
import { Button } from "../../shared/components/Button";
import { useWeather } from "../../entities/weather/hooks/useWeather";
import { setUnits } from "../../entities/weather/model/weatherSlice";

export const UnitsCity: React.FC = () => {
  const { dispatch } = useWeather();
  return (
    <div className={styles["units-city"]}>
      <Button title="°C" onClick={() => dispatch(setUnits("metric"))} />
      <span>|</span>
      <Button title="°F" onClick={() => dispatch(setUnits("imperial"))} />
    </div>
  );
};
