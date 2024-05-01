import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';

const Queen = ({posX, posZ}: FiguresProps) => {

  const white = useLoader(GLTFLoader, "../../public/models/chess/figures/white_queen.gltf");

  const figClone = SkeletonUtils.clone(white.scene);
  
  figClone.position.x = posX;
  figClone.position.z = posZ;

  return (
    <primitive object={figClone}></primitive>
  )
}

export default Queen