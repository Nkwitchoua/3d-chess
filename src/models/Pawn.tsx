import { extend, useLoader } from '@react-three/fiber'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { FiguresProps } from '../FigureClass';
import { useRef, useState } from 'react';

const Pawn = ({posX, posZ, colorInt, handleClick, handleHover, figureId}: FiguresProps) => {
  const ref = useRef();

  const blackModel = useLoader(GLTFLoader, "../../public/models/chess/figures/black_pawn.gltf");
  const model = useLoader(GLTFLoader, "../../public/models/chess/figures/white_pawn.gltf");

  const figClone = colorInt == 1 ? SkeletonUtils.clone(model.scene) : SkeletonUtils.clone(blackModel.scene);
  
  figClone.position.x = posX;
  figClone.position.z = posZ;
  figClone.traverse(child => {
  })

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
        ref={ref} 
        key={"fig#" + figureId} 
        onClick={() => handleClickMiddleware()} 
        receiveShadow 
        object={figClone} >
      </primitive>
  )
}

export default Pawn