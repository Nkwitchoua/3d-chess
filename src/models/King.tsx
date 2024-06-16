import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';

const King = ({posX, posZ, colorInt}: FiguresProps) => {

  const white = useLoader(GLTFLoader, "../../public/models/chess/figures/white_king.gltf");
  const black = useLoader(GLTFLoader, "../../public/models/chess/figures/black_king.gltf");

  const figClone = colorInt == -1 ? SkeletonUtils.clone(black.scene) : SkeletonUtils.clone(white.scene);
  
  figClone.position.x = posX;
  figClone.position.z = posZ;

  return (
    <primitive object={figClone}></primitive>
  )
}

export default King