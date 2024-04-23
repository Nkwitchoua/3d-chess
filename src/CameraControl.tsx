import { useFrame } from '@react-three/fiber';
import React, { MutableRefObject } from 'react'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const CameraControl = (canvas: MutableRefObject<null>) => {
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  console.log(canvas);
//   const controls = new OrbitControls(camera, canvas);
  console.log("after controls")
  
  useFrame(({clock}) => {
    // camera.position += clock.getElapsedTime();

  })

  return (
    <div>CameraControl</div>
  )
}

export default CameraControl