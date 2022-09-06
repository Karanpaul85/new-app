import styles from '../styles/Home.module.css';
import Router from 'next/router';
import Link from 'next/link';
const OwnerPage = (props) => (
        <Link href={props.singledata.url}>
            <a>   
                <div className={styles.newsImage}>
                    <img src={props.singledata.urlToImage ? props.singledata.urlToImage : "icon-192x192.png"} alt=""/>
                </div>
                <div className={styles.newscontent}>
                    <div className={styles.publishDate}>Publish Date: {props.singledata.publishedAt}</div>
                    <div className={styles.newsTitle}>{props.singledata.title}</div>
                    <div className={styles.publishDate}>Source: {props.singledata.source.name}</div>
                    {/* <button className={styles.readMoreBTN} onClick={(data, index) => newsPage(props.singledata, props.index)}>ReadMore</button>  */}
                </div>
            </a>             
        </Link>     
);

function newsPage(data, index){    
    let getTitile = data.title;
    let removesFormTitle = getTitile.replace("'", "");
    let removeColumnFromTitle = removesFormTitle.replace(":", "");
    let removeHiphnFromTitle = removeColumnFromTitle.replace(" - ", " ");
    let removeSpaceFromTitle = removeHiphnFromTitle.replace(/ /g, "-");
    let finalUrl = removeSpaceFromTitle.toLowerCase()+"?index="+index; 
    //console.log(finalUrl);   
    Router.push(`/hindi/${finalUrl}`);
}
export default OwnerPage;