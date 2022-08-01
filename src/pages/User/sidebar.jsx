
function SideBar({isOpen,toggleSidebar}) {
    const sidebarClass = isOpen ? "sidebar open" : "sidebar";
    return (
      <div className={sidebarClass}>
        <div> I slide into view </div>
        <div> Me Too! </div>
        <div> Me Three! </div>
        <button onClick={toggleSidebar} className="sidebar-toggle">
          Toggle Sidebar
        </button>
      </div>
    );
  };
  export default SideBar;