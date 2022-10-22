import { ConnectButton } from "web3uikit";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <nav className={styles.header}>
      <div>
        <h1> Dbank</h1>
      </div>
      <div>
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  );
}
