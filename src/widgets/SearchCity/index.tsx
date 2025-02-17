import React from "react";
import styles from "./styles.module.css";
import { InputsCity } from "../../features/InputsCity";
import { UnitsCity } from "../../features/UnitsCity";

export const SearchCity: React.FC = () => {
  return (
    <div className={styles["search-city"]}>
      <InputsCity />
      <UnitsCity />
    </div>
  );
};
