import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Model } from "../C-transformed"


export const InteractiveModel = () => {

  return (
    <Canvas>
      <ambientLight/>
      <perspectiveCamera fov={45}/>
      <Suspense>
        <Model/>
      </Suspense>
    </Canvas>
  )
}


