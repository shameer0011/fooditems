import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./header_style";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu'
const Header = ({ gotoDashbord }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const gotoLogout = () => {
    gotoDashbord(gotoLogout);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    />
  );

  return (
    <>
    <div>
       <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"white"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography  className={classes.title}>
           <Link to="/" style={{textDecoration:"none",color:"black"}}>HOME</Link> 
          </Typography>
          <Typography  className={classes.title}>
            <Link to="/home" style={{textDecoration:"none",color:"black"}}> ABOUT US</Link> 
          </Typography>
          <Button className={classes.title} style={{backgroundColor:"black",width:"5px"}}>
          <Link to="/completed" style={{textDecoration:"none",color:"white"}}> SLECT YOUR PLANS</Link> 
          </Button>
          <Button color="black">Sign in</Button>
          <Button color="black">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
    </div>
    </>
  );
};
export default Header;
