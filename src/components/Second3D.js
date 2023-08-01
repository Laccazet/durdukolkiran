import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef } from "react";

export default function Second3D() {

    const sat = useRef()
    const light = useRef()
  
    const saturn = useLoader(GLTFLoader, "/models/dark_planet.glb");
  
    useFrame(({clock}) => {
      sat.current.rotation.y = -clock.getElapsedTime() / 5;
      sat.current.rotation.x = 10;
    })
  
  
  
    return (
      <>
        <ambientLight intensity={0.1} />
        <directionalLight ref={light} position={[-300, 100, 0]} intensity={0.5} />
  
        <group>
          <primitive ref={sat} object={saturn.scene} scale={[4, 4, 4]} />
        </group>
      </>
    )
}
