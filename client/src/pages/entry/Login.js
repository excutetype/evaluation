import axios from "axios";
import { useState } from "react";
import styles from "./Entry.module.css";

function Login() {
  const [loginData, setLoginData] = useState({ id: "", password: "" });

  function updateLoginData(event, updateTarget) {
    setLoginData((prev) => {
      return { ...prev, [updateTarget]: event.target.value };
    });
  }

  function requestLogin() {}

  return (
    <div className={styles.rootBox}>
      <div className={styles.form}>
        <div className={styles.title}>
          <a href="/">PROJECT EV</a>
        </div>
        <input
          value={loginData.id}
          type="text"
          placeholder="Id"
          onChange={(event) => updateLoginData(event, "id")}
        />
        <input
          value={loginData.password}
          type="password"
          placeholder="password"
          onChange={(event) => updateLoginData(event, "password")}
        />
        <button onClick={requestLogin}>sign in</button>
        <p className={styles.message}>
          Not sign up? <a href="register">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
