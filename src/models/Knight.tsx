import { useLoader } from '@react-three/fiber'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';

const Knight = ({posX, posZ}: FiguresProps) => {

  const white = useLoader(GLTFLoader, "../../public/models/chess/figures/white_knight.gltf");

  const figClone = SkeletonUtils.clone(white.scene);
  
  figClone.position.x = posX;
  figClone.position.z = posZ;

  return (
    <primitive object={figClone}></primitive>
  )
}

export default Knight