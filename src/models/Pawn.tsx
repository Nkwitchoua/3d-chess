import { extend, useLoader } from '@react-three/fiber'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';
import { useRef, useState } from 'react';
import { Select } from '@react-three/postprocessing';

const Pawn = ({posX, posZ, colorInt, handleClick, handleHover, figureId}: FiguresProps) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const blackModel = useLoader(GLTFLoader, "../../public/models/chess/figures/black_pawn.gltf");
  const model = useLoader(GLTFLoader, "../../public/models/chess/figures/white_pawn.gltf");

  const figClone = colorInt == 1 ? SkeletonUtils.clone(model.scene) : SkeletonUtils.clone(blackModel.scene);
  
  figClone.position.x = posX;
  figClone.position.z = posZ;
  figClone.traverse(child => {
  })

  const handleClickMiddleware = () => {
    handleClick(figureId)
    handleHover("")
  }

  const handleHoverMiddleware = () => {
    handleHover(figureId)
  }

  return (
    // <Select enabled={isHovered}>
      <primitive 
        onPointerEnter={() => handleHover(figureId)}
        onPointerOut={() => handleHover("")}
        ref={ref} 
        key={"fig#" + figureId} 
        onClick={() => handleClickMiddleware()} 
        receiveShadow 
        object={figClone} >
      </primitive>
    // </Select>
  )
}

export default Pawn