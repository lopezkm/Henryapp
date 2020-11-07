import React from 'react'
import image from './images/juan.png'
import pedro from './images/prueba2.png'
import huevo from './images/huevo.png'


export default function Home() {

    return (
        <div className='div-container-home'>
            <div className='div-black'>
                <div className='navbar'>
                    <p>Henry</p>
                    <p>egg</p>
                    <p>[Aqui va el nav]</p>
                    <p>mesas</p>
                </div>
                <div className='div-cohorte-black'>
                    <div className='image-black'>
                        <img src={image} alt="juan" />
                    </div>
                    <div className='tittle-cohorte-black' >
                        <p>Descubre tu cohorte</p>
                    </div>
                    <div className='div-text-black'>
                        <p>podes ver tu cohorte, fecha de inicio y fecha de finalizacion, consultar profesor y compañeros</p>
                    </div>
                    <div className='div-button-black'>
                        <button>Ingresar</button>
                    </div>
                </div>
            </div>
            <div className='div-white'>
                <div className='div-messages-white'>
                    <div className='tittle-text-button'>
                        <div className='tittle-messages-white'>
                            <p>Charla con tus compañeros</p>
                        </div>
                        <div className='div-text-white' >
                            <p>consulta tus dudas en el chat grupal, o envia mensajes privado a tu profesor  </p>
                        </div>
                        <div className='div-button-white'>
                            <button>Ingresar</button>
                        </div>
                    </div>
                        <div className='image-white' >
                            <img src={pedro} alt="juan" />
                        </div>
                </div>
            </div>
            <div className='div-black-2'>
                <div className='div-cohorte-black'>
                    <div className='image-black'>
                        <img src={huevo} alt="juan" />
                    </div>
                    <div className='tittle-cohorte-black' >
                        <p>Egg App</p>
                    </div>
                    <div className='div-text-black'>
                        <p>comprueba tu mesa de pair programming y consulta tus compañeros </p>
                    </div>
                    <div className='div-button-black'>
                        <button>Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}