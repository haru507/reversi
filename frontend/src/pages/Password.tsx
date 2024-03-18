import React from "react";
import ReactDOM from "react-dom/client";
import {
  BUTTON,
  PASSWORD_CONFIRM,
  PASSWORD_CONFIRM_LABEL,
  PASSWORD_LABEL,
  SETTING_BUTTON,
  SETTING_PASSWORD,
  SETTING_PASSWORD_LABEL,
  TEXT,
} from "@/assets/message";
import { Button, RoundFrame, TextInput } from "@/components";
import style from "@/assets/css/style.module.css";

const element = document.getElementById("password");

// パスワード設定画面(User情報を持っているか持っていないかで表示を変えたい？)
const Password = () => {
  return (
    <div className={style.container}>
      <div className={style.commonContainer}>
        <h1 className={style.commonLabel}>{SETTING_PASSWORD_LABEL}</h1>
      </div>
      <RoundFrame className={"round-frame_double"}>
        <TextInput
          title={PASSWORD_LABEL}
          name={SETTING_PASSWORD}
          type={TEXT}
          value={""}
          onChange={() => console.log("")}
        />
        <TextInput
          title={PASSWORD_CONFIRM_LABEL}
          name={PASSWORD_CONFIRM}
          type={TEXT}
          value={""}
          onChange={() => console.log("")}
        />
      </RoundFrame>
      <div className={style.commonContainer}>
        <Button
          title={SETTING_BUTTON}
          type={BUTTON}
          disabled={false}
          onClick={() => console.log("")}
        />
      </div>
    </div>
  );
};

ReactDOM.createRoot(element!).render(
  <React.StrictMode>
    <Password {...element?.dataset} />
  </React.StrictMode>
);
