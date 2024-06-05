import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';
import { TextureLoader } from 'three';
import * as THREE from "three"

const Rook = ({posX, posZ, colorInt}: FiguresProps) => {

  const figure = useLoader(GLTFLoader, "../../public/models/chess/figures/white_rook.gltf");
  const black = useLoader(TextureLoader, "../../public/models/chess/textures/Fichte_dunkel_baseColor.jpeg");
  const white = useLoader(TextureLoader, "../../public/models/chess/textures/Fichte_Natur_baseColor.jpeg");

  const figClone = SkeletonUtils.clone(figure.scene);
  // console.log("figClone", figClone)

  figClone.traverse(child => {
    // console.log("child ->", child);
  })
  
  figClone.position.x = posX;
  figClone.position.z = posZ;

  return (
    <primitive object={figClone}></primitive>
  )
}

export default Rook