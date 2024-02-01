import React, { useRef } from 'react';
import { Canvas, useFrame , extend} from 'react-three-fiber';
import {OrbitControls} from "@react-three/drei";

export function ThreeCube() {

  return (
    <div>
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
      <boxGeometry args = {[3.5, 3.5, 3.5]} />
      <meshNormalMaterial color= {"orange"}/>
    </mesh>
  )
}

