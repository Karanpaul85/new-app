
import Head from 'next/head';
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function About() {
    return ( 
        <Layout>
            <Head>
                <title>KP News is a Latest News App</title>
                <meta name="description" content="KP News is a Latest News App"/>            
            </Head>
            <div className = { styles.container } >
                <div className={ styles.newsSec}>
                    About 
                </div>
            </div>
        </Layout>
    
    )
}