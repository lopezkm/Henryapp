import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Icon, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import {AppBar} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles(theme => ({
//     offset: theme.mixins.toolbar
// }))

const NavBar = ()=>{
    return(
        <div>
        <AppBar className='navbar'> 
        <Toolbar>
            <IconButton><MenuIcon/></IconButton>
                    <Link to ='/user/dashboard' >
                    <Button variant='text' color='secondary' link='white'>
                        Dash-Board
                    </Button>                    
                    </Link>
                    <Button variant='text' color='secondary' >
                        Login
                    </Button>
                    </Toolbar>
                    </AppBar>
        </div>
    )
}

export default NavBar