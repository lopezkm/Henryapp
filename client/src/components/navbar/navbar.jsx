import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { AppBar, ListItemIcon, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBoxSharpIcon from "@material-ui/icons/AccountBoxSharp";
import FilterNoneSharpIcon from "@material-ui/icons/FilterNoneSharp";
import HelpOutlineSharpIcon from "@material-ui/icons/HelpOutlineSharp";
import Logo from "../home/images/logoHenry.jpeg";
import { withStyles } from "@material-ui/core/styles";
import DrawerNavbar from "./drawer";
import { useQuery, gql } from "@apollo/client";

const GET_PROFILE = gql`
  query me {
    me {
      inscriptionDate
      name
      lastname
      email
      rol
      title
      shortDescription
      description
      gitHubLink
      link
    }
  }
`;

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.black,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  tittle1: {
    flexGrow: 1,
  },
}));

const NavBar = (theme) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElP, setAnchorElP] = React.useState(null);

  const open = Boolean(anchorEl);

  const [abrir, setAbrir] = React.useState(false);

  const { loading, error, data } = useQuery(GET_PROFILE);

  const handleDrawerOpen = () => {
    setAbrir(true);
  };

  const handleDrawerClose = () => {
    setAbrir(false);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorElP(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElP(null);
  };

  const handleCloseLogin = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar className="navbar">
        <Toolbar>
          {/* <IconButton>
            <MenuIcon />
          </IconButton> */}
          <Link to="/root/home" className={classes.tittle1}>
            <img
              src={Logo}
              alt="Logo-Henry"
              style={{ width: "60px", height: "60px", paddingTop: "5px" }}
            />
          </Link>
          <DrawerNavbar />
          {/* <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            Panel Admin
          </Button> */}
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorElP}
            keepMounted
            open={Boolean(anchorElP)}
            onClose={handleClose}
          >
            {/* <Link to="/root/cohorte">
              <StyledMenuItem>
                <ListItemIcon>
                  <FilterNoneSharpIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText onClick={handleClose} primary="Cohortes" />
              </StyledMenuItem>
            </Link> */}
            {/* <Link to="/root/student">
              <StyledMenuItem>
                <ListItemIcon>
                  <AccountBoxSharpIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText onClick={handleClose} primary="Alumnos" />
              </StyledMenuItem>
            </Link> */}
            {/* <Link to="/root/invite">
              <StyledMenuItem>
                <ListItemIcon>
                  <HelpOutlineSharpIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText onClick={handleClose} primary="Invitar alumnos" />
              </StyledMenuItem>
            </Link> */}
          </StyledMenu>
          <Typography>
            <Button variant="text" color="secondary">
              {data ? (
                data.me.name
              ) : (
                <Link
                  to="/root/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  "Login"{" "}
                </Link>
              )}
            </Button>
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleCloseLogin}
          >
            <MenuItem onClick={handleCloseLogin}>
              {/*AGREGAR text-decoration: none;
color: black;*/}
              <Link to="/root/profile" className={classes.tittle1}>
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseLogin}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
