import Head from 'next/head';

import { useState } from "react";
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
// import styles from "../styles/prompt.module.css";

export default function Home() {

  return (
    <>
      <Head>
        <title>Daily Doodley Draw</title>
      </Head>
    
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>
            Doodley Draw Daily
          </h1>
          <p>
             Doodle for 10 minutes a day to keep the feel bads away.
          </p>
        </div>
      </main>
      <Navbar />
      

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            background-color: black;
            color: whitesmoke;
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: whitesmoke;
        }
      `}</style>
    </>
  )



}
