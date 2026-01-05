import React, { useState } from "react";
import { createRoot } from "react-dom/client";

export default function App() {
  const [answer, setAnswer] = useState("");
  const [success, setSuccess] = useState(false);
  const [answered, setAnswered] = useState(false);
  return (
    <div className="quiz-wrap">
      <h1 className="quiz-title">クイズ</h1>
      <p className="quiz-question">Q.日本で一番高い山は？</p>
      <input
        placeholder="回答を入力"
        type="text"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
          setAnswered(false);
        }}
      />
      <button
        onClick={() => {
          setSuccess(answer === "富士山");
          setAnswered(true);
        }}
      >
        回答する
      </button>
      {/* 👇正解の場合と不正解の場合、それぞれに対して下にメッセージを表示するようにしてください */}
      {answered && <p className="result">{success ? "正解！" : "不正解！"}</p>}
    </div>
  );
}

export const root = createRoot(document.getElementById("root"));
root.render(<App />);
