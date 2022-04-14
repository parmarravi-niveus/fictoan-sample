import styles from "../styles/Home.module.css";
import { Text, Card } from "fictoan-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Text bgColor="red-80">Test Sample</Text>
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
