import { useLoader, useThree } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import { GLTFLoader, SkeletonUtils } from 'three/examples/jsm/Addons.js'
import { CellProps } from '../CellClass';
import * as THREE from "three"

const fragmentShader = `
  varying vec3 Normal;
  varying vec3 Position;

  uniform vec3 Ka;
  uniform vec3 Kd;
  uniform vec3 Ks;
  uniform vec4 LightPosition;
  uniform vec3 LightIntensity;
  uniform float Shininess;

  vec3 phong() {
    vec3 n = normalize(Normal);
    vec3 s = normalize(vec3(LightPosition) - Position);
    vec3 v = normalize(vec3(-Position));
    vec3 r = reflect(-s, n);

    vec3 ambient = Ka;
    vec3 diffuse = Kd * max(dot(s, n), 0.0);
    vec3 specular = Ks * pow(max(dot(r, v), 0.0), Shininess);

    return LightIntensity * (ambient + diffuse + specular);
  }

  void main() {
    vec3 blue = vec3(0.0, 0.0, 1.0);
    gl_FragColor = vec4(blue*phong(), 1.0);
}`

const vertexShader = `
  varying vec3 Normal;
  varying vec3 Position;

  void main() {
    Normal = normalize(normalMatrix * normal);
    Position = vec3(modelViewMatrix * vec4(position, 1.0));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`


const WhiteCell = ({ posX, posZ }: CellProps) => {
  const data = useMemo(
    () => ({
      uniforms: {
        Ka: { value: new THREE.Vector3(1, 1, 1) },
        Kd: { value: new THREE.Vector3(1, 1, 1) },
        Ks: { value: new THREE.Vector3(1, 1, 1) },
        LightIntensity: { value: new THREE.Vector4(0.5, 0.5, 0.5, 1.0) },
        LightPosition: { value: new THREE.Vector4(0.0, 2000.0, 0.0, 1.0) },
        Shininess: { value: 200.0 }
      },
      fragmentShader,
      vertexShader
    }),
    []
  )
  const cell = useLoader(GLTFLoader, "../../public/models/chess/white_cell.gltf");
  const cellClone = SkeletonUtils.clone(cell.scene);
  const ref = useRef();
  
  cellClone.position.x = posX;
  cellClone.position.z = -posZ;

  const handlePointerOver = (e: Event) => {
    // e.eventObject.position.y += 0.25;
  }

  return (
    <primitive 
      ref={ref} 
      onPointerOver={(e: Event) => handlePointerOver(e)} 
      object={cellClone}>
        <shaderMaterial attach="material" {...data} ></shaderMaterial>
    </primitive>
  )
}

export default WhiteCell