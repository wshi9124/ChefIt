import Badge from 'react-bootstrap/Badge';
import { Navigate, useNavigate } from 'react-router-dom';

const image = 'https://idea7.co.uk/wp-content/uploads/2021/02/placeholder-250x250-1.png';

function ChefCard({ chefcardinfo }) {
  const navigate = useNavigate()
  function handleonClick() {
    navigate("/viewchef")
  }
  return (

    <div onClick={handleonClick} className="chefinfocontainer">
      <img className="border-image" src={image} />
      <div className="info-header">
        <p className="badge" style={{ backgroundColor: 'blue' }}>{`${chefcardinfo.first_name} ${chefcardinfo.last_name}`}</p>
        <p className="badge" style={{ backgroundColor: 'orange' }}>
          {' '}
          $
          {chefcardinfo.chef_price}
          0
          {' '}
        </p>

        <p>Rating</p>
      </div>
    </div>
  );
}

export default ChefCard;
