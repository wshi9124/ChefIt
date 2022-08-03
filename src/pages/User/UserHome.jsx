import React, { useEffect, useState } from 'react';
import { LoadMap } from './Map';
import SideBar from './sidebar';
import SearchBar from './searchbar';
import Select from './Select';
import Spinner from '../../commonComponents/spinner';

import compareprice from './compareprice';

import Logo from '../../commonComponents/Logo';
import ChefNavBar from '../Chef/ChefNavbar';

function UserHome() {
  const [userData, setUserData] = useState({});
  const [chefData, setChefData] = useState([]);
  const [sidebarOpen,setSideBarOpen] = useState(false);
  const [searchChef,setsearchChef] = useState([])
  const [text,setText] = useState("")

  const [location,setLocation] = useState({})
  const [zoom,setZoom] = useState(13)

  const [select,setSelect] = useState("id")

  useEffect(() => {
    fetch('http://localhost:9292/user/home/1').then((resp) => resp.json())
      .then(data=> {
        setUserData(data)
        setLocation({lat:data.latitude,lng:data.longitude})
      })
  }, []);
  useEffect(() => {
    fetch('http://localhost:9292/chefs').then((resp) => resp.json())
      .then(data=> {
        setChefData(data)
        setsearchChef(data)
          });
  }, []);

  const filterChef = searchChef.filter(chef => {
    if (!text) return true
    for (let attr in chef) {
      if (chef[attr]) { 
        if (chef[attr].toString().includes(text)) return true
      }
    }
    return false
  })
  const sortChef = select === "id" ? filterChef : filterChef.sort((a,b)=> {
    if (select==="chef_price_asc") {
      return compareprice(a.chef_price,b.chef_price,"asc")
    }
    else if(select==="chef_price_desc") {
      return compareprice(a.chef_price,b.chef_price,"desc")
    }
    else {
      if (a[select] < b[select]) return -1
      else if (a[select] > b[select]) return 1
      else return 0
    }
  })

  function selectcallback(select) {
    setSelect(select)
  }

  function textcallback(text) {
      setText(text)
  }
  function searchcallback() {
    // for (let i = filterChef.length-1; i>=0; i--) {
    //   let index = filterChef[i].id-1
    //   let ele = chefData[index]
    //   filterChef.splice(index,1)
    //   filterChef.unshift(ele)
    // }
       const {latitude,longitude} = filterChef[0]
       setLocation({lat:latitude,lng:longitude})
      setZoom(13)
  }
  function handleViewSidebar() {setSideBarOpen(!sidebarOpen)};
  if (Object.keys(userData).length === 0 || chefData.length === 0) return <><Logo/><ChefNavBar/><Spinner text="Server Loading..."/></>;
  return (
    <div id="user-home">
      <Logo/>
      <ChefNavBar/>
      <SideBar textcallback={textcallback} isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} chefData={sortChef}/>
      <LoadMap zoom={zoom} setLocation={setLocation} location={location} chefData={chefData} 
      longitude={userData.longitude} latitude={userData.latitude} title={userData.first_name} />
      <SearchBar text={text}textcallback={textcallback} searchcallback={searchcallback}/>
      <Select select={select} selectcallback={selectcallback}/>
    </div>
  );
}

export default UserHome;
