import styles from "../styles/Home.module.css";
import { Text, Card, Button, CheckBox } from "fictoan-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <CheckBox
        as="input"
        id="checkbox-1"
        value="checkbox-1"
        name="checkbox-1"
        label="Check me"
      />
    </div>
  );
}
