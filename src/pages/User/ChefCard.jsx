import { Navigate, useNavigate } from 'react-router-dom';
import StarFill from '../../commonComponents/starfill';
const image = 'https://idea7.co.uk/wp-content/uploads/2021/02/placeholder-250x250-1.png';

function ChefCard({ chefcardinfo }) {
  const navigate = useNavigate();
  function handleonClick() {
    navigate("/viewchef/"+chefcardinfo.id)
  }
  return (

    <div onClick={handleonClick} className="chefinfocontainer">
      <img className="border-image" width="350px" height="350px" src={image} />
      <div className="info-header">
        <p className="badge" style={{ backgroundColor: 'blue' }}>{`${chefcardinfo.first_name} ${chefcardinfo.last_name}`}</p>
        <p className="badge" style={{ backgroundColor: 'orange' }}>
          {' '}
          $
          {chefcardinfo.chef_price}
          0
          {' '}
        </p>
        {chefcardinfo.cuisines.map(cuisine=><p className="badge" style={{ backgroundColor: 'green' }}>{cuisine.name}</p>)}
        <StarFill iter={chefcardinfo.avg_rating}/>
      </div>
    </div>
  );
}

export default ChefCard;
