import styles from "./Entry.module.css";

export default function () {
  return (
    <div className={styles.rootBox}>
      <div className={styles.form}>
        <div className={styles.title}>
          <a href="/">PROJECT EV</a>
        </div>
        <input type="text" placeholder="Id" />
        <input type="text" placeholder="Nickname" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Confirm password" />
        <button>Sign up</button>
        <p className={styles.message}>
          Already sign up? <a href="login">Sign in</a>
        </p>
      </div>
    </div>
  );
}
