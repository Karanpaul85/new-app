import '../styles/style.css'
import Script from "next/script";
import {createWrapper } from "next-redux-wrapper";
import {Provider} from 'react-redux';
import store from '../redux/store';

const App =  function App({ Component, pageProps }) {
   return (
   <>
      <Script
         strategy="lazyOnload"
         src={`https://www.googletagmanager.com/gtag/js?id=G-DQNYN50HXR`}
         />
         <Script strategy="lazyOnload">
         {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-4V646WXZQ4', {
               page_path: window.location.pathname,
               });
         `}
         </Script>
         <Provider store={store}>
            <Component {...pageProps} />
         </Provider>      
   </>
   )
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(App);
