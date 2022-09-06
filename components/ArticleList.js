import React from "react";
import SingleArticle from './SingleArticle';

class ArticleList extends React.Component{
    
    render(){
        const {articles} = this.props.data;            
        return(
            articles.map(function(item, i){
                return <SingleArticle singledata={item} key={i} index={i}/>
                // return {item.description !== "KA" ? "" : "SP"}
            })
        )        
        
    }
}
export default ArticleList;