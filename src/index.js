import React from 'react';
import ReactDOM from 'react-dom/client';
//import './style.css'

const root=ReactDOM.createRoot(document.getElementById('root'));
const date=new Date();
const day=date.getDate();
const month=date.getMonth();
const year=date.getFullYear();

const cardTitle="CallFamily";
const cardDesc="welcome to react family....start your journey.";


root.render(
<div>
<h1 className='heading'>To Do App</h1>
<div className='card'>
<h2 className='cardtitle'> {cardTitle}</h2>
<h3 className='cardDesc'> {cardDesc}</h3>
<p className='footer'>{day+"/"+month+"/"+year}</p>

</div>

</div>
    
  //<app/>
);
