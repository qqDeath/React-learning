import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className = { linkActive => linkActive.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className = { linkActive => linkActive.isActive ? s.active : s.item }>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className = { linkActive => linkActive.isActive ? s.active : s.item }>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className = { linkActive => linkActive.isActive ? s.active : s.item }>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className = { linkActive => linkActive.isActive ? s.active : s.item }>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className = { linkActive => linkActive.isActive ? s.active : s.item }>Users</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
