import Navbar from "./Navbar";
import Head from 'next/head';
import styles from '../styles/Home.module.css'
const Layout = (props) => {    
    return (
        <div>        
            <Head>
                <link rel="shortcut  icon" href="/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta property="og:type" content="website"/>            
                <meta property="og:site_name" content="Websitefreelancing news app"/>            
                <meta name="twitter:card" content="summary"/>
                <meta property="og:image:width" content="1500"/>
                <meta property="og:image:height" content="786"/>            
                <link rel="icon" type="image/png" href="/favicon.ico"/>
                <link rel="apple-touch-icon" href="/favicon.ico"/>
                {/* <meta property="og:image" content="/favicon.ico"/>
                <meta name="twitter:image" content="/favicon.ico"/> */}
                <meta name="theme-color" content="#07007a"/>
                <title>Welcome to my website</title>
                <meta name="keywords" content="Hindi news, हिंदी न्यूज़ , Hindi Samachar, हिंदी समाचार, Latest News in Hindi, Breaking News in Hindi, ताजा ख़बरें, KP News"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet"/>
                <meta name="google-site-verification" content="DGeYZ00HehjGwAd9IMwMIwyOTnzewjX4LNjBi0I2zpY" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
            </Head>
            <Navbar/>
            <div className={styles.webwrapper}>
                {props.children}
            </div>                
        </div>
    );
}
export default Layout;