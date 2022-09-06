import ReadMore from './readMore';
import OwnerPage from './ownerPage';
import styles from '../styles/Home.module.css';

const SingleArticle = (props) => (
    <div className={styles.newsSec}>
        {props.singledata.description !== "" ? <ReadMore singledata={props.singledata} index={props.index}/> : <OwnerPage singledata={props.singledata}  index={props.index}/>}   
    </div>
)
export default SingleArticle;