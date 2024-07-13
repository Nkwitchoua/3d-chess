import React, { MutableRefObject, useEffect, useRef, useState, Suspense, lazy } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import RotatingElement from './RotatingElement'
import CameraControl from './CameraControl'
import { Color, ImageLoader, Scene, TextureLoader, Vector3 } from 'three';
import Board from './models/Board';
import sky from "../public/assets/4k-sky-jarxlx0n1mkzmn1j.jpg"
import * as THREE from "three";
import { OrbitControls } from '@react-three/drei';

function App() {
  const canvas = useRef(null);
  const scene = new Scene();
  const color = React.useRef<Color>(null);
  const skyTexture = useLoader(TextureLoader, "../public/assets/4k-sky-jarxlx0n1mkzmn1j.jpg");

  // if(color.current) color.current.
  
  const created = () => {

  }

  return (
    <div id='container' style={{ width: "100vw", height: "100vh" }}>
      <Canvas ref={canvas} id='canvas' onCreated={created} shadows>
        <color attach="background" args={["darkgrey"]} ref={color}/>
        <CameraControl/>
        <OrbitControls/>
        {/* <ambientLight  />  */}
        <directionalLight />
        <spotLight intensity={Math.PI} position={[2,2,1]}/>
        <spotLight intensity={Math.PI} position={[2,2,0]}/>
        <pointLight position={[0.5,1,1]} intensity={Math.PI / 2} distance={10} castShadow/>
        <Suspense fallback={"loading"}>
          <Board/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
