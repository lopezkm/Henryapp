import React from 'react'
import {useQuery, gql} from "@apollo/client";
import Image from './images/holaa.png'
import { Link } from 'react-router-dom'

const Cohorts= gql`
{
cohorts{
  name
  startingDate
}
}
`

export default function Landing() {
   const {loading, error, data} = useQuery(Cohorts);
   if(loading){
       console.log("loading")
   } 
   if(error){
      return <div>uhh la cagamos</div>
   }
   if(data){
       console.log(data)
   }
    return (
        <div className='div-container-landingPage'>
            <div className='titulo-landingPage'>
                <p>Henry App</p>
                
            </div>
            <div className='container-img-text'>
                <div style={{display:"flex"}}>
                        <img className='image-landingPage' src={Image} />
                </div>
                <div className='text-content'>
                    <p>Bienvenidos a la henry app un lugar para administrar tus oficios</p>
                </div>
                <div className='button-container-landingPage'>
                    <Link to='/root/home'>
                    <button className='button-landingPage'> Ingresar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}