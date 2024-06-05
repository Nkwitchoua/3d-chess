import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';
import { Vector3 } from 'three';

const Bishop = ({posX, posZ, colorInt}: FiguresProps) => {

  const white = useLoader(GLTFLoader, "../../public/models/chess/figures/white_bishop.gltf");

  const figClone = SkeletonUtils.clone(white.scene);
  
  figClone.position.x = posX;
  figClone.position.z = posZ;

  return (
    <primitive object={figClone}></primitive>
  )
}

export default Bishop