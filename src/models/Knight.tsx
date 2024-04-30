import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

const Knight = () => {

  const figure = useLoader(GLTFLoader, "../../public/models/figures/white_knight.gltf");

  return (
    <primitive object={figure.scene}></primitive>
  )
}

export default Knight