import Head from "next/head";

import Navbar from "components/NavBar";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Conent Hive</title>
        <meta
          name="description"
          content="Make your website the hive of activity it deserves to be"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Navbar />
          {/* <MainContent />
          <Footer /> */}
        </div>
      </main>
    </>
  );
};

export default Home;
