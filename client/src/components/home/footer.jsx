import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Logo from './images/logoHen.png'
import {useStyles} from '../footer/footerStyle'

export default function Footer() {
  const classes = useStyles();

  return (
    <div >
      <CssBaseline />
        <footer className={classes.footer}>
          <div className={classes.links} >

            <div className={classes.column}>
              <img src={Logo} style={{ width: '200px' }} />
              <h2>Invertimos en tu desarrollo</h2>
            </div>
            <div className={classes.column} >
              <h2 style={{ position: 'relative', top: '4px' }}> My acount</h2>
              <div style={{ position: 'relative', right: '20px', top: '-20px', fontSize: '1.2em', lineHeight: '1.5'}}>
                <ul style={{ listStyle: 'none' }}>
                  <li>Login</li>
                  <li>Register</li>
                </ul>
              </div>
            </div>
            <div className={classes.column}>
              <h2 style={{ position: 'relative', top: '6px' }} >My data</h2>
              <div className={classes.columnList} >
                <div style={{ width: '50%', fontSize: '1.2em' }}>
                  <ul style={{ listStyle: 'none' }}>
                    <li>My Cohort </li>
                    <li>My colleagues </li>
                    <li>My group</li>
                  </ul>
                </div>
                <div style={{ width: '50%', fontSize: '1.2em' }}>
                  <ul style={{ listStyle: 'none' }}>
                    <li>My user</li>
                    <li>My table</li>
                    <li>My teacher</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.reserved}>
            <hr style={{ width: '70%', borderWidth: '0.1px' }} />
            <div style={{ color: 'white', textAlign: 'center', position: 'relative', bottom: '6px' }}> <p>@todos los derechos reservados: 2020</p> </div>
          </div>
        </footer>
        
    </div>
  );
}


