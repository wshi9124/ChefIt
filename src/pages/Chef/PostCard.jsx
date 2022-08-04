import React from 'react';

function PostCard({
  img, name, deleteCallback, id,
}) {
  function handledelete() {
    deleteCallback(id);
  }
  return (
    <div>
      <img src={img} />
      <p>{name}</p>
      <button onClick={handledelete}>Delete</button>
    </div>
  );
}

export default PostCard;
