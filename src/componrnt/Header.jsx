import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { arr2 } from './ram';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MoreVertIcon from '@mui/icons-material/MoreVert';

let a = "text-orange-500 pt-4 underline transition-all duration-750";
let b = "text-white pt-4";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'about','contact','more'].map((text, index) => (
          <ListItem key={text} disablePadding>
          
            

            <NavLink  className={({isActive})=> `${isActive?" bg-slate-300 w-full  ":""}`} to = {`/${text==="Home"?"":text}`}> <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon/>}
                {index === 1 && <InfoIcon />}
                {index === 2 && <ContactPageIcon />}
                {index === 3 && <MoreVertIcon />}

              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton></NavLink>
         </ListItem>
        ))}
      </List>
     
    </Box>
  );

let [n,setN] = useState(arr2.length);

setInterval(() => {
  setN(arr2.length)
}, 200);


  return (
    <div className='fixed w-full z-50 flex justify-between   font-bold bg-gray-600 rounded-md  text-white'>
      <div className="sm:hidden">
     
      
        <Toolbar  onClick={toggleDrawer(true)}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        
        </Toolbar>
    
 
        <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      </div>


      <div className="space-x-4 sm:space-x-10 hidden sm:flex   font-bold bg-gray-600 rounded-md  text-white">
       
      
       <NavLink to="/" className={({isActive})=> `${isActive?a:b} pl-4`} >Home</NavLink>
       <NavLink to="/about" className={({isActive})=> `${isActive?a:b}`}>About </NavLink>
       <NavLink to="/contact" className={({isActive})=> `${isActive?a:b}`}>Contact </NavLink>
       <NavLink to="/more" className={({isActive})=> `${isActive?a:b}`}>More </NavLink>
      

      </div>

   
      <NavLink to="/cart" className={({isActive})=> `${isActive?a:b} -mt-4 pt-0 `}>
       <MenuItem>
        <IconButton size="large"  color="inherit">
          <Badge badgeContent={n} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        
      </MenuItem>
         </NavLink>
      
    </div>
  )
}
