import React from 'react';
import ChefCard from './ChefCard';

function SideBar({ isOpen, toggleSidebar, chefData=[] }) {
  console.log(chefData);
  const chefInfoList = chefData.map((chefcardinfo) => <ChefCard key={chefcardinfo.id} chefcardinfo={chefcardinfo} />);
  const sidebarClass = isOpen ? 'sidebar open' : 'sidebar';
  const sidebuttonClass = isOpen ? 'sidebar-toggle sidebar-button-shadow' : 'sidebar-toggle sidebar-closed-button sidebar-button-shadow';
  return (
    <div className={sidebarClass}>
      <button type="button" onClick={toggleSidebar} className={sidebuttonClass}>
        {isOpen ? (
          <h1>
            {'<'}
          </h1>
        )
          : (
            <h1>
              {' '}
              {'>'}
              {' '}
            </h1>
          )}
      </button>
      <div id="grid-sidebar">
        {chefInfoList}
      </div>
    </div>
  );
}
export default SideBar;
