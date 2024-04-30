import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

const Bishop = () => {

  const figure = useLoader(GLTFLoader, "../../public/models/figures/white_bishop.gltf");

  return (
    <primitive object={figure.scene}></primitive>
  )
}

export default Bishop