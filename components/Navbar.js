import Link from 'next/link';
import styles from '../styles/Home.module.css';
const Navbar = () => (
    <header className={styles.header}>
        <div className={styles.webwrapperHeader}>
        <div className={styles.companyName}><a href="/?promo=logo">KP News</a></div>
        <div className={styles.spacer}></div>
        <nav>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                {/* <li><Link href="/about"><a>About</a></Link></li> */}
                <li><Link href="/engnew"><a>Eng News</a></Link></li>
                {/* <li><Link href="/new-year-wishes"><a>Wish</a></Link></li> */}
            </ul>
        </nav>
        </div>
    </header>
)
export default Navbar;