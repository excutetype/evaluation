import axios from "axios";
import { useState } from "react";
import styles from "./Entry.module.css";

function Register() {
  const [registerData, setregisterData] = useState({
    userId: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  function updateRegisterData(event, updateTarget) {
    setregisterData((prev) => {
      return { ...prev, [updateTarget]: event.target.value };
    });
  }

  function requestRegister() {
    axios
      .post("/api/entry/register", {
        data: registerData,
      })
      .then((res) => {})
      .then((err) => {
        const errMsg = err.response.data;
        alert(errMsg);
      });
  }

  return (
    <div className={styles.rootBox}>
      <div className={styles.form}>
        <div className={styles.title}>
          <a href="/">PROJECT EV</a>
        </div>
        <input
          value={registerData.userId}
          type="text"
          placeholder="Id"
          onChange={(event) => updateRegisterData(event, "userId")}
        />
        <input
          value={registerData.nickname}
          type="text"
          placeholder="Nickname"
          onChange={(event) => updateRegisterData(event, "nickname")}
        />
        <input
          value={registerData.password}
          type="password"
          placeholder="password"
          onChange={(event) => updateRegisterData(event, "password")}
        />
        <input
          value={registerData.passwordConfirm}
          type="password"
          placeholder="Confirm password"
          onChange={(event) => updateRegisterData(event, "confirmPassword")}
        />
        <button onClick={requestRegister}>Sign up</button>
        <p className={styles.message}>
          Already sign up? <a href="login">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
