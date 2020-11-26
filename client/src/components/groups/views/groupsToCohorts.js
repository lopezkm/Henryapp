import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  formControl: {
    minWidth: 120,
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});
//const [group, setGroup] = useState();

const handleChange = () => {
  //setGroup(event.target.value);
};
const handleSubmit = () => {
  //setGroup(event.target.value);
};
export function GroupsToCohorts() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "100px",
        maxWidth: "300px",
      }}
    >
      <CardContent>
        <Typography
          className={classes.title}
          variant="h2"
          color="textPrimary"
          gutterBottom
        >
          Asignar Grupos PP{" "}
        </Typography>
        <br></br>
        <Typography variant="h4" component="h2"></Typography>
        <Typography className={classes.pos} color="textPrimary">
          Cohorte N X
        </Typography>
        <Typography variant="body2" component="p">
          Grupos
        </Typography>
        <div>
          {" "}
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Select
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth-label"
              value={""}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Grupo 1</MenuItem>
              <MenuItem value={20}>Grupo 2</MenuItem>
              <MenuItem value={30}>Grupo 3</MenuItem>
            </Select>
            <br></br>
          </FormControl>
        </div>
        <br></br>
        <div>
          <Button
            onSubmit={handleSubmit}
            variant="contained"
            color="primary"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Ok
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
