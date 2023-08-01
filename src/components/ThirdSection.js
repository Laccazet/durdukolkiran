import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import ToolPlanet from "./ToolPlanet";

export default function ThirdSection() {

  const [reactTexture, jsTexture, tailwindTexture, firebaseTexture, htmlTexture, cssTexture, pythonTexture] = useLoader(TextureLoader, [
    "/textures/react-texture.png",
    "/textures/js-texture.png",
    "/textures/tailwind-texture.png",
    "/textures/firebase-texture.png",
    "/textures/html-texture.png",
    "/textures/css-texture.png",
    "/textures/python-texture.png"
  ]);

  return (
    <section className='w-full h-[600px] py-20 flex-center'>
      <div className="w-9/12 h-full flex-center flex-wrap gap-10">
        <div className="w-40 h-40">
          <Canvas orthographic camera={{position: [0, 0, 10], zoom: 50}}>
            <ToolPlanet texture={reactTexture} position={[0, 0, 0]} speed={3} />
          </Canvas>
        </div>

        <div className="w-40 h-40">
          <Canvas orthographic camera={{position: [0, 0, 10], zoom: 50}}>
            <ToolPlanet texture={jsTexture} position={[0, 0, 0]} speed={2} />
          </Canvas>
        </div>

        <div className="w-40 h-40">
          <Canvas orthographic camera={{position: [0, 0, 10], zoom: 50}}>
            <ToolPlanet texture={tailwindTexture} position={[0, 0, 0]} speed={3.4} />
          </Canvas>
        </div>

        <div className="w-40 h-40">
          <Canvas orthographic camera={{position: [0, 0, 10], zoom: 50}}>
            <ToolPlanet texture={firebaseTexture} position={[0, 0, 0]} speed={2} />
          </Canvas>
        </div>

        <div className="w-40 h-40">
          <Canvas orthographic camera={{position: [0, 0, 10], zoom: 50}}>
            <ToolPlanet texture={htmlTexture} position={[0, 0, 0]} speed={3} />
          </Canvas>
        </div>

        <div className="w-40 h-40">
          <Canvas orthographic camera={{position: [0, 0, 10], zoom: 50}}>
            <ToolPlanet texture={cssTexture} position={[0, 0, 0]} speed={2} />
          </Canvas>
        </div>

        <div className="w-40 h-40">
          <Canvas orthographic camera={{position: [0, 0, 10], zoom: 50}}>
            <ToolPlanet texture={pythonTexture} position={[0, 0, 0]} speed={3} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
