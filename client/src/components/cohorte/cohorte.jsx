import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom'
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
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {gql, useQuery, useMutation} from '@apollo/client';

const COHORTES = gql`
    query cohorts {cohorts {
        name
        startingDate
        }
    }`;

const CREATE_COHORTE = gql`
    mutation createCohort ($name: String!, $startingDate: String!) {
        createCohort(name: $name, startingDate: $startingDate) {
            name
            startingDate
            _id
        }
    }`;

export default function Cohorte() {
    
    const {loading, error, data, fetchMore} = useQuery(COHORTES);
    const [cohortes, setCohortes] = useState([]);
    const [load, setLoad] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [newCohorte, setNewCohorte] = useState({
        name:"",
        startingDate:""
    })

    const[ createCohort, res ] = useMutation(CREATE_COHORTE);

    const handleChange = (e) => {
        setNewCohorte({
            ...newCohorte,
            [e.target.name]: e.target.value
        })
    }


    async function submit(e) {
        e.preventDefault();
        const response1 = await createCohort({variables: 
        {...newCohorte}});
    }
 
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let response;

    if(loading) {
        console.log('cargando');
    } else if(error) {
        console.log('ocurrió un error');
    } else {
        console.log('ok');
        response = data.cohorts;
    }

    useEffect( () => {
        setCohortes(response);
        setLoad(false);
    })

    
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
            textAlign:'center',
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
            marginLeft:70,
            marginTop:-10,
            marginBottom:10,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.black,
            textDecoration:"none"
        },
        box: {
            display:'flex',
        },
        cohortButton: {
            marginTop:80, 
            color: theme.palette.common.white,
           '& > *': {
             margin: theme.spacing(1),
             width: '25ch',
             backgroundColor: theme.palette.secondary.main,
           },
         },
    }));

    const classes = useStyles();

    return (
        <Container className={classes.containerRoot}>
            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" color="secondary" className={classes.ButtonMod}>
                    Nuevo Cohorte
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem >
                        <form  onSubmit={(e) => { submit(e)}} noValidate autoComplete="off">
                            <TextField name="name" onChange={(e) => {handleChange(e)}} id="name" label="Nombre Cohorte" />
                            <br/>
                            <TextField name="startingDate" onChange={(e) => {handleChange(e)}}  id="startingDate" label="Inicio (dd/mm/aaaa)" />
                            <Button type="submit" onClick={handleClose} color="secondary" className={classes.ButtonMod}>Crear Cohorte</Button>
                        </form>
                    </MenuItem>
                </Menu>
            </div>  
            <Box className={classes.box}>
                {cohortes && cohortes.map( (cohorte, i) => (
                    <Grid key={i} item xs={3.5}>
                        <Card className={classes.root}>
                            <CardHeader
                                title={`Cohorte: ${cohorte.name}`}
                                subheader={`Inicio: ${cohorte.startingDate}`}
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                    C-{i}
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
                                <Link to="/root/addStudents">
                                    <Button variant="contained" color="secondary" className={classes.ButtonMod}>
                                        Agregar Alumnos
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Box>
        </Container>
    );
}