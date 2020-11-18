import React from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const SearchStudents = ({
    handleChange,
}) => {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Paper component="form" className={classes.rootS}>
                <IconButton className={classes.iconButton} aria-label="menu">
                    <PermIdentityIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <InputBase
                    className={classes.input}
                    placeholder="Buscar alumno"
                    inputProps={{ 'aria-label': 'Buscar alumno' }}
                    onChange={handleChange}
                />
                <IconButton
                    className={classes.iconButton}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
};

export default SearchStudents;