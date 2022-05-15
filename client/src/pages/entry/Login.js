import styles from "./Entry.module.css";

export default function () {
  return (
    <div className={styles.rootBox}>
      <div className={styles.form}>
        <div className={styles.title}>
          <a href="/">PROJECT EV</a>
        </div>
        <input type="text" placeholder="Id" />
        <input type="password" placeholder="password" />
        <button>sign in</button>
        <p className={styles.message}>
          Not sign up? <a href="register">Sign up</a>
        </p>
      </div>
    </div>
  );
}
