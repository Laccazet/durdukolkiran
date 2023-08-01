import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef } from "react";

export default function First3D() {
    const jup = useRef();
    const mer = useRef();
  
    const light = useRef()
  
    const jupiter = useLoader(GLTFLoader, "/models/jupiter.glb");
    jupiter.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    })
  
    const mercury = useLoader(GLTFLoader, "/models/mercury_planet.glb");
    mercury.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    })
  
    useFrame(({clock}) => {
      jup.current.rotation.y = -clock.getElapsedTime() / 5;
  
      mer.current.rotation.y = clock.getElapsedTime();
      mer.current.position.x = 7 * Math.sin(clock.getElapsedTime());
      mer.current.position.y = -4 * Math.sin(clock.getElapsedTime());
      mer.current.position.z = 7 * Math.cos(clock.getElapsedTime());
    })
  
  
  
    return (
      <>
        <ambientLight intensity={0.015} />
        <directionalLight ref={light} shadow-bias={-0.001} castShadow position={[-300, 40, 0]} />
  
        <group position={[7.5, -1, 0]}>
          <primitive ref={jup} object={jupiter.scene} scale={[0.5, 0.5, 0.5]} />
          <primitive ref={mer} object={mercury.scene} scale={[0.25, 0.25, 0.25]} />
        </group>
      </>
    )
}
