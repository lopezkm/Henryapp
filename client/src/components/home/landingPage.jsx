import React from 'react'
import Image from './holaa.png'

export default function Landing() {
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
                    <button className='button-landingPage'> Ingresar</button>
                </div>
            </div>
        </div>
    )
}