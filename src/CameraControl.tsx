import { useFrame, useThree } from '@react-three/fiber';
import { useState } from 'react'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/Addons.js';

interface ClientPos {
    x: number;
    y: number;
}

const CameraControl = () => {
  const clientPos = {
    x: 0,
    y: 0
  };
  const camera = useThree(state => state.camera);
  const distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
  
  camera.position.set(-2,2,0);
  camera.lookAt(new THREE.Vector3(0,0,0))
  
  window.addEventListener("mousemove", (event) => {
    // clientPos.x = event.clientX / Math.PI;
    // clientPos.y = event.clientY / Math.PI;
    // setClientPos({x: event.clientX, y: event.clientY });
  });

useFrame(({ clock }) => {
    if(camera && clientPos.x && clientPos.y) {
      camera.position.lerp(new THREE.Vector3(Math.cos(clientPos.x/5), camera.position.y, Math.sin(clientPos.x/5)), 0.1);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
    }
  })

  window.addEventListener("keydown", (event) => {

  });

  return (
    <></>
  )
}

export default CameraControl