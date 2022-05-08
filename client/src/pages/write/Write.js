import { useState } from "react";
import axios from "axios";
import CodeMirror from "@uiw/react-codemirror";
import styles from "./Write.module.css";

export default function () {
  const [postContent, setPostContent] = useState("");

  return (
    <div className={styles.rootBox}>
      <div className={styles.contentBox}>
        <div className={styles.editorBox}>
          <CodeMirror
            height="800px"
            value={postContent}
            onChange={(value) => {
              setPostContent(value);
            }}
          />
        </div>
        <button
          onClick={() => {
            axios
              .post("/api/posts", {
                content: postContent,
              })
              .then(() => {
                window.location.href = "/";
              })
              .catch((err) => {
                const msg = err.response.data;
                alert(msg);
              });
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}
