import React from 'react';
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
import {Button, Container} from '@material-ui/core';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


export default function Cohorte() {

    const Cohorte

    const useStyles = makeStyles((theme) => ({
        containerRoot: {
            marginTop:100,
        },
        root: {
            maxWidth: 345,
            marginTop:40,
            borderRadius:15,
        },
       /*  media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        }, */
        avatar: {
            backgroundColor: theme.palette.secondary.main,
            marginRight:10,
            marginLeft:60
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
        }
    }));

    const classes = useStyles();

    return (
        <Container className={classes.containerRoot}>
            <Button variant="contained" color="secondary" className={classes.ButtonMod}>
                Nuevo Cohorte
            </Button>
            <Button variant="contained" color="secondary" className={classes.ButtonMod}>
                Ver Cohortes 
            </Button>
            
            <Card className={classes.root}>
                <CardHeader
                    title="COHORTE"
                    subheader="Iniciado: 06/11/2020"
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                        8
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
        </Container>
    );

}