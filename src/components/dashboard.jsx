/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// Surface Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// Navigation Import
import Drawer from '@material-ui/core/Drawer';
// Display Imports
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// Input Imports
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
// Layout component Imports
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
// Icons Import
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import TranslateIcon from '@material-ui/icons/Translate';
import AccountCircle from '@material-ui/icons/AccountCircle';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import RoomIcon from '@material-ui/icons/Room';
import Router from 'next/router';

const drawerWidth = 250;

const drawerMenu = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    path: '/admin/dashboard/home',
  },
  {
    title: 'Add New Admin',
    icon: <PersonIcon />,
    path: '/admin/dashboard/add-admin',
  },
  {
    title: 'Challenges',
    icon: <PersonIcon />,
    path: '/admin/dashboard/challenges',
  },
  {
    title: 'Subscribe User',
    icon: <StarHalfIcon />,
    path: '/admin/dashboard/subscribe-user',
  },
  {
    title: 'Events',
    icon: <TranslateIcon />,
    path: '/admin/dashboard/events',
  },
  {
    title: 'OCR',
    icon: <RoomIcon />,
    path: '/admin/dashboard/ocr',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    border: 'none',
    background: theme.palette.primary.main,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  closeMenuButton: {
    marginTop: 8,
    marginRight: 'auto',
    marginLeft: 12,
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icon: {
    fontSize: 18,
  },
  listItem: {
    paddingTop: 12,
    paddingBottom: 12,
    color: 'white',
  },
  divider: {
    backgroundColor: '#444f59',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(2),
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
  profileLogoWrapper: {
    border: '5px solid rgba(255, 255, 255, 0.5)',
  },
  profileWrapper: {
    padding: theme.spacing(2, 0, 2, 0),
  },
  profileLogo: {
    width: 80,
    height: 80,
  },
  profileTitle: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
}));

const DrawerList = ({ classes, view, ...props }) => {
  const [activeMenu, setActiveMenu] = React.useState(0);
  const listStyle = { marginTop: 0 };
  view === 'mobile' && (listStyle.marginTop = 0);

  const navigate = (path, index) => {
    Router.push(path);
    props.onDrawerClose();
    setActiveMenu(index);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      {/* <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        className={classes.profileWrapper}
      >
        <Box borderRadius="50%" p={1} className={classes.profileLogoWrapper}>
          <Avatar
            alt="John"
            className={classes.profileLogo}
            src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
          />
        </Box>
        <Box mt={1}>
          <Typography className={classes.profileTitle}>
            @User Name
          </Typography>
        </Box>
      </Box> */}
      <List style={{ ...listStyle }}>
        {drawerMenu.map(({ title, icon, path }, index) => (
          <ListItem
            button
            className={classes.listItem}
            style={{
              backgroundColor: parseInt(activeMenu) === parseInt(index) ? '#00212b' : 'transparent',
            }}
            onClick={() => navigate(path, index)}
          >
            &nbsp;&nbsp;
            {icon}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ListItemText primary={title} color="default" />
          </ListItem>
        ))}
      </List>
      <div>
        <List className={classes.list}>
          <Divider className={classes.divider} />
          <ListItem button className={classes.listItem}>
            &nbsp;&nbsp;
            <ExitToAppIcon />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ListItemText primary="Log out" color="default" />
          </ListItem>
        </List>
      </div>
    </Box>
  );
};

const Dashboard = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              alignItems="center"
              display="flex"
              width="100%"
              className={classes.logo}
            >
              <div className={classes.avatar}>
                <Avatar variant="square" src="Logo">
                  F
                </Avatar>
              </div>
              <Typography variant="h5">Fitness World</Typography>
            </Box>
            <Box>
              <IconButton>
                <div>
                  <Avatar alt="John" src="" onClick={handleMenu} />
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem>hahaha</MenuItem>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Menu>
                </div>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            <DrawerList
              classes={classes}
              view="mobile"
              {...props}
              onDrawerClose={onDrawerClose}
            />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <DrawerList
              classes={classes}
              view="desktop"
              onDrawerClose={onDrawerClose}
            />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

export default Dashboard;
