import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import Logo from '../home/images/logoHenry.jpeg';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import {Button, Container, Box, Grid} from '@material-ui/core';
/* import { graphql } from 'react-apollo'; */
import {gql, useQuery} from '@apollo/client';



const Cohortes = gql`
    {cohorts {
            name
            startingDate
        }
    }`




export default function Cohorte() {
    
    const {loading, error, data} = useQuery(Cohortes);
    const [cohortes, setCohortes] = useState([]);

    if(loading) {
        console.log('cargando');
    } else if(error) {
        console.log('ocurrió un error');
    } else {
        console.log('ok');
        var response = data.cohorts;
    }

    const getCohortes = () => {
        setCohortes(response);
    }
    
    const useStyles = makeStyles((theme) => ({
        containerRoot: {
            marginTop:100,
        },
        root: {
            maxWidth: 345,
            marginTop:40,
            borderRadius:15,
            marginBottom: 30,
            marginRight:10,
            marginLeft:10
        },
       /*  media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        }, */
        avatar: {
            backgroundColor: theme.palette.secondary.main,
            marginRight:10,
            marginLeft:30
        },
        divider: {
            height: 28,
            margin: 4,
        },
        dividerH: {
            height: 2,
            marginBottom:6,
            marginTop:-20,
        },
        action: {
            marginTop:-20,
            marginLeft: 10,
            marginRight:10
        },
        button: {
            fontSize: 10,
            marginLeft: 2,
            color: theme.palette.common.black,
        },
        footer: {
            textAlign: 'center',
            color: theme.palette.common.black,
        },
        info: {
            color: theme.palette.common.black,
            marginBottom: 2,
        },
        buttonI: {
            marginBottom: -10,
            marginTop: -10,
        },
        ButtonMod: {
            marginLeft:100,
            marginTop:-10,
            marginBottom:10
        },
        box: {
            display:'flex',
            wrap: 'no-wrap',
            justifyContent: 'space-beteewn'
        }
    }));

    const classes = useStyles();

    return (
        <Container className={classes.containerRoot}>
            <Button variant="contained" color="secondary" className={classes.ButtonMod}>
                Nuevo Cohorte
            </Button>
            <Button onClick={getCohortes} variant="contained" color="secondary" className={classes.ButtonMod}>
                Ver Cohortes 
            </Button>
            <Box className={classes.box}>
                {cohortes && cohortes.map( cohorte => (
                    <Grid item xs={3.5}>
                        <Card className={classes.root}>
                            <CardHeader
                                title={`Cohorte: ${cohorte.name}`}
                                subheader={`Inicio: ${cohorte.startingDate}`}
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                    C
                                    </Avatar>
                                }
                            />
                            {/* <CardMedia
                                className={classes.media}
                                image= {Logo}
                                title="Imagen"
                            /> */}
                            <CardContent>
                                <Divider className={classes.dividerH} orientation="horizontal" />
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.info}>
                                    <IconButton aria-label="settings" className={classes.buttonI}>
                                        <PersonIcon />  
                                    </IconButton> Instructor: Agustin Amani
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.info}>
                                    <IconButton aria-label="settings" className={classes.buttonI}>
                                        <PeopleIcon />  
                                    </IconButton> PMs: Ricardo Freire y Marcelo Quiroga
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.info}>
                                    <IconButton aria-label="settings" className={classes.buttonI}>
                                        <LocalLibraryIcon /> 
                                    </IconButton> Alumnos: 175
                                </Typography>
                            </CardContent>
                            <CardContent>
                            <Divider className={classes.dividerH} orientation="horizontal" />
                                <Typography component="p" className={classes.footer}>
                                    SPRINTS 
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing className={classes.action}>
                                <Typography  component="p" className={classes.info}>
                                    Boot-Camp:
                                </Typography>
                                <IconButton aria-label="share" className={classes.button}>
                                    1- <LibraryBooksIcon />
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton aria-label="share" className={classes.button}>
                                    2- <LibraryBooksIcon />
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton aria-label="share" className={classes.button}>
                                    3- <LibraryBooksIcon />
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton aria-label="share" className={classes.button}> 
                                    4- <LibraryBooksIcon />
                                </IconButton>
                            </CardActions>
                            <CardActions disableSpacing className={classes.action}>
                                <Typography component="p" className={classes.info}>
                                    Henry-Labs:
                                </Typography>
                                <IconButton aria-label="share" className={classes.button}>
                                    EC - <LibraryBooksIcon />
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton aria-label="share" className={classes.button}>
                                    PF - <LibraryBooksIcon />
                                </IconButton>
                                <Divider className={classes.dividerH} orientation="horizontal" />
                            </CardActions>
                            <CardActions>
                                <Button variant="contained" color="secondary" className={classes.ButtonMod}>
                                    Modificar
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Box>
        </Container>
    );
}