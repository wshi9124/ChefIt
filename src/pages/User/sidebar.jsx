import ChefCard from './ChefCard';

function SideBar({ isOpen, toggleSidebar, chefData }) {

  const chefInfoList = chefData.map(chefcardinfo => <ChefCard key={chefcardinfo.id} chefcardinfo={chefcardinfo} />)
  const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>

      <button onClick={toggleSidebar} className="sidebar-toggle">
        Toggle Sidebar
      </button>
      <div id="grid-sidebar">
        {chefInfoList}
      </div>
    </div>
  );
};
export default SideBar;