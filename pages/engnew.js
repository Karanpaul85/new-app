import Head from 'next/head';
import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import styles from '../styles/Home.module.css';
let currentUrl;
const EngNews = (props) => {
  const isBrowser = () => typeof window !== 'undefined';
  if (isBrowser()) {
    currentUrl = window.location.href;
  }
  return (
    <Layout>
      <Head>
        <title>{props.articles[0].title}</title>
        <meta name="description" content={props.articles[0].title} />
        <link rel="icon" type="image/png" href={props.articles[0].urlToImage} />
        <link rel="apple-touch-icon" href={props.articles[0].urlToImage} />
        <meta property="og:image" content={props.articles[0].urlToImage} />
        <meta
          name="twitter:image"
          property="og:image"
          content={props.articles[0].urlToImage}
        />
        <meta property="og:title" content={props.articles[0].title} />
        <meta property="og:description" content={props.articles[0].title} />
        <meta property="og:url" content={currentUrl} />
        <meta name="twitter:title" content={props.articles[0].title} />
        <meta name="twitter:description" content={props.articles[0].title} />
        <meta name="twitter:url" content={currentUrl} />
      </Head>
      <div className={styles.container}>
        <ArticleList data={props} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=8a9d02cfb4f94826b9fac8af4f084c19'
  );
  const data = await res.json();
  return {
    props: data,
  };
}

export default EngNews;
