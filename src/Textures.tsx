import { useLoader } from '@react-three/fiber';
import React, { FC, SetStateAction } from 'react'
import { TextureLoader } from 'three';

interface TexturesProps {
    setTextures: React.Dispatch<SetStateAction<object>>;
} 

const Textures: FC<TexturesProps> = ({ setTextures }) => {

  const blackTexture = async() => await useLoader(TextureLoader, "../public/models/chess/textures/Fichte_dunkel_baseColor.jpeg");
  const whiteTexture = async() => await useLoader(TextureLoader, "../public/models/chess/textures/Fichte_Natur_baseColor.jpeg");
  
  setTextures({
    fichteDunkel: blackTexture,
    fichteNature: whiteTexture
  })

  return (
    <div>Textures</div>
  )
}

export default Textures