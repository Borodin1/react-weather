import React from "react";
import styles from "./styles.module.css";

import { BiSearch, BiCurrentLocation } from "react-icons/bi";

import { useInput } from "./hook";

export const InputsCity: React.FC = () => {
  const { inputRef, handleLocation, handleSearchCity } = useInput();
  return (
    <div className={styles["inputs-city"]}>
      <input type="text" placeholder="search by city..." ref={inputRef} />
      <BiSearch className={styles["icon"]} onClick={handleSearchCity} />
      <BiCurrentLocation className={styles["icon"]} onClick={handleLocation} />
    </div>
  );
};
