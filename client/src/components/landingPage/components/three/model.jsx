

export default function Model(){
    return (
        <mesh
        castShadow
        scale={[2,2,2]}
        >
                <boxBufferGeometry
                    attach="geometry"
                />
                <ambientLight/>
                <spotLight
                    position={[0,5,10]}
                    penumbra={3}
                    castShadow
                />
                 <meshPhysicalMaterial
          attach="material"
          color="yellow"
          roughness={0.3}
          metalness={1.3}
        />
        
            </mesh>
    )
}