import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Rocket = () => {
  const { scene } = useGLTF("./Rocket/scene.glb");
 

  // Traverse the scene to assign the texture to all mesh materials
  const applyTexture = (object) => {
    if (object.isMesh) {
      object.material.map = texture;
      object.material.needsUpdate = true;
    }
  };

  // Traverse through the scene to apply the texture to each mesh
  const traverseScene = (scene) => {
    scene.traverse(applyTexture);
  };

  return (
    <primitive
      object={scene}
      scale={5}
      position-y={-7}
      rotation-y={0}
      onPointerDown={traverseScene}
    />
  );
};

const RocketCanvas = () => {
  return (
    <Canvas
    
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 3,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Rocket />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default RocketCanvas;
