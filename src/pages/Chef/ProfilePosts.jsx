import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

const placeholder = 'https://idea7.co.uk/wp-content/uploads/2021/02/placeholder-250x250-1.png';

function ProfilePosts({posts=[],handleDeletePost=null,del=false}) {

  console.log(posts)
    function deleteCallback(id) {
      handleDeletePost(id)
    }
    const postslist = posts.map(post=><PostCard key={post.id} id={post.id} img={post.image} del={true} 
        deleteCallback={deleteCallback} name={post.dish_name}/>)
    return (
        <div id="grid-profile">
            {postslist}
            <img height="300px" width="300px" src={placeholder}/>
            <img height="300px" width="300px" src={placeholder}/>
            <img height="300px" width="300px" src={placeholder}/>
            <img height="300px" width="300px" src={placeholder}/>
            <img height="300px" width="300px" src={placeholder}/>
        </div>
    )
}

export default ProfilePosts
