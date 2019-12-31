import React, {useState} from "react";


const HomeView = () => {
    const [selectedView, changeView]=useState('home')

  return (
    <div>
      <div className="sideNav">
        <p onClick={()=>changeView('home')}>Home</p>
        <p onClick={()=>changeView('branch')}>branch</p>
        <p onClick={()=>changeView('company')}>company</p>
        <p onClick={()=>changeView('settings')}>settings</p>
      </div>
<div style={{
    textAlign:'center'
}}>
{/* insert components here */}
{selectedView==='home'&&<h1>home</h1>}
{selectedView==='branch'&&<h1>branch</h1>}
{selectedView==='company'&&<h1>company</h1>}
{selectedView==='settings'&&<h1>settings</h1>}

</div>


    </div>
  );
};

export default HomeView;
