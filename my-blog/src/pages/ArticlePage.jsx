import React, { useEffect ,useState} from 'react';
import articles from '../component/article-content';
import NotFindPage from '../component/NotFindPage';
import { useParams } from 'react-router-dom';
// import useUser from '../hooks/useUser';
import ArticleList from '../component/ArticleList';
import CommentsList from '../component/CommentsList';
import Upvotes from '../component/Upvotes';
import AddCommentForm from '../component/AddCommentForm';


const ArticlePage = () => {

  const {name} = useParams();
  const article=articles.find(article=>article.name===name);
  const otherArticle=articles.filter(article=>article.name!==name);

  const [articleInfo,setArticleInfo]=useState({"upvotes":0,"comments":[]});
  // const {user, isLoading}=useUser();

  useEffect(()=>{
    // const getToken=async()=>{
    //   const token=user && await user.getTokenID();
    //   const headers=token?{authToken:token}:{};

    //   fetch(`/api/articles/${name}`,{headers})
    //   .then((res)=>res.json())
    //   .then(setArticleInfo)
    // }

    fetch(`/api/articles/${name}`)
    .then((res)=>res.json())
    .then(setArticleInfo)

    // if(isLoading){
    //   getToken();
    // } 

  },[name]);

  if (!article) return <NotFindPage />;

  return (
    <div className='article__container'>
    <div className='article__container-content section__padding'>

    <h1>{article.title}</h1>
  
    <div className='vote'>  
    <Upvotes setArticleInfo={setArticleInfo} 
            //  canUpvotes={articleInfo.canUpvotes}
             articleName={name} /> 
    <h5>This post has been voted {articleInfo.upvotes}</h5>
    </div>

    {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ))}
    </div>

    <CommentsList comments={articleInfo.comments} />

    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

    <ArticleList className='section__padding' articles={otherArticle} />
    </div>
  )
}

export default ArticlePage;