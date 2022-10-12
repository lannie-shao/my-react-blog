import React from 'react'

const CommentsList = ({comments}) => (
    <div>
    <h3>Comments:</h3>

     {comments.map((item,index)=>(
         <div className='comment' key={item.username+':'+index}>
         <h4>{item.username}</h4>
         <p>{item.text}</p>
         <hr />
         </div>
     ))
      }
    </div>
  )


export default CommentsList;