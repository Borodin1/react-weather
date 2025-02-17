import React, { useRef } from "react";
import styles from "./styles.module.css";

import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { useAppDispatch } from "../../app/store";
import { setCity } from "../../entities/weather/model/weatherSlice";

export const InputsCity: React.FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchCity = () => {
    if (inputRef.current) {
      const newCity = inputRef.current.value.trim();
      if (newCity) {
        dispatch(setCity(newCity));
      }
    }
  };

  return (
    <div className={styles["inputs-city"]}>
      <input
        type="text"
        placeholder="search by city..."
        ref={inputRef}
      />
      <BiSearch className={styles["icon"]} onClick={handleSearchCity} />
      <BiCurrentLocation className={styles["icon"]} />
    </div>
  );
};
