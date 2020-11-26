import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { TextField, Input } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

export default function Partner() {
  const classes = useStyles();
  const [value, setValue] = useState();
  const [hover, setHover] = useState();
  const [values, setValues] = useState(); //({ description: user.user.description });
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
  const handleChange = () => {};

  return (
    <Box className={classes.box}>
      <Card
        className={classes.root}
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.pos}
          >
            Pedro Ramirez
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
                  onChange={(e) => handleChange(e)}
                  name="Description"
                  placeholder="Ingresa una descripción"
                  id="outlined-multiline-static"
                  multiline
                  rows={3}
                  defaultValue="campo opcional, agregar info relevante sobre compañero"
                  variant="outlined"
                />
              ) : (
                <Typography variant="h7" color="textSecondary" component="p">
                  "Me cae mal xq no deja el codigo comentado"
                </Typography>
              )}
            </div>
          </div>
          <div>
            <br></br>

            <Typography variant="body2" color="textSecondary" component="p">
              Soft skills:
              <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Typography>
          </div>
          <div>
            <Typography variant="body2" color="textSecondary" component="p">
              Technical skills:
              <Rating
                name="hover-feedback1"
                value={value}
                precision={1}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Typography>
          </div>
          <div>
            <Typography variant="body2" color="textSecondary" component="p">
              Leader:{" "}
              <Rating
                name="hover-feedback2"
                value={value}
                precision={1}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Typography>
          </div>
        </CardContent>
        <div>
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
      </Card>
    </Box>
  );
}
