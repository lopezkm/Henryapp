import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { TextField } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const labelsoftSkill = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};
const labelstechSkill = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};
const labelsleader = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

export default function Partner( props) {
  const {name, lastname, softSkill, techSkill, leader, description} = props.part

  console.log('mi imagen',props.perfil)
  const classes = useStyles();
  console.log('Mis props !!!', props)
  //console.log('Mi props',name, lastname, softSkill, techSkill, leader, description)
  const [value, setValue] = useState({
    name: name,
    lastname: lastname,
    softSkill: softSkill,
    techSkill: techSkill,
    leader: leader,
    description: description
  });
  const [hover, setHover] = useState();
  console.log('Mi Hover !!!', hover)

  const [state, setState] = useState({
    editandoDescription: false,
  });

  const startEditD = (e) => {
    setState({
      editandoDescription: true,
    });
  };
  const stopEditD = (e) => {
    setState({
      editandoDescription: false,
    });
  };
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
    setHover({
      ...hover,
      [e.target.name]: e.target.value
    })
  };
  console.log('Mi Value ', value)
  return (
    <Box className={classes.box}>
      <CardActionArea
        className={classes.root}
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}
      >
        <CardMedia
          component='img'
          height='140'
          className={classes.media}
          image={props.perfil}
          title="Imagen de alumno"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.pos}
          >
          {value.name} {' '} {value.lastname}
            
          </Typography>
          <div>
            <Typography variant="h7" color="textSecondary" component="p">
              Comentario sobre el alumno:{" "}
              {state.editandoDescription ? (
                <Tooltip title="Enviar">
                  <CheckIcon onClick={(e) => stopEditD(e)} />
                </Tooltip>
              ) : (
                <Tooltip title="Editar campo">
                  <EditIcon onClick={() => startEditD()} />
                </Tooltip>
              )}
            </Typography>
          </div>

          <div>
            <br></br>
            <div selectable={false}>
              {state.editandoDescription ? (
                <TextField
                  onChange={handleChange}
                  name="description"
                  placeholder="Ingresa una descripción"
                  id="outlined-multiline-static"
                  multiline
                  rows={3}
                  //defaultValue="campo opcional, agregar info relevante sobre compañero"
                  variant="outlined"
                />
              ) : (
                <Typography variant="h7" color="textSecondary" component="p">
                 {value.description}
                </Typography>
              )}
            </div>
          </div>
          <div>
            <br></br>

            <Typography variant="body2" color="textSecondary" component="p">
              Soft skills:
              <Rating
                name="softSkill"
                value={value.softSkill}
                precision={1}
                onChange={handleChange}
                
              />
              {value !== null && (
                <Box ml={2}>{labelsoftSkill[hover !== -1 ? hover : value]}</Box>
              )}
            </Typography>
          </div>
          <div>
          <br></br>
            <Typography variant="body2" color="textSecondary" component="p">
              Technical skills:
              <Rating
                name="techSkill"
                value={value.techSkill}
                precision={1}
                onChange={handleChange}
                
              />
              {value !== null && (
                <Box ml={2}>{labelstechSkill[hover !== -1 ? hover : value]}</Box>
              )}
            </Typography>
          </div>
          <div>
          <br></br>
            <Typography variant="body2" color="textSecondary" component="p">
              Leader:{" "}
              <Rating
                name="leader"
                value={value.leader}
                precision={1}
                onChange={handleChange}
                
              />
              {value !== null && (
                <Box ml={2}>{labelsleader[hover !== -1 ? hover : value]}</Box>
              )}
            </Typography>
          </div>
        </CardContent>
        <div>
        <br></br>
          <CardActions>
            <Button
              size="small"
              color="primary"
              variant="contained"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Enviar
            </Button>
          </CardActions>
        </div>
      </CardActionArea>
    </Box>
  );
}
