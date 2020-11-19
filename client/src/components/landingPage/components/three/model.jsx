import React,{useState} from 'react'



export default function Model(){
    const [active, setActive] = useState(true)
    const [hover, setHover] = useState(false)
    const props ={
        scale:active?[0.08,0.08,0.08]:[0.15,0.15,0.15],
        color: hover?"red":"blue"
    }
    return (
        <mesh
        castShadow
        scale={props.scale}
        position={[-0.1,0.5,0.3]}
        onPointerOver={()=> setHover(true)}
        onPointerOut={()=> setHover(false)}
        onClick={()=> setActive(!active)}
        >
                <torusKnotBufferGeometry
                    args={[10, 4, 500, 128]}
                />
                 <ambientLight intensity={3}
                 color={"white"} />
                 <rectAreaLight
      width={10}
      height={13}
      color={props.color}
      intensity={30}
      position={[65, 10, 15]}
      lookAt={[-0.1, 0.3, 0.3]}
      penumbra={1}
      castShadow
    />
                 <meshStandardMaterial
                 attach="material"
                 meshDepthMaterial={1}
                 color={props.color}
                 flatShading={false}
                 shininess={100}
                 clearcoat={1}
                 roughness={0.1}
                 metalness={0.1}
                 />
            </mesh>
    )
}