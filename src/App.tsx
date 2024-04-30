import { MutableRefObject, useEffect, useRef, useState, Suspense, lazy } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import RotatingElement from './RotatingElement'
import CameraControl from './CameraControl'
import { Vector3 } from 'three';
import Board from './models/Board';
function App() {
  const canvas = useRef(null);
  // const camera = useThree((state) => state.camera);

  // const rotateCamera = (event: MouseEvent) => {
  //   useThree(({ camera }) => {
  //     camera.rotation.setFromVector3(new Vector3(event.clientX, event.clientY, 0))
  //   })
  // }

  // camera={{position: [4, 0.5, 0

  return (
    <div id='container' style={{ width: 1280, height: 720 }}>
      <Canvas ref={canvas} id='canvas' >
        <CameraControl/>
        <ambientLight intensity={Math.PI / 2}/>
        <directionalLight color={"red"} position={[0,0,3]} />
        <Suspense fallback={"loading"}>
          {/* <RotatingElement /> */}
          <Board/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
