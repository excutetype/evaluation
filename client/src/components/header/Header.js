import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <a href="/" className={styles.title}>
        PROJECT EV
      </a>
      <div className={styles.search}>
        <input className={styles.searchInput}></input>
        <button className={styles.searchButton}>
          <img src={require("static/header.search.png")} width="20"></img>
        </button>
      </div>
      <div className={styles.entry}>
        <a href="login">sign in</a>
        <a href="register">sign up</a>
      </div>
    </div>
  );
}

export default Header;
