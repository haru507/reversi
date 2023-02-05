import { LOGIN_LABEL, REGISTRATION_LABEL } from "@/assets/message";
import menu from "@/assets/css/components/menu.module.css";

// ログイン、新規会員登録のメニューを表示
const Menu = () => {
  return (
    <div className={menu["menu-container"]}>
      <a className={menu["menu-item"]} href="/signIn">
        {LOGIN_LABEL}
      </a>
      <a className={menu["menu-item"]} href="/signUp">
        {REGISTRATION_LABEL}
      </a>
    </div>
  );
};

export default Menu;
