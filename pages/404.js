
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css';
export default function Custom404() {
    return(    
        <Layout> 
            <div className = { styles.container } >
               <h1>Oops somthing went wrong</h1>
            </div>
        </Layout>   
    );
}

