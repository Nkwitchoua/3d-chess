import { useLoader, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { CellProps } from '../CellClass';

const WhiteCell = ({ posX, posZ }: CellProps) => {
  const cell = useLoader(GLTFLoader, "../../public/models/chess/white_cell.gltf");
  const cellClone = SkeletonUtils.clone(cell.scene);
  const ref = useRef();
  
  cellClone.position.x = posX;
  cellClone.position.z = -posZ;

  const handlePointerOver = (e: Event) => {
    // e.eventObject.position.y += 0.25;
  }

  return (
    <primitive ref={ref} onPointerOver={(e: Event) => handlePointerOver(e)} object={cellClone}></primitive>
  )
}

export default WhiteCell