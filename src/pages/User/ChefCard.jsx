import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarFill from '../../commonComponents/starfill';


function ChefCard({ chefcardinfo }) {
  console.log(chefcardinfo);
  const navigate = useNavigate();
  function handleonClick() {
    navigate(`/viewchef/${chefcardinfo.id}`);
  }
  return (

    <div onClick={handleonClick} onKeyDown={handleonClick} className="chefinfocontainer">
      <img className="border-image" style={{objectFit:"cover"}} width="350px" height="350px" src={chefcardinfo.prof_pic} alt="chefImage" />
      <div className="info-header">
        <p className="badge" style={{ backgroundColor: 'blue' }}>{`${chefcardinfo.first_name} ${chefcardinfo.last_name}`}</p>
        <p className="badge" style={{ backgroundColor: 'orange' }}>
          {' '}
          $
          {chefcardinfo.chef_price}
          0
          {' '}
        </p>
        <StarFill iter={chefcardinfo.avg_rating} />
        {chefcardinfo.cuisines.map((cuisine) => <p className="badge" style={{ backgroundColor: 'green' }}>{cuisine.name}</p>)}
      </div>
    </div>
  );
}

export default ChefCard;
