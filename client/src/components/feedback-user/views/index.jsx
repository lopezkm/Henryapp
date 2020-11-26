
import { Grid } from '@material-ui/core';
import React from 'react';
import Partner from './partner'
import { useStyles } from './styles';

const pp = [
  { name: 'Marcos', lastname: 'Cardozo', softSkill: 0, techSkill: 0, leader: 0, description: '"Me cae mal xq no deja el codigo comentado"' },
  { name: 'Josefina', lastname: 'Mendez', softSkill: 0, techSkill: 0, leader: 0, description: '"Me cae mal xq no deja el codigo comentado"' },
  { name: 'Abad', lastname: 'Salim', softSkill: 0, techSkill: 0, leader: 0, description: '"Me cae mal xq no deja el codigo comentado"' },
  { name: 'Eslefer', lastname: 'Bortua', softSkill: 0, techSkill: 0, leader: 0, description: '"Me cae mal xq no deja el codigo comentado"' },
  { name: 'Aquiles', lastname: 'Brinco', softSkill: 0, techSkill: 0, leader: 0, description: '"Me cae mal xq no deja el codigo comentado"' },
  { name: 'Liliana', lastname: 'Velez', softSkill: 0, techSkill: 0, leader: 0, description: '"Me cae mal xq no deja el codigo comentado"' },
]

const FeedbackView = ({

}) => {
  const classes = useStyles();
  console.log('pp 0 !!!!!!!!!!', pp)
  return (
    <Grid container direction='row' justify='center' alignItems='center' pading={10}>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[0]} key={0} />
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[1]} key={1} />
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[2]} key={2} />
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[3]} key={3} />
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[4]} key={4} />
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[5]} key={5} />
      </Grid>
    </Grid>
    // <Grid container direction='row' justify='center' alignItems='center' pading={10}>
    //   {pp && pp.map((compa) => {
    //     console.log('pp individual',compa);
    //     <Partner 
    //       part={compa}
    //     />
    //   })}
    // </Grid>
  );

}
export default FeedbackView;

{/* <Grid container direction='row' justify='center' alignItems='center' pading={10}>
      {pp && pp.map((compa) => {
        console.log('pp individual',compa.name);
        <Partner 
          name={compa.name}
          lastname={compa.lastname}
          softSkill={compa.softSkill}
          techSkill={compa.techSkill}
          leader={compa.leader}
          description={compa.description}
        />
      })}
    </Grid> */}