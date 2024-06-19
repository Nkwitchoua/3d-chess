import { useLoader } from '@react-three/fiber'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';

const Knight = ({posX, posZ, colorInt, handleClick, figureId}: FiguresProps) => {

  const white = useLoader(GLTFLoader, "../../public/models/chess/figures/white_knight.gltf");
  const black = useLoader(GLTFLoader, "../../public/models/chess/figures/black_knight.gltf");

  const figClone = colorInt == -1 ? SkeletonUtils.clone(black.scene) : SkeletonUtils.clone(white.scene);
  
  figClone.position.x = posX;
  figClone.position.z = posZ;

  const handleClickMiddleware = () => {
    handleClick(figureId)
  }

  return (
    <primitive onClick={handleClickMiddleware} key={"fig#" + figureId} object={figClone}></primitive>
  )
}

export default Knight