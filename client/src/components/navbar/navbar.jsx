import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Icon, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import {AppBar} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Logo from '../home/images/logoHenry.jpeg';


const useStyles = makeStyles((theme) => ({
    tittle1: {
      flexGrow: 1,
    },
    }));


const NavBar = (theme)=>{
    const classes= useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    return(
        <div>
        <AppBar className='navbar'> 
        <Toolbar>
            <IconButton>
              <MenuIcon/>
              </IconButton>
            <Link to= '/user/home'  className={classes.tittle1}>
                    <img src={Logo} alt='Logo-Henry'style={{ width: "60px", height: "60px", paddingTop:'5px'}}/>
                </Link>
                     <Link to ='/user/dashboard' >
                    <Button variant='text'  color='secondary' >
                        Dash-Board
                    </Button>                    
                    </Link>

                    <Link to= '/user/login' >
                    <Button variant='text' color='secondary' >
                        Login
                    </Button>
                    </Link>
                    <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
                    </Toolbar>
                    </AppBar>
        </div>
    )
}

export default NavBar