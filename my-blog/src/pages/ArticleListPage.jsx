import React from 'react';
import articles from '../component/article-content';
import ArticleList from '../component/ArticleList';

const ArticleListPage = () => {

  return (
    <div className='articleList__container'>
     <ArticleList articles={articles}/>
    </div>

  )
}

export default ArticleListPage;