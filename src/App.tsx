import { MutableRefObject, useEffect, useRef, useState, Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import RotatingElement from './RotatingElement'
import CameraControl from './CameraControl'
function App() {
  const canvas = useRef(null);

  return (
    <div id='container' style={{ width: 1280, height: 720 }}>
      <Canvas ref={canvas} id='canvas' camera={{position: [4, 0.5, 0]}}>
        {/* <CameraControl canvas={canvas}/> */}
        <ambientLight intensity={Math.PI / 2}/>
        <directionalLight color={"red"} position={[0,0,5]} />
        {/* <mesh scale={0.6}>
          <octahedronGeometry args={[Math.PI / 2]}/>
          <meshPhongMaterial />
        </mesh> */}
        <Suspense fallback={"loading"}>
          <RotatingElement />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
