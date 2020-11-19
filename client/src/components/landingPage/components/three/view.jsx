import React from 'react'
import {Canvas} from "react-three-fiber"
import Model from "./model"
import Controller from "./controller"
import * as THREE from "three"
export default function Three(){

    return (
        <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5.5], near: 1, far: 25 }}
        onCreated={({gl})=>{
            gl.shadowMap.enabled=true
            gl.shadowMap.type= THREE.PCFSoftShadowMap
        }}
            >
            <fog  attach="fog" args={["yellow", 2,20]}/>
            <Controller/>         
            <Model/>         
        </Canvas>

    )
}