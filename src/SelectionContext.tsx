import { extend, useFrame, useThree } from '@react-three/fiber';
import React, { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { Vector2 } from 'three';
import { RenderPass, ShaderPass } from 'three/examples/jsm/Addons.js';
import { Outline } from '@react-three/postprocessing';
import { FXAAShader } from 'three/examples/jsm/Addons.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';

extend({ EffectComposer, RenderPass, ShaderPass });

const context = createContext({});
const SelectionContext = ({ children }) => {

  const { gl, scene, camera, size } = useThree();
  const composer = useRef(null);
  const [hovered, set] = useState([]);
  const aspect = useMemo(() => new Vector2(size.width, size.height), [size]);

  useEffect(() => {
    if (!composer.current) return;
    // @ts-ignore
    composer.current.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => {
    if (!composer.current) return;

    // @ts-ignore
    composer.current.render();
  }, 1);

  return (
    <context.Provider value={set}>
      {children}
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attach="passes" args={[scene, camera]} />
        <Outline
          selection={hovered}
          visibleEdgeColor={0x000000}
          edgeStrength={50}
        />
        <shaderPass attach="passes" args={[FXAAShader]} uniforms-resolution-value={[1 / size.width, 1 / size.height]} />
      </effectComposer>
    </context.Provider>
  );
};

export default SelectionContext;
