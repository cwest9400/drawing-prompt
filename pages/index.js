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
      <footer>

      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
