import { Canvas } from "@react-three/fiber";
import First3D from "./First3D";

export default function FirstSection() {
  return (
    <section className="w-full h-[700px] relative">
        <div className="w-full h-full p-24">
            <div className="w-full h-full flex flex-col items-start">
                <h1 className="text-[100px] ibm-f font-bold text-[#e7e7e7] leading-[1.10] mb-5">
                Hello
                <span className="text-sBlue">, </span>
                my name is <br />
                <span className="text-sBlue"> Durdu Kolkıran.</span>
                </h1>

                <h1 className="text-[40px] relative left-1 ibm-f text-[#a5a5a5] leading-[1.10]">
                <span className="">Frontend Developer</span>
                <br />
                <span className="">Space Lover</span>
                </h1>
                    
            </div>
        </div>

        <div className="w-full h-full absolute top-0 right-0">
          <Canvas shadows orthographic camera={{position: [0, 0, 10], zoom: 50}}>
            <First3D />
          </Canvas>
        </div>
    </section>
  )
}
