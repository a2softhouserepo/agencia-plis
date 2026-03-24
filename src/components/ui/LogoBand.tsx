import styles from "./LogoBand.module.css";

export default function LogoBand({ id }: { id?: string } = {}) {
  const logos = Array.from({ length: 20 });

  return (
    <div id={id} className={styles.band}>
      <div className={styles.track}>
        {logos.map((_, i) => (
          <span
            key={i}
            className={styles.logo}
          >
            GIZ
          </span>
        ))}
      </div>
    </div>
  );
}
