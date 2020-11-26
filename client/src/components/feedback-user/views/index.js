import { Grid } from '@material-ui/core';
import React from 'react';
import Partner from './partner'
import { useStyles } from './styles';

const pp = [
    {name:'Marcos',lastname:'Cardozo', softSkill:0, techSkill:0, leader:0, description:'"Me cae mal xq no deja el codigo comentado"'},
    {name:'Josefina',lastname:'Mendez', softSkill:0, techSkill:0, leader:0, description:'"Me cae mal xq no deja el codigo comentado"'},
    {name:'Abad',lastname:'Salim', softSkill:0, techSkill:0, leader:0, description:'"Me cae mal xq no deja el codigo comentado"'},
    {name:'Eslefer',lastname:'Bortua', softSkill:0, techSkill:0, leader:0, description:'"Me cae mal xq no deja el codigo comentado"'},
    {name:'Aquiles',lastname:'Brinco', softSkill:0, techSkill:0, leader:0, description:'"Me cae mal xq no deja el codigo comentado"'},
    {name:'Liliana',lastname:'Velez', softSkill:0, techSkill:0, leader:0, description:'"Me cae mal xq no deja el codigo comentado"'},
  ]

const FeedbackView = ({

}) => {
  const classes = useStyles();
  console.log('pp 0 !!!!!!!!!!',pp[0])
  return (
      <Grid container direction='row' justify='center' alignItems='center' pading={10}>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner part={pp[0]}/>
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner part={pp[1]}/>
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner part={pp[2]}/>
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner part={pp[3]}/>
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner part={pp[4]}/>
        </Grid>
        <Grid item lg={4} md={3} sm={6} xs={12}>
          <Partner part={pp[5]}/>
        </Grid>
      </Grid>
  );

}
export default FeedbackView;