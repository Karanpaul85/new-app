import Head from 'next/head';
import Layout from "../../components/Layout";
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

let currentUrl;
const News = (props) =>{ 
    const router = useRouter();
    const indexNumder = router.query.index; 
    //console.log(router.query);   
    const isBrowser = () => typeof window !== "undefined";
    if(isBrowser()){
        currentUrl = window.location.href;
    }   
    return (     
        <Layout>        
            <Head>
                <title>{props.articles[indexNumder].title}</title>
                <meta name="description" content={props.articles[indexNumder].title}/>
                <link rel="icon" type="image/png" href={props.articles[indexNumder].urlToImage}/>
                <link rel="apple-touch-icon" href={props.articles[indexNumder].urlToImage}/>
                <meta property="og:image" content={props.articles[indexNumder].urlToImage}/>
                <meta name="twitter:image" property="og:image" content={props.articles[indexNumder].urlToImage}/>            
                <meta property="og:title" content={props.articles[indexNumder].title} />
                <meta property="og:description" content={props.articles[indexNumder].title} />
                <meta property="og:url" content={currentUrl}/>
                <meta name="twitter:title"  content={props.articles[indexNumder].title}/>
                <meta name="twitter:description"  content={props.articles[indexNumder].title}/>
                <meta name="twitter:url" content={currentUrl}/>
            </Head>
            <div className = { styles.container }>            
                <div className={styles.newsSec}>                    
                    <div className={styles.newsImage}>
                        <img src={props.articles[indexNumder].urlToImage ? props.articles[indexNumder].urlToImage : "icon-192x192.png"} alt={props.articles[indexNumder].title}/>
                    </div>
                    <div className={styles.newscontent}>
                        <div className={styles.publishDate}>Publish Date: {props.articles[indexNumder].publishedAt}</div>
                        <div className={styles.newsTitle}>{props.articles[indexNumder].title}</div>
                        <div className={styles.publishDate}>Source: {props.articles[indexNumder].author}</div>
                        <div className={styles.newsTitle}>{props.articles[indexNumder].description}</div>
                        <div className={styles.btnSection}>
                            <button className={styles.readMoreBTN} onClick={() => backPage()}>Back</button>
                            <Link href={props.articles[indexNumder].url}>
                                <a className={styles.readMoreBTN} target="_blank">Go to :- {props.articles[indexNumder].source.name}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function backPage(){
    window.history.back();}
export async function getServerSideProps() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=8a9d02cfb4f94826b9fac8af4f084c19');
    const data = await res.json();
    return {
        props: data
    }
}

export default News;

