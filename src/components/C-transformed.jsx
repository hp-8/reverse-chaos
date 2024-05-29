
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/c-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.connector.geometry} material={materials.base} scale={10} />
    </group>
  )
}

useGLTF.preload('/c-transformed.glb')
