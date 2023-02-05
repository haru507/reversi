import introTextInput from "@/assets/css/components/input.module.css";

interface Props {
  title: string;
  name: string; // サーバーサイドが受け取る時の変数名
  type: "text" | "email" | "password"; // text or passwordの二択
  value: string; // 親から受け取るステート
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // ステートを変更時の関数
}

const IntroTextInput = (props: Props) => {
  return (
    <div className={introTextInput["intro-text-input-container"]}>
      <label
        className={introTextInput["intro-text-input-label"]}
        htmlFor={props.name}
      >
        {props.title}
      </label>
      <input
        className={introTextInput["intro-text-input"]}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default IntroTextInput;
