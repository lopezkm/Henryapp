import React from 'react'
import {useQuery, gql} from "@apollo/client";
import Image from './images/holaa.png'
import { Link } from 'react-router-dom'
import {AppBar} from '@material-ui/core'

const Users= gql`
{
  users{
    name
    _id
    email
  }
}
`

export default function Landing() {
   const {loading, error, data} = useQuery(Users);
   if(loading){
       console.log("loading")
   } 
   if(error){
       console.log("ups un error")
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
                    <div className='text-content'>
                        <p>Bienvenidos a la henry app un lugar para administrar tus oficios</p>
                    </div>
                </div>
                <div className='button-container-landingPage'>
                    <Link to='/user/home'>
                    <button className='button-landingPage'> Ingresar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}