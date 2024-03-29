import React, { useRef } from 'react';
import { Canvas, useFrame , useLoader} from 'react-three-fiber';
import {OrbitControls} from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export function ThreeCube() {

  return (
    <div style={{ width: '100%', height: '350px' }}>
      <Canvas>
        <OrbitControls/>
        <ambientLight intensity={2}/>
        <directionalLight position={[2,1,1]}/>
        <Cube/>
      </Canvas>
    </div>
  )
}

function Cube() {
  const mesh = useRef();

  useFrame((state,delta) => {
    mesh.current.rotation.x += 0.1* delta;
    mesh.current.rotation.y += 0.1* delta;

  })



  return (
    <mesh ref={mesh}>
      <boxGeometry args = {[2, 2, 2]} />
      <meshNormalMaterial color= {"orange"}/>
    </mesh>
  )
}

