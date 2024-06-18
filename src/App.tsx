import { MutableRefObject, useEffect, useRef, useState, Suspense, lazy } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import RotatingElement from './RotatingElement'
import CameraControl from './CameraControl'
import { ImageLoader, Scene, TextureLoader, Vector3 } from 'three';
import Board from './models/Board';
import sky from "../public/assets/4k-sky-jarxlx0n1mkzmn1j.jpg"
import { OrbitControls } from '@react-three/drei';

function App() {
  const canvas = useRef(null);
  const scene = new Scene();
  const skyTexture = useLoader(TextureLoader, "../public/assets/4k-sky-jarxlx0n1mkzmn1j.jpg");

  
  const created = () => {
    
    scene.background = skyTexture;
  }

  return (
    <div id='container' style={{ width: "100vw", height: "100vh" }}>
      <Canvas ref={canvas} id='canvas' onCreated={created} shadows>
        <CameraControl/>
        <OrbitControls/>
        {/* <ambientLight  />  */}
        <directionalLight />
        <spotLight intensity={Math.PI} position={[2,2,1]}/>
        <spotLight intensity={Math.PI} position={[2,2,0]}/>
        <pointLight position={[0.5,1,1]} intensity={Math.PI / 2} distance={10} castShadow/>
        <Suspense fallback={"loading"}>
          <Board/>
          <primitive attach="background" object={skyTexture}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
