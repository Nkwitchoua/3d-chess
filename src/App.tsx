import { MutableRefObject, useEffect, useRef, useState, Suspense, lazy } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import RotatingElement from './RotatingElement'
import CameraControl from './CameraControl'
import { Vector3 } from 'three';
import Board from './models/Board';

function App() {
  const canvas = useRef(null);

  return (
    <div id='container' style={{ width: "100vw", height: "100vh" }}>
      <Canvas ref={canvas} id='canvas' >
        <CameraControl/>
        <ambientLight intensity={Math.PI / 2}/>
        <directionalLight color={"red"} position={[0,0,3]} />
        <Suspense fallback={"loading"}>
          <Board/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
