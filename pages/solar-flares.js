// https://api.nasa.gov/DONKI/FLR?startDate=2016-01-01&endDate=2020-01-30&api_key=DEMO_KEY

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const NASA_SOLAR_FLARES =
  "https://api.nasa.gov/DONKI/FLR?startDate=2019-01-01&endDate=2020-01-30&api_key=DEMO_KEY";

const useSolarFlares = () => {
  const [flares, setFlares] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(NASA_SOLAR_FLARES)
      .then((response) => {
        setLoading(false);
        setFlares(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return {
    flares,
    loading,
    error,
  };
};
export default function SolarFlares(props) {
  const { flares, loading, error } = useSolarFlares();

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (flares?.length === 0) {
    return <div>No solar flares detected.</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Solar Flares</h1>
      </main>

      <ul>
        {flares?.map((flare) => (
          <li key={flare.flrID}>{JSON.stringify(flare)}</li>
        ))}
      </ul>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

SolarFlares.getInitialProps = async () => {
  return {};
};
