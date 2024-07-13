import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';

const Queen = ({posX, posZ, colorInt, handleClick, handleHover, figureId}: FiguresProps) => {

  const white = useLoader(GLTFLoader, "../../public/models/chess/figures/white_queen.gltf");
  const black = useLoader(GLTFLoader, "../../public/models/chess/figures/black_queen.gltf");

  const figClone = colorInt == -1 ? SkeletonUtils.clone(black.scene) : SkeletonUtils.clone(white.scene);
  
  figClone.position.x = posX;
  figClone.position.z = posZ;

  const handleClickMiddleware = () => {
    handleClick(figureId)
    // handleHover("", new Event("click"))
  }

  // const handleHoverMiddleware = (e) => {
  //   handleHover(figureId, e)
  // }

  return (
    <primitive 
      onPointerEnter={(e: Event) => handleHover(figureId, e)}
      onPointerOut={(e: Event) => handleHover("", e)}
      key={"fig#" + figureId} 
      onClick={() => handleClickMiddleware()} 
      receiveShadow 
      object={figClone} >
    </primitive>
  )
}

export default Queen