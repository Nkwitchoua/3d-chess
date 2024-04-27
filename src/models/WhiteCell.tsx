import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { CellProps } from '../CellClass';

const WhiteCell = ({ posX, posZ }: CellProps) => {
  const cell = useLoader(GLTFLoader, "../../public/models/chess/white_cell.gltf");
  const cellClone = SkeletonUtils.clone(cell.scene);
  
  cellClone.position.x = posX;
  cellClone.position.z = -posZ ;

  return (
    <primitive object={cellClone}></primitive>
  )
}

export default WhiteCell