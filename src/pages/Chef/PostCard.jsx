import React from 'react';

function PostCard({
  img, name, deleteCallback, id,
}) {
  function handledelete() {
    deleteCallback(id);
  }
  return (
    <div>
      <img src={img} alt="PostCardImage" />
      <p>{name}</p>
      <button type="button" onClick={handledelete}>Delete</button>
    </div>
  );
}

export default PostCard;
