import { useState, useEffect } from "react";
import axios from "axios";
import CodeMirror from "@uiw/react-codemirror";
import styles from "./Write.module.css";

export default function () {
  const [postContent, setPostContent] = useState("");

  return (
    <div className={styles.rootBox}>
      <CodeMirror
        className={styles.editor}
        height="550px"
        value={postContent}
        onChange={(value) => {
          setPostContent(value);
        }}
      />
      <button className={styles.submitBtn} onClick={savePost}>
        글쓰기
      </button>
    </div>
  );
}

function savePost() {
  // axios
  //   .post("/api/posts", {
  //     content: postContent,
  //   })
  //   .then(() => {
  //     window.location.href = "/";
  //   })
  //   .catch((err) => {
  //     const msg = err.response.data;
  //     alert(msg);
  //   });
  console.log("savePost()");
}
