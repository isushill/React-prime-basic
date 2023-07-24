import React from 'react'
import { Menubar } from 'primereact/menubar'
import { Link } from 'react-router-dom';


const MenuBar = () => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => navigateTo('/Counter'),
    },
    {
      label: 'About',
      icon: 'pi pi-info',
      command: () => navigateTo('/Form'),
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      command: () => navigateTo('/UserList'),
    },
  ];

  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <Menubar
      className='navbar' // Use PrimeReact's classname for transparent navbar
      start={<Link to="/"></Link>} // Replace with your logo or text
      model={items}
    />
  );
};

export default MenuBar;