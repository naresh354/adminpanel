import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, Divider, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const pages = ['Dashboard', 'Setup', 'Product', 'Accounts', 'Reports'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [selectedValue, setSelectedValue] = useState('Dashboard');
 
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();



  return (
    <>
    <AppBar position="relative" sx={{ background: "#ffffff", boxShadow: "none"}}>
     
     <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
      
       <Box sx={{ flexGrow: 0, ml: 2, display: { xs: 'none', md: 'flex' } }}>
         {pages.map((page) => (
           <Typography
             key={page}
             onClick={() => { setSelectedValue(page); navigate(`/${page}`) }}
             sx={{ my: 2, ml: 2.2, cursor: "pointer", fontWeight: "600", fontSize: "0.8rem",  display: 'block',color: selectedValue === page ? 'blue' : '#111', }}
           >
             {page}
           </Typography>
         ))}
       </Box>

       <Box sx={{ flexGrow: 0, mr: 2 }}>
         <Tooltip title="Open settings">
           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, float: "right" }}>
            <NotificationsNoneIcon sx={{ mr: 1 }}/>
             <Avatar sx={{ height: "35px", width: "35px" }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
           </IconButton>
         </Tooltip>
         <Menu
           sx={{ mt: '45px' }}
           id="menu-appbar"
           anchorEl={anchorElUser}
           anchorOrigin={{
             vertical: 'top',
             horizontal: 'right',
           }}
           keepMounted
           transformOrigin={{
             vertical: 'top',
             horizontal: 'right',
           }}
           open={Boolean(anchorElUser)}
           onClose={handleCloseUserMenu}
         >
           {settings.map((setting) => (
             <MenuItem key={setting} onClick={handleCloseUserMenu}>
               <Typography textAlign="center">{setting}</Typography>
             </MenuItem>
           ))}
         </Menu>
       </Box>
     </Toolbar>
  
 </AppBar>
 <Divider />
    </>
  );
}
export default ResponsiveAppBar;