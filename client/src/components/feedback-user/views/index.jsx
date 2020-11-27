import { Grid } from '@material-ui/core';
import React from 'react';
import Partner from './partner'
import { useStyles } from './styles';

import persona1 from '../img/persona1.jpg'
import persona2 from '../img/persona2.jpg'
import mujer1 from '../img/mujer1.jpg'
import mujer2 from '../img/mujer2.jpg'
import persona3 from '../img/persona3.jpg'
import persona4 from '../img/persona4.jpg'
const pp = [
  { name: 'Marcos', lastname: 'Cardozo', softSkill: 4, techSkill: 4, leader: 3, description: '"Es muy buena onda colabora en todo"' },
  { name: 'Josefina', lastname: 'Mendez', softSkill: 3, techSkill: 1, leader: 1, description: '"No deja el codigo comentado"' },
  { name: 'Abad', lastname: 'Salim', softSkill: 5, techSkill: 2, leader: 4, description: '"Siempre esta dispuesto ayudar"' },
  { name: 'Eslefer', lastname: 'Bortua', softSkill: 1, techSkill: 5, leader: 1, description: '"Tine mucha capasidad tecnica pero no se relaciona con el equipo"' },
  { name: 'Sebastian', lastname: 'Lerna', softSkill: 3, techSkill: 4, leader: 1, description: '"Se destaca en hacer cosas lindas pero no funcionales"' },
  { name: 'Liliana', lastname: 'Velez', softSkill: 4, techSkill: 4, leader: 3, description: '"Hace que todo funciones pero, en la parte grafica le queda horrible"' },
]

const FeedbackView = ({

}) => {
  const classes = useStyles();
  console.log('pp 0 !!!!!!!!!!', pp)
  console.log('imagen',persona1)
  return (
    <Grid container direction='row' justify='center' alignItems='center' pading={10}>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[0]} perfil={persona1}/>
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[1]} perfil={mujer1}/>
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[2]} perfil={persona2}/>
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[3]} perfil={persona3}/>
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[4]} perfil={persona4}/>
      </Grid>
      <Grid item lg={4} md={3} sm={6} xs={12}>
        <Partner part={pp[5]} perfil={mujer2}/>
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