// import React from 'react';
// import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import lightBlue from '@material-ui/core/colors/lightBlue';


// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';



// const Nav = () => (
//   <div className="navbar">
//     <div>
//       <ul>
//         <li>
//           <Link to="/user">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/rss">
//             Add RSS
//           </Link>
//         </li>
//         <li>
//           <Link to="/my">
//             My RSS
//           </Link>
//         </li>
//         <li>
//           <Link to="/list">
//             RSS
//           </Link>
//         </li>
//         <li>
//           <Link to="/home">
//             Logout
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// );

// export default Nav;





// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     height: 430,
//     zIndex: 1,
//     overflow: 'hidden',
//     position: 'relative',
//     display: 'flex',
    
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 36,
//   },
//   hide: {
//     display: 'none',
//   },
//   drawerPaper: {
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: 'hidden',
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing.unit * 7,
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing.unit * 9,
//     },
//   },
//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing.unit * 3,
//   },
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//   },
//   icon: {
//     margin: theme.spacing.unit * 2,
 
//   },
// });



// class Nav extends React.Component {
//   state = {
//     open: false,
//   };

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

 




//   render() {
//     const { classes, theme } = this.props;
//     return (
      
//       <div className={classes.root}>
//         <AppBar
//           position="fixed"
//           className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
//         >
//           <Toolbar disableGutters={!this.state.open}>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={this.handleDrawerOpen}
//               className={classNames(classes.menuButton, this.state.open && classes.hide)}
//             >
//               <MenuIcon />
                            
//               <div className={classes.root}>
//               <List component="nav">
//                 <ListItem button component="a" href="/user">
//                   <ListItemText primary="home" />
//                 </ListItem>
//                 <ListItem button component="a" href="/rss">
//                   <ListItemText primary="add RSS" />
//                 </ListItem>
//                 <ListItem button component="a" href="/my">
//                   <ListItemText primary="my RSS" />
//                 </ListItem>
//                 <ListItem button component="a" href="/list">
//                   <ListItemText primary="list" />
//                 </ListItem>
//                 <ListItem button component="a" href="/home">
//                   <ListItemText primary="logout" />
//                 </ListItem>
//               </List>
//               </div>

              
//             </IconButton>
//             <Typography variant="title" color="inherit" noWrap>
//             <div dangerouslySetInnerHTML={{__html:'< Hacker_Feeds />'}}/>
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
//           classes={{
//             paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
//           }}
//           open={this.state.open}
//         >

//             <IconButton onClick={this.handleDrawerClose}>
//               {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//             </IconButton>

//           <Divider />

//         </Drawer>
//           <main className={classes.content}>
//           <div className={classes.toolbar} />
//           <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
//         </main>
//       </div>
//     );
//   }
// }

// Nav.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(Nav);





// const styles = theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: lightBlue,
//   },
// });

// const Nav = (props) => {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <List component="nav">
//         <ListItem button component="a" href="/user">
//           <ListItemText primary="home" />
//         </ListItem>
//         <ListItem button component="a" href="/rss">
//           <ListItemText primary="add RSS" />
//         </ListItem>
//         <ListItem button component="a" href="/my">
//           <ListItemText primary="my RSS" />
//         </ListItem>
//         <ListItem button component="a" href="/list">
//           <ListItemText primary="list" />
//         </ListItem>
//         <ListItem button component="a" href="/home">
//           <ListItemText primary="logout" />
//         </ListItem>
//       </List>
//     </div>
//   )
// };

// Nav.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Nav); 




import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Hidden from '@material-ui/core/Hidden';



import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = 150;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  // appFrame: {
  //   height: 430,
  //   zIndex: 1,
  //   overflow: 'hidden',
  //   position: 'fixed',
  //   // display: 'flex',
  //   width: '100%',
  // },
  appBar: {
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  // 'appBarShift-right': {
  //   marginRight: drawerWidth,
  // },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
  },
  // drawerHeader: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   padding: '0 8px',
  //   ...theme.mixins.toolbar,
  // },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  // 'content-right': {
  //   marginRight: -drawerWidth,
  // },
  // contentShift: {
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  'contentShift-left': {
    marginLeft: 0,
  },
  // 'contentShift-right': {
  //   marginRight: 0,
  // },
});

class Nav extends React.Component {
  state = {
    open: false,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <div className={classes.root}>
          <List component="nav">
            <ListItem button component="a" href="/user">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component="a" href="/rss">
              <ListItemText primary="ADD RSS" />
            </ListItem>
            <ListItem button component="a" href="/my">
              <ListItemText primary="MY RSS" />
            </ListItem>
            <ListItem button component="a" href="/list">
              <ListItemText primary="My Favorites" />
            </ListItem>
            <ListItem button component="a" href="/home">
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
        {/* <Divider /> */}
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" styles="text-align: center" color="inherit" noWrap>
              {/* <div dangerouslySetInnerHTML={{__html:'< Hacker_Feeds / >'}}/> */}
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
          {before}
          {after}
        </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Nav);