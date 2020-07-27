/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// Surface Imports
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
// Input Imports
import IconButton from '@material-ui/core/IconButton'
// Layout component Imports
import Box from '@material-ui/core/Box'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  icon: {
    fontSize: 18,
  },
  avatar: {
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(2),
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
}))
const Appbar = ({ isOpenDrawer }) => {
  console.log('IN App Now')
  // const [mobileOpen, setMobileOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles()

  const handleDrawerToggle = () => {
    isOpenDrawer()
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
    </div>
  )
}
export default Appbar
