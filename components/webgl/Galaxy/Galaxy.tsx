import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import vertexShader from "./vertexShader.glsl";
import fragmentShader from "./fragmentShader.glsl";

// const fragmentShader = `
// varying float vDistance;

// void main() {
//     vec3 color = vec3(0.34, 0.53, 0.96);
//     float strength = distance(gl_PointCoord, vec2(0.5));
//     strength = 1.0 - strength;
//     strength = pow(strength, 3.0);

//     color = mix(color, vec3(0.97, 0.70, 0.45), vDistance * 0.5);
//     color = mix(vec3(0.0), color, strength);
//     gl_FragColor = vec4(color, strength);
// }
// `;

// const vertexShader = `
// varying float vDistance;

// void main() {
//     vec3 color = vec3(0.34, 0.53, 0.96);
//     float strength = distance(gl_PointCoord, vec2(0.5));
//     strength = 1.0 - strength;
//     strength = pow(strength, 3.0);

//     color = mix(color, vec3(0.97, 0.70, 0.45), vDistance * 0.5);
//     color = mix(vec3(0.0), color, strength);
//     gl_FragColor = vec4(color, strength);
// }
// `;

const CustomGeometryParticles = (props) => {
  const { count } = props;
  const radius = 2;

  // This reference gives us direct access to our points
  const points = useRef();

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt(Math.random()) * radius;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uRadius: {
        value: radius,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;

    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

const Scene = () => {
  return (
    <div className="fixed -z-10 inset-0 w-screen h-screen pointer-events-none bg-black">
      <Canvas camera={{ position: [2.0, 2.0, 2.0] }}>
        <ambientLight intensity={0.5} />
        <CustomGeometryParticles count={4000} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;
