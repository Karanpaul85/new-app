import Head from 'next/head';
import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHindiNews } from '../redux/actions/hindiNews';
import store, { wrapper } from '../redux/store';

let currentUrl;

const Home = (props) => {
  //const dispatch = useDispatch();
  // const hindiNewsData = useSelector(state => state.NewsData.hindi);
  // useEffect(()=>{
  //     dispatch(fetchHindiNews());
  // },[]);

  const isBrowser = () => typeof window !== 'undefined';
  // node
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
      {/* <div>{hindiNewsData && hindiNewsData.map(item => (<li key={item}>{item}</li>))}</div> */}
      <div className={styles.container}>
        <ArticleList data={props} />
      </div>
    </Layout>
  );
};
let d = new Date();
let finalDate = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
const dummyData = {
  totalArticles: 35819,
  articles: [
    {
      title:
        'Sorry Guys today free API kota is expire. Latest news automatically reflect tomorrow morning',
      description: 'Sorry Guys today free kota is expire',
      url: '/',
      image:
        'https://www.androidheadlines.com/wp-content/uploads/2019/01/Google-Maps-AH-NS-12.jpg',
      publishedAt: finalDate,
      source: {
        name: 'Websitefreelancing.co.in',
        url: 'https://www.websitefreelancing.co.in',
      },
    },
  ],
};

export async function getServerSideProps() {
  let finalData;
  const res = await fetch(
    'https://gnews.io/api/v3/topics/world?token=74d41973972e4e19eba58d79aab49ee0&&lang=hi'
  );
  const data = await res.json();
  if (data.articleCount !== 0 && !data.errors) {
    finalData = data;
  } else {
    finalData = dummyData;
  }
  store.dispatch(fetchHindiNews(finalData));
  return {
    props: finalData,
  };
}

export default Home;
