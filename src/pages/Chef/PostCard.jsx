import React from 'react';

function PostCard({
  img, name, deleteCallback, id, del
}) {
  function handledelete() {
    deleteCallback(id);
  }
  return (
    <div className="chefinfocontainer">
      <img className='border-image' style={{objectFit:"contain"}} src={img} alt="PostCardImage" width="300px" height="300px" />
        <div className="info-header">
        <button className="badge" style={{ backgroundColor: 'blue' }}>{name}</button>
        {del ? 
          <button className='badge'style={{ backgroundColor: 'red' }} type="button" onClick={handledelete}>Delete</button>
           :  null}
      </div>
    </div>
  );
}

export default PostCard;
