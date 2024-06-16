import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';
import { MaterialLoader, TextureLoader } from 'three';
import * as THREE from "three"

const Pawn = ({posX, posZ, colorInt}: FiguresProps) => {
  
  const blackModel = useLoader(GLTFLoader, "../../public/models/chess/figures/black_pawn.gltf");
  const model = useLoader(GLTFLoader, "../../public/models/chess/figures/white_pawn.gltf");

  const figClone = colorInt == 1 ? SkeletonUtils.clone(model.scene) : SkeletonUtils.clone(blackModel.scene);

  if(colorInt == -1) console.log("Color int ->", figClone);
  
  figClone.position.x = posX;
  figClone.position.z = posZ;
  figClone.traverse(child => {
    // if(child instanceof THREE.Mesh) child.flatShading = true
  })

  return (
    <primitive receiveShadow object={figClone} >
    </primitive>
  )
}

export default Pawn