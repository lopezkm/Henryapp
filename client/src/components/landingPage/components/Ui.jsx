import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import useStyles from "../styles"

export default function Ui ({message}){
    const classes = useStyles();
    return(
        <Link to='/root/login'
        className={classes.landingButton}>
        <Button 
         variant="contained"
         color="primary">
       {message}
        </Button>
        </Link> 
    )    
}