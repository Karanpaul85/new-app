
import Head from 'next/head';
import Layout from '../components/Layout'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Router from 'next/router';

export default function About() {
    const intitalState = {
        isPreview : true,
        recipientsVal: "",
        senderVal: "",
        isOpen :false
    };
    const [state, setState] = useState(intitalState);    
    const router = useRouter();   
    useEffect(()=>{ 
        let routerQuery = router.query;
        let isQuery = Object.keys(routerQuery).length !== 0;
        if(isQuery){
            checkRoutes(routerQuery);
        }
               
    },[router]);

    function checkRoutes(routerQuery){ 
        let routerQueryPromo = routerQuery.promo;      
        let routerQueryArr = routerQueryPromo.split('_');
        const isQueryValues = {
            isPreview : false,
            recipientsVal: routerQueryArr[0].replace(/-/g, ' ').toUpperCase(),
            senderVal: routerQueryArr[1].replace(/-/g, ' ').toUpperCase(),
            isOpen:   routerQueryArr[2] == "open" ? true : false          
        };
        setState({...state, ...isQueryValues});   
    }

    return ( 
        <Layout>
            <Head>
                <title>Happy New Year {state.recipientsVal}</title>
                <meta name="description" content="KP News is a Latest News App"/>            
            </Head>
            <div className={`card ${state.isOpen ? "open" : ""}`}>
                <div className="back"></div>
                <div className="front">
                    <div className="imgset">
                        <img width="100%" src="./card_images/newyear2022.jpg"/>
                    </div>
                </div>
                <div className="textContainer">
                    <p id="head">Happy New Year <br/><span>{state.recipientsVal}</span></p>
                    <p>आनेवाला यह साल आपके लिए सबसे अच्छा रहें, और ईश्वर आपको और ज़्यादा कामयाब बनाएं, इसी दुआ के साथ आपको नए साल की हार्दिक शुभकामनाएं देते है..</p>
                    <p className='senderName'>{state.senderVal }</p>
                </div>
            </div>            
           { showBtnsOnCinditions()}     
        </Layout>
    
    );

    function showBtnsOnCinditions(){
        var finalBtns ="";
        if(state.isPreview){
            finalBtns =  <div className='cardbuttons'>
            <input type='text' id='recipients' placeholder='Recipients Name'/>
            <input type='text' id='sender' placeholder='Sender Name'/>                
            <button id='preview' onClick={() => genratePreview()}>Preview</button>
        </div> 
        }else if(state.isOpen){
            finalBtns = <div className='cardbuttons'><button id='wishes' onClick={() => createWish()}>Create Wishes</button></div>;
        }else{
            finalBtns = <div className='cardbuttons'><button id='edit' onClick={() => editPreview()}>Edit</button><ul><li onClick={() => shareWhatsapp()}><i className="fab fa-whatsapp"></i></li><li  onClick={() => shareFacebook()}><i className="fab fa-facebook-f"></i></li></ul></div>;
        } 
        return finalBtns; 
    }

    function genratePreview(){
        let recipientsName = document.getElementById('recipients').value;
        let senderName = document.getElementById('sender').value;
        if(recipientsName !== "" & senderName !== ""){
            // document.querySelector('.card .textContainer #head span').innerText = recipientsName;
            // document.querySelector('.card .textContainer .senderName').innerText = senderName;
            document.querySelector('.card').classList.add('open');
            // // setIsPreview(!isPreview);
            // // setRecipientsVal(...recipientsVal, ...recipientsName);
            // //setSenderVal(senderVal = senderName);
            const newValues = {
                isPreview : false,
                recipientsVal: recipientsName.toUpperCase(),
                senderVal: senderName.toUpperCase()
            };
            setState({...state, ...newValues});
        }
    }
    function editPreview(){ 
        //console.log(state);       
        const editValues = {
            isPreview : true
        };      
        // const editValues = {
        //     isPreview : true,
        //     recipientsVal: state.recipientsVal,
        //     senderVal: state.senderVal
        // };
        setState({...state, ...editValues});
        setTimeout(function(){
            document.getElementById('recipients').value = state.recipientsVal;
            document.getElementById('sender').value = state.senderVal;
            console.log(state.recipientsVal, state.senderVal);
        },200);
        
    }

    function createWish(){ 
        //console.log(state);       
        const editValues = {
            isPreview : true,
            isOpen:false
        };      
        setState({...state, ...editValues});
        setTimeout(function(){
            document.getElementById('recipients').value = "";
            document.getElementById('sender').value = "";
            console.log(state.recipientsVal, state.senderVal);
        },200);
        
    }

    function shareWhatsapp(){
        //let recp = state.recipientsVal.replace(' ', '-');
        //console.log(`${state.recipientsVal.replace(/ /g, '-')}`);
        //console.log(`https://websitefreelancing.co.in/new-year-wishes?promo=${state.recipientsVal.replace(/ /g, '-')}_${state.senderVal.replace(/ /g, '-')}_open`);
        Router.push(`whatsapp://send?text=https://websitefreelancing.co.in/new-year-wishes?promo=${state.recipientsVal.replace(/ /g, '-')}_${state.senderVal.replace(/ /g, '-')}_open`);
    }
    function shareFacebook(){
        //let recp = state.recipientsVal.replace(' ', '-');
        Router.push(`http://www.facebook.com/sharer/sharer.php?u=https://websitefreelancing.co.in/new-year-wishes?promo=${state.recipientsVal.replace(' ', '-')}_${state.senderVal.replace(' ', '-')}_open`);
    }
}

