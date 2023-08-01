import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function ToolPlanet( {texture, position, speed} ) {

    let planet = useRef();

    useFrame(({clock}) => {
        planet.current.rotation.y = 55 + (Math.sin(clock.getElapsedTime()) / 2);
        planet.current.position.y = Math.sin(clock.getElapsedTime() * speed ) / 4;
    })

    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[0, 10, 8]} />

            <mesh ref={planet} position={position}>
                <sphereGeometry />
                <meshStandardMaterial map={texture} />
            </mesh>
        </>
    )
}
