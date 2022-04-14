import styles from "../styles/Home.module.css";
import { Text, Card, Button } from "fictoan-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Card
        padding="micro"
        shape="rounded"
        bgColour="salmon-40"
        borderColour="salmon"
      >
        Test
      </Card>
    </div>
  );
}
