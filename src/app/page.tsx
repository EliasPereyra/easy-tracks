import Image from "next/image";

import Navbar from "@/components/navbar/navbar";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1>Welcome to your Expense tracks</h1>
      <p>Keep track of every thing you do in an organized and visual way</p>
    </main>
  );
}
