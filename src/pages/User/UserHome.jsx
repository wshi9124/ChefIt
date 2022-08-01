import { useEffect, useState } from 'react';
import ChefInfo from './ChefInfo';
import { LoadMap } from './Map';
import SideBar from './sidebar';

function UserHome() {
  const [userData, setUserData] = useState({});
  const [chefData, setChefData] = useState([]);
  const [sidebarOpen,setSideBarOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:9292/user/home/1').then((resp) => resp.json())
      .then(setUserData);
  }, []);
  useEffect(() => {
    fetch('http://localhost:9292/chefs').then((resp) => resp.json())
      .then(setChefData);
  }, []);

  function handleViewSidebar() {setSideBarOpen(!sidebarOpen)};
  if (Object.keys(userData).length === 0 || chefData.length === 0) return <div>Map Loading...</div>;
  return (
    <>
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>
      <LoadMap chefData={chefData} longitude={userData.longitude} latitude={userData.latitude} title={userData.first_name} />
      <ChefInfo chefData={chefData} />
    </>
  );
}

export default UserHome;
