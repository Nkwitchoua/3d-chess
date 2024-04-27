import { useFrame, useLoader } from '@react-three/fiber';
import React, { Suspense, lazy, useEffect, useRef } from 'react'
import { TextureLoader } from 'three';
import pavingStonesPhoto from "../public/assets/PavingStones092_1K-JPG_Color.jpg";
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
// import test from "../public/models/"

const RotatingElement = () => {

  const queen = useLoader(GLTFLoader, "../public/models/chess/figures/white_queen.gltf");
  const king = useLoader(GLTFLoader, "../public/models/chess/figures/white_king.gltf");
    
  const box = useRef(null);

  console.log("king ",king.scene.position)
  console.log("queen ",queen.scene.position)

  const moveFigure = (figure: Event) => {
    console.log(figure)
    figure.eventObject.position.x += 0.35;
  }

    return (<>
        <primitive 
          onPointerOver={(e: Event) => console.log("MOUSE OVER")}
          onDrag={(e: Event) => console.log(e)}
          onClick={(e: Event) => moveFigure(e)}
          object={queen.scene}>
        </primitive>
        <primitive onClick={(e: Event) => moveFigure(e)} object={king.scene}>
        </primitive>
    </>
    )
}

export default RotatingElement