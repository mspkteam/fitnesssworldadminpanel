/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// Surface Imports
// Navigation Import
import Drawer from '@material-ui/core/Drawer'
// Display Imports
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
// Input Imports
import IconButton from '@material-ui/core/IconButton'
// Layout component Imports
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
// Icons Import
import CloseIcon from '@material-ui/icons/Close'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import RoomIcon from '@material-ui/icons/Room'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventIcon from '@material-ui/icons/Event'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import { useRouter } from 'next/router'
import Link from 'next/link'

const drawerWidth = 250

const drawerMenu = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    path: '/home',
  },
  {
    title: 'Add New Admin',
    icon: <PersonIcon />,
    path: '/add-admin',
  },
  {
    title: 'Add Challenge',
    icon: <FitnessCenterIcon />,
    path: '/add-challenge',
  },
  {
    title: 'All Challenges',
    icon: <FitnessCenterIcon />,
    path: '/all-challenges',
  },
  {
    title: 'Subscribe User',
    icon: <SubscriptionsIcon />,
    path: '/subscribe-user',
  },
  {
    title: 'Events',
    icon: <EventIcon />,
    path: '/events',
  },
  {
    title: 'OCR',
    icon: <RoomIcon />,
    path: '/ocr',
  },
]

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
}))

const DrawerList = ({ classes, view, ...props }) => {
  const router = useRouter()
  console.log('again refresh')
  const [activeMenu, setActiveMenu] = React.useState(0)
  const listStyle = { marginTop: 0 }
  view === 'mobile' && (listStyle.marginTop = 0)

  const navigate = (path, index) => {
    router.push(path)
    props.onDrawerClose()
    console.log('index ', index)
    setActiveMenu(index)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
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
  )
}

const Dashboard = ({ isOpen, onCloseDrawer, ...props }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()
  const theme = useTheme()

  const onDrawerClose = () => {
    setMobileOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={isOpen}
            onClose={onCloseDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={onCloseDrawer}
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
  )
}

export default Dashboard
