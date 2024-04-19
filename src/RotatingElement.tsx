import { useFrame, useLoader } from '@react-three/fiber';
import React, { Suspense, lazy, useEffect, useRef } from 'react'
import { TextureLoader } from 'three';
import pavingStonesPhoto from "../public/assets/PavingStones092_1K-JPG_Color.jpg";
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
// import chess from "../public/models/chess;

const RotatingElement = () => {

  const gltf = useLoader(GLTFLoader, "../public/models/chess/scene.gltf");
    
  const box = useRef(null);
  
  useFrame((({ clock }) => {
    if(box && box.current) {
      // @ts-ignore: Object is possibly 'null'.
      // box.current.rotation.x = clock.getElapsedTime();
      // box.current.rotation.y = clock.getElapsedTime();
      // box.current.rotation.z = clock.getElapsedTime();

      // box.current.position.x = Math.sin(clock.getElapsedTime()  * 2);
      // box.current.position.y = Math.cos(clock.getElapsedTime()  * 2);
      // box.current.position.z = Math.sin(clock.getElapsedTime()  * 2);
    }
  }))

  useEffect(() => {
    if(box && box.current) {
      box.current.position.y = -1
    }
  }, [box])

    const colorMap = useLoader(TextureLoader, pavingStonesPhoto);
    console.log(gltf.nodes.group_0)

    return (
        <primitive ref={box} position={[1,2,1]} object={gltf.scene}>
            {/* <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial map={colorMap}/> */}
        </primitive>
    )
}

export default RotatingElement