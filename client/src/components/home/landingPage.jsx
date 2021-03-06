import React from 'react'
import Image from './images/holaa.png'
import { Link } from 'react-router-dom'


export default function Landing() {
   
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
                    <p>Bienvenidos a la henry app, un lugar para administrar tus oficios</p>
                </div>
                <div className='button-container-landingPage'>
                    <Link to='/root/home'>
                    <button className='button-landingPage'> INGRESAR </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}