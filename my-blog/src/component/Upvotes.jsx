import React from 'react';
import useUser from '../hooks/useUser';
import { Link } from 'react-router-dom';
import axios from 'axios';

// add upvote button and description 
const Upvote= ({articleName,setArticleInfo,canUpvotes}) => {

  const {user, isLoading}=useUser();

  const upvoteArticle=async()=>{
    // const token=user && await user.getTokenID();
    // const headers=token? {authToken:token}:{};

    // const response=await axios.put(`/api/articles/${articleName}/upvote`,null,{headers});
    // setArticleInfo(response.data)
  // }

    fetch(`/api/articles/${articleName}/upvote`,{method:'PUT'})
    .then((res)=>res.json())
    .then(setArticleInfo);
  }

  return (
    <>
    {user? ( 
      <button className='customer_button' onClick={upvoteArticle}>Vote
      {/* {canUpvotes? 'Add Upvote':'already upvoted'} */}
      </button>)
    :(<Link to='/login'><button className='customer_button'> Log in to vote</button></Link>)
   }
   </>
  )
}

export default Upvote;
