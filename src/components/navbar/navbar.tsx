import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h3>Logo here</h3>
      <ul className={styles.listItems}>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </nav>
  );
}
