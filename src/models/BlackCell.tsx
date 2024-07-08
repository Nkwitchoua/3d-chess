import { useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { CellProps } from '../CellClass';
import * as THREE from "three";
import CellShader from '../shaders/CellShader';

const BlackCell = ({ posX, posZ, canMove }: CellProps) => {
  const cell = useLoader(GLTFLoader, "../../public/models/chess/black_cell.gltf");
  const cellClone = SkeletonUtils.clone(cell.scene);

  const plane = React.useRef<THREE.Mesh>(null);
  
  cellClone.position.x = posX;
  cellClone.position.z = -posZ;

  const uniforms = {
    a_x1: { value: 1.0 },
    a_x2: { value: (posX + 0.35) },
    a_z1: { value: (-posZ) },
    a_z2: { value: (-posZ - 0.35) }
  };
  
  cellClone.position.x = posX;
  cellClone.position.z = -posZ + 0.35;

  useEffect(() => {
    if(plane.current) {
      CellShader.uniforms = uniforms;
      plane.current.material = CellShader;
      plane.current.material.side = THREE.DoubleSide;
      plane.current.rotation.x = Math.PI / 2;
      plane.current.material.transparent = true;
    }
  }, [plane]);

  const handlePointerOver = (e: Event) => {
    // e.eventObject.position.y += 0.25;
  }

  return (<>
    <primitive 
    onPointerOver={(e: Event) => handlePointerOver(e)} 
    object={cellClone}>

    </primitive>
    <mesh 
      visible={canMove}
      ref={plane} 
      position={new THREE.Vector3(posX - 0.82, 0.06, -posZ + 1.09)}
      scale={new THREE.Vector3(0.35, 0.35, 1)}
      >
      <planeGeometry ></planeGeometry>
    </mesh>
  </>

  )
}

export default BlackCell