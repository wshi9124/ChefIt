import { useEffect, useState } from 'react';
import ChefInfo from './ChefInfo';
import { LoadMap } from './Map';

function UserHome() {
  const [userData, setUserData] = useState({});
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/user/home/1').then((resp) => resp.json())
      .then(setUserData);
  }, []);
  useEffect(() => {
    fetch('http://localhost:9292/chefs').then((resp) => resp.json())
      .then(setChefData);
  }, []);
  if (Object.keys(userData).length === 0 || chefData.length === 0) return <div>Map Loading...</div>;
  return (
    <>
      <LoadMap chefData={chefData} longitude={userData.longitude} latitude={userData.latitude} title={userData.first_name} />
      <ChefInfo chefData={chefData} />
    </>
  );
}

export default UserHome;
