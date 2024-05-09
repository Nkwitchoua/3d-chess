import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';
import { MaterialLoader, TextureLoader } from 'three';
import * as THREE from "three"

const Pawn = ({posX, posZ, colorInt}: FiguresProps) => {

  console.log("colorInt",colorInt)
  const normalMap = useLoader(TextureLoader, "../../public/models/chess/textures/Fichte_dunkel_normalMap.jpg")
  let texture: THREE.Texture;
  {
    const black = useLoader(TextureLoader, "../../public/models/chess/textures/Fichte_dunkel_baseColor.jpeg");
    const white = useLoader(TextureLoader, "../../public/models/chess/textures/Fichte_Natur_baseColor.jpeg");

    colorInt === 1 ? texture = white : texture = black;
  }

  const model = useLoader(GLTFLoader, "../../public/models/chess/figures/white_pawn.gltf");

  const figClone = SkeletonUtils.clone(model.scene);

  figClone.traverse(child => {
    if(child instanceof THREE.Mesh) {
      console.log("child.material ->", child.material);
      child.material.map = texture;
      child.material.normalMap = normalMap
    }
  })
  
  figClone.position.x = posX - 0.35;
  figClone.position.z = posZ;

  return (
    <primitive object={figClone}>
      <pointsMaterial></pointsMaterial>
    </primitive>
  )
}

export default Pawn