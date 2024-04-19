import { MutableRefObject, useEffect, useRef, useState, Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import RotatingElement from './RotatingElement'

function App() {

  return (
    <div id='container' style={{ width: 1280, height: 720 }}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2}/>
        <directionalLight color={"red"} position={[0,0,5]} />
        <mesh scale={0.6}>
          <octahedronGeometry args={[Math.PI / 2]}/>
          <meshPhongMaterial />
        </mesh>
        <Suspense fallback={"loading"}>
          <RotatingElement />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
