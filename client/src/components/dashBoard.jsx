import React from 'react';
import {Container, Button, Grid} from '@material-ui/core';
import Logo from './home/images/logoHenry.jpeg';
import {Link} from 'react-router-dom';



export default function DashBoard() {
    
    return(
        <Container maxWidth={false} className='dashBoard-container'>
            <div className='div-title-logo'>
                <Link to= '/user/home'>
                    <img  src={Logo} alt='Logo-Henry' className='dashBoard-container'/>
                </Link>
                <h1>ADMINISTRACION DE OPCIONES</h1>
            </div>
            <Grid className='dashBoard-container-items' 
            container justify="space-around" alignItems="center">
                <h4>COHORTES</h4>
                <Grid className='items-button' item xs={12} md={6} lg={3}>
                    <Button variant="outlined">CREAR COHORTE</Button>
                </Grid>
                <Grid className='items-button' item xs={12} md={6} lg={3}>
                    <Button variant="outlined">MODIFICAR COHORTE</Button>
                </Grid>
                <Grid className='items-button' item xs={12} md={6} lg={3}>
                    <Button variant="outlined">ELIMINAR COHORTE</Button>
                </Grid>
            </Grid>
            <Grid className='dashBoard-container-items' container 
            justify="space-around" alignItems="center">
                <h4>GRUPOS S.U.</h4>
                <Grid className='items-button' item xs={12} md={6} lg={3}>
                    <Button variant="outlined">CREAR GRUPO S.U.</Button>
                </Grid>
                <Grid className='items-button' item xs={12} md={6} lg={3}>
                    <Button variant="outlined">MODIFICAR GRUPO S.U.</Button>
                </Grid>
                <Grid className='items-button' item xs={12} md={6} lg={3}>
                    <Button variant="outlined">ELIMINAR GRUPO S.U.</Button>
                </Grid>
            </Grid>
            <Grid className='dashBoard-container-items' container
            justify="space-around" alignItems="center">
                <h4>EQUIPOS P.P.</h4>
                <Grid className='items-button' item xs={12} md={6} lg={3}>
                    <Button variant="outlined">CREAR EQUIPO P.P.</Button>
                </Grid>
                <Grid className='items-button'item xs={12} md={6} lg={3}>
                    <Button variant="outlined">MODIFICAR EQUIPO P.P.</Button>
                </Grid>
                <Grid className='items-button' item xs={12} md={6} lg={3}>
                    <Button variant="outlined">ELIMINAR EQUIPO P.P.</Button>
                </Grid>
            </Grid>
        </Container>
    )
}