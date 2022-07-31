// import { useEffect, useState } from 'react';
// import { LoadMap } from './Map';

// function UserHome() {
//   const [userData, setUserData] = useState({});
//   const [chefData, setChefData] = useState([]);
//   useEffect(() => {
//     fetch('http://localhost:9292/user/home/1').then((resp) => resp.json())
//       .then(setUserData);
//   }, []);
//   useEffect(() => {
//     fetch('http://localhost:9292/chefs').then((resp) => resp.json())
//       .then(setChefData);
//   }, []);

//   if (Object.keys(userData).length === 0) return <div>Map Loading...</div>;
//   if (Object.keys(chefData).length === 0) {
//     return (
//       <LoadMap longitude={userData.longitude} latitude={userData.latitude} title={userData.first_name} />
//     );
//   }
//   return (
//     <LoadMap
//       chefData={chefData}
//       longitude={userData.longitude}
//       latitude={userData.latitude}
//       title={userData.first_name}
//     />
//   );
// }

// export default UserHome;
