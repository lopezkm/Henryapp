import { Grid } from '@material-ui/core';
import React from 'react';
import Partner from './partner'
import { useStyles } from './styles';

const pp = [
    {name:'Marcos',lastname:'Cardozo', softSkill:0, techSkill:0, leader:false, description:''},
    {name:'Josefina',lastname:'Mendez', softSkill:0, techSkill:0, leader:false, description:''},
    {name:'Abad',lastname:'Salim', softSkill:0, techSkill:0, leader:false, description:''},
    {name:'Eslefer',lastname:'Bortua', softSkill:0, techSkill:0, leader:false, description:''},
    {name:'Aquiles',lastname:'Brinco', softSkill:0, techSkill:0, leader:false, description:''},
    {name:'Liliana',lastname:'Velez', softSkill:0, techSkill:0, leader:false, description:''},
  ]

const FeedbackView = ({

}) => {
  const classes = useStyles();

  return (
      <Grid container direction='row' justify='center' alignItems='center' pading={10}>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner />
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner />
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner />
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner />
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner />
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner />
        </Grid>
      </Grid>
  );

}
export default FeedbackView;