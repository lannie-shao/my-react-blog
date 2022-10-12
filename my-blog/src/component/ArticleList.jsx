import React from 'react';
import {Link} from 'react-router-dom';

const ArticleList = ({articles}) => {

  return (

     <div className='articleList__container-content section__padding'>
     {articles.map((article,index)=>{
      return(
      <>
      <Link key={article.name+''+index} to={`/articles/${article.name}`}>
      <h3>{article.title}</h3>
      </Link>
      <p>{article.content[0].substring(0,120)}...</p>
      <hr/>
      </>
      )
     })}
     </div>

  )
}

export default ArticleList;