import Head from 'next/head';
import AnimalPrompt from '../components/AnimalPrompt';
import styles from '../styles/Home.module.css';
import { useState } from "react";
// import styles from "../styles/prompt.module.css";

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>drawingPrompt</title>

      </Head>
<main>
      
        <div>
          <AnimalPrompt />
        </div>
        
      </main>
    </div>
  )
  // <div className={styles.container}>
  //   <Head>
  //     <title>Drawing Prompts</title>
  //     <link rel="icon" href="/favicon.ico" />
  //   </Head>

  //   <main>
  //     <h1 className={styles.title}>
  //       Welcome to <a href="">Drawing Prompts!</a>
  //     </h1>

  //     <p className={styles.description}>
  //       Get started by choosing a prompt!
  //     </p>

  //     <div className={styles.grid}>
  //       <div className={styles.card}>
  {/* <AnimalPrompt /> */ }


  {/* <h3>Draw an Animal! &darr;</h3> */ }
  {/* <p>Find in-depth information about Next.js features and API.</p> */ }
  //         </div>







  //       </div>
  //     </main>

  //     <footer>
  //       <a
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Powered by{' '}
  //         <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
  //       </a>
  //     </footer>

  //     <style jsx>{`
  //       main {
  //         padding: 5rem 0;
  //         flex: 1;
  //         display: flex;
  //         flex-direction: column;
  //         justify-content: center;
  //         align-items: center;
  //       }
  //       footer {
  //         width: 100%;
  //         height: 100px;
  //         border-top: 1px solid #eaeaea;
  //         display: flex;
  //         justify-content: center;
  //         align-items: center;
  //       }
  //       footer img {
  //         margin-left: 0.5rem;
  //       }
  //       footer a {
  //         display: flex;
  //         justify-content: center;
  //         align-items: center;
  //         text-decoration: none;
  //         color: inherit;
  //       }
  //       code {
  //         background: #fafafa;
  //         border-radius: 5px;
  //         padding: 0.75rem;
  //         font-size: 1.1rem;
  //         font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
  //           DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  //       }
  //     `}</style>

  //     <style jsx global>{`
  //       html,
  //       body {
  //         padding: 0;
  //         margin: 0;
  //         font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  //           Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
  //           sans-serif;
  //       }
  //       * {
  //         box-sizing: border-box;
  //       }
  //     `}</style>
  //   </div>
  // )
}
