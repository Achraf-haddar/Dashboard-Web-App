import Head from "next/head";
import Dashboard from "./dashboard";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import styles from "./Home.module.css";
import React from "react";

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
        <Login />
      </main>
    </>
  );
};
export default Home;
