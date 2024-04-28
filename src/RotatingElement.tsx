import { useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react'
import { Color } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { EffectComposer, Outline, Select, Selection } from '@react-three/postprocessing';

const RotatingElement = () => {

  // const selection = new Selection();
  const [enabled, setEnabled] = useState(false);
  
  const queen = useLoader(GLTFLoader, "../public/models/chess/figures/white_queen.gltf");
  const king = useLoader(GLTFLoader, "../public/models/chess/figures/white_king.gltf");
  
  const moveFigure = (figure: Event) => {
    console.log(figure)
    figure.eventObject.position.x += 0.35;
  }
    
    return (<>
      <Selection >
        <EffectComposer enabled={enabled} autoClear={false}>
          <Outline hiddenEdgeColor={34} visibleEdgeColor={100} edgeStrength={100}/>
        </EffectComposer>
        <Select enabled>
          <primitive 
            onPointerOver={(e: Event) => console.log("MOUSE OVER")}
            onPointerEnter={(e: Event) => setEnabled(true)}
            onPointerLeave={(e: Event) => setEnabled(false)}
            onDrag={(e: Event) => console.log(e)}
            onClick={(e: Event) => moveFigure(e)}
            object={queen.scene}>
          </primitive>
          <primitive onClick={(e: Event) => moveFigure(e)} object={king.scene}>
          </primitive>
        </Select>
      </Selection>
    </>
    )
}

export default RotatingElement