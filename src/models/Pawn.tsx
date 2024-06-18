import { useLoader } from '@react-three/fiber'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { FiguresProps } from '../FigureClass';

const Pawn = ({posX, posZ, colorInt, handleClick, figureId}: FiguresProps) => {
  
  const blackModel = useLoader(GLTFLoader, "../../public/models/chess/figures/black_pawn.gltf");
  const model = useLoader(GLTFLoader, "../../public/models/chess/figures/white_pawn.gltf");

  const figClone = colorInt == 1 ? SkeletonUtils.clone(model.scene) : SkeletonUtils.clone(blackModel.scene);

  console.log("id", figureId);

  // if(colorInt == -1) console.log("Color int ->", figClone);
  
  figClone.position.x = posX;
  figClone.position.z = posZ;
  figClone.traverse(child => {
    // if(child instanceof THREE.Mesh) child.flatShading = true
  })

  return (
    <primitive onClick={() => handleClick(figureId)} receiveShadow object={figClone} >
    </primitive>
  )
}

export default Pawn