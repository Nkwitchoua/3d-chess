import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';

const Pawn = ({posX, posZ}: FiguresProps) => {

  const white = useLoader(GLTFLoader, "../../public/models/chess/figures/white_pawn.gltf");

  const figClone = SkeletonUtils.clone(white.scene);
  
  figClone.position.x = posX - 0.35;
  figClone.position.z = posZ;

  return (
    <primitive object={figClone}></primitive>
  )
}

export default Pawn