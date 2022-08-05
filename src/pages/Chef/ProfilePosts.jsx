import { useEffect, useState } from "react"
import PostCard from "./PostCard"
const placeholder = "https://idea7.co.uk/wp-content/uploads/2021/02/placeholder-250x250-1.png"

const postHeader = {  
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  }

const deleteHeader = {
    method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
}

function ProfilePosts({id}) {
    const [posts,setPosts] = useState([])
    useEffect(()=> {
        fetch("http://localhost:9292/posts/"+id).then(resp=>resp.json()).then(setPosts)
    },[])

    // function handleSubmit() {
    //     fetch("http://localhost:9292/posts/"+id,{...postHeader,
    //         body:JSON.stringify()})
    //         .then(resp=>resp.json()).then(data=>setPosts([...posts,data]))

    // }
    function deleteCallback(id) {
        const deletePost = posts.filter(post => post.id !== id)
        setPosts(deletePost)
        fetch("http://localhost:9292/posts/"+id,{...deleteHeader})
    }
    console.log(posts)
    const postslist = posts.map(post=><PostCard key={post.id} id={post.id} img={post.image} 
        deleteCallback={deleteCallback} name={post.dish_name}/>)
    return (
        <div id="grid-profile">
            {postslist}
        </div>
    )
}

export default ProfilePosts