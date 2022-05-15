import Header from "components/header/Header";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.posts}>
        <div className={styles.post}>
          <span className={styles.title}>
            Visual Studio 2010 - C++ project - remove *.sdf file
          </span>
          <span className={styles.detail}>
            I would like to know if I can safely delete the sdf file that stores
            information for Visual Studios Intellisense - is it going to be
            rebuilt the next time that I open the solution? … The motivation to
            do so
          </span>
          <div className={styles.tagBox}>
            <button className={styles.tag}>javascript</button>
            <button className={styles.tag}>SOLID</button>
            <button className={styles.tag}>SQL</button>
          </div>
          <div className={styles.metaBox}>
            <span className={styles.author}>timebuilder</span>
            <span className={styles.date}>2022-01-01</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
