import ChefCard from "./ChefCard";

function ChefInfo({ chefData = {} }) {
  console.log(chefData);
  const chefInfoList = chefData.map(chefcardinfo=><ChefCard key ={chefcardinfo.id}chefcardinfo={chefcardinfo}/>)
  return (
    <div id ="chef-bar-info">
        {chefInfoList}
    </div>
  );
}

export default ChefInfo;
