import React from "react";
import ReactDOM from "react-dom/client";
import {
  BUTTON,
  EMAIL_LABEL,
  FORGET_BUTTON,
  FORGET_PASSWORD,
  RESET_PASSWORD_LINK,
  RESET_PASSWORD_MESSAGE,
  TEXT,
} from "@/assets/message";
import { Button, RoundFrame, TextInput } from "@/components";
import style from "@/assets/css/style.module.css";

const element = document.getElementById("forgetPassword");

// パスワードを忘れた方の画面
const ForgetPassword = () => {
  return (
    <div className={style.container}>
      <div className={style.commonContainer}>
        <h1 className={style.commonLabel}>{RESET_PASSWORD_LINK}</h1>
      </div>
      <p className={style.commonLabel}>{RESET_PASSWORD_MESSAGE}</p>
      <RoundFrame className={"round-frame_single"}>
        <TextInput
          title={EMAIL_LABEL}
          name={FORGET_PASSWORD}
          type={TEXT}
          value={""}
          onChange={() => console.log("入力欄")}
        />
      </RoundFrame>
      <div className={style.commonContainer}>
        <Button
          title={FORGET_BUTTON}
          type={BUTTON}
          disabled={false}
          onClick={() => console.log("ボタン")}
        />
      </div>
    </div>
  );
};

ReactDOM.createRoot(element!).render(
  <React.StrictMode>
    <ForgetPassword {...element?.dataset} />
  </React.StrictMode>
);
