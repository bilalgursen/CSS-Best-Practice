import styles from "./style.module.css";
import Image from "next/image";
import logo from "@/public/vercel.svg";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className={styles.nav}>
        <Image className={styles.logo} src={logo} priority />
        <div className={styles.items}>
        <Link href="#" className={styles.item}>Link 1</Link>
        <Link href="#" className={styles.item}>Link 2</Link>
        <Link href="#" className={styles.item}>Link 3</Link>
        </div>
      </nav>
    </>
  );
}
