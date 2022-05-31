// styles
import styles from "../styles/404.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.status}>404</h1>
        <h3 className={styles.text}>ページが見つかりません</h3>
      </div>
    </div>
  );
}
