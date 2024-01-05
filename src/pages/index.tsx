import Dashboard from "@/pages/dashboard";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import styles from "./Home.module.css";
import React from "react";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main className={styles.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;
