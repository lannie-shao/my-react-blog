import { useState } from "react";
import React  from 'react';
import useUser from "../hooks/useUser";
import {Link} from 'react-router-dom'
// import axios from 'axios';


const AddCommentForm = ({articleName,setArticleInfo}) => {
  const [addComment,setAddComment]=useState('');
  const [username,setUsername]=useState('');
  const {user}=useUser();

  const addComments=(e)=>{
    e.preventDefault();
      // const token=user && await user.getTokenID();
      // const headers= token? {authToken:token}:{};

      // const response=await axios.post(`/api/articles/${articleName}/add-comment`, 
      // {postedBy:user.email,
      // text:addComment}, 
      // {
      //  headers
      // });

      // setArticleInfo(response.data);

      fetch(`/api/articles/${articleName}/add-comment`,{
      method:'POST',
      headers:{ 'Content-Type':'application/json'},
      body:JSON.stringify({username,text:addComment})
      })
      .then((res)=>res.json())
      .then(setArticleInfo);

      setAddComment('');
      setUsername('');
  }
    
  return (
    <div className='comment-form'>
        <h3>Add The Comments</h3>  
         {/* <p>You are posting as {user.email}</p>    */}
        {user?(
          <form onSubmit={addComments}>
          <input placeholder='User name' value={username} onChange={e=>setUsername(e.target.value)} />
          <textarea id='comments' rows={5} cols={50} value={addComment}
            placeholder='We would like to hear your opinion....'
            onChange={e=> setAddComment(e.target.value)} />
          <button className="customer_button">Add Comment</button>
          </form>        
        )
        :<Link to='/login'><button className='customer_button'>Log in to add comment</button></Link>}
      
    </div>
  )
}

export default AddCommentForm