import { Outlet } from "react-router-dom";

import style from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={style.footer}>
        <p className={style.copyright}>&copy; Copyright {new Date().getFullYear()} by Worldwise Inc.</p>
      </footer>
    </div>
  );
}

export default SideBar;
