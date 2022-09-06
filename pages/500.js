import Layout from '../components/Layout'
import styles from '../styles/Home.module.css';
export default function Custom500() {
    return(    
        <Layout> 
            <div className = { styles.container } >
               <h1>404</h1>
            </div>
        </Layout>   
    );
  }