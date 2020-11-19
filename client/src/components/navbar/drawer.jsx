import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ListItemText from '@material-ui/core/ListItemText';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function DrawerNavbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    //top: false,
    left: false,
    //bottom: false,
    //right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* <Typography className={classes.root}> */}
  
  {/* <Link href="#" onClick={preventDefault} variant="body2">
    {'variant="body2"'}
  </Link> */}
        {/* <Router>
        <div> */}
        <Link 
        to="/root/cohorte" 
        color="grey"
        style={{ textDecoration: 'none', color: 'black' }}
        >
        <ListItem button>
        <ListItemIcon><FolderSharedIcon /></ListItemIcon>
        <h4>Cohortes</h4>
        </ListItem>
        </Link>
        <Link 
        to="/root/student"
        color="primary"
        style={{ textDecoration: 'none', color: 'black' }}
        >
        <ListItem button>
        <ListItemIcon><AccountBoxIcon/></ListItemIcon>
        <h4>Alumnos</h4>
        </ListItem>
        </Link>
        {/* </div>
        </Router> */}
        {/* </Typography> */}
      </List>
      <Divider />
      <List>
        {/* {['Invitar alumnos'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <MailIcon /> : <InboxIcon /> }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <Link to="/root/invite"
        style={{ textDecoration: 'none', color: 'black' }}
        >
        <ListItem button>
        <ListItemIcon><ContactMailIcon /></ListItemIcon>
        <h4>Invitar alumnos</h4>
        </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
