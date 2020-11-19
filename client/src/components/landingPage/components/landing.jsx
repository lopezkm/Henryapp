import React from 'react'
import Ui from "./Ui"
import Three from "./three/view"
import useStyles from "../styles"



export default function Landing({message}) {
    const classes = useStyles();
    return( 
  
    <div className={classes.bk}>
        <div 
        className={classes.landingButton}>
        <Ui
         message={message}
        />
        
        </div>
        <Three style={{width:"100vw"}}/>
    </div>
   
    )
}