import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * HeroScene — R3F backdrop.
 * Studio lighting + a particle field that reacts to the pointer,
 * plus a low-poly "torus barbell plate" emitting subtle yellow rim light.
 * Kept lightweight (DPR clamped, single mesh + Points) for 60fps.
 */

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  attribute float aSize;
  attribute float aOffset;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    float wave = sin(uTime * 0.6 + aOffset * 6.2831) * 0.25;
    pos.y += wave * 0.4;
    pos.x += cos(uTime * 0.4 + aOffset * 3.14) * 0.15;

    // mouse parallax pull
    vec2 m = uMouse * 1.5;
    pos.xy += m * (0.05 + aOffset * 0.15);

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * (300.0 / -mv.z);
    vAlpha = 0.35 + aOffset * 0.65;
  }
`;

const fragmentShader = /* glsl */ `
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float core = smoothstep(0.5, 0.0, d);
    vec3 col = mix(vec3(1.0, 0.84, 0.0), vec3(1.0, 1.0, 1.0), pow(core, 4.0));
    gl_FragColor = vec4(col, core * vAlpha);
  }
`;

function ParticleField({ count = 1400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const mat = useRef<THREE.ShaderMaterial>(null!);
  const mouse = useRef(new THREE.Vector2(0, 0));

  const { positions, sizes, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const offsets = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = Math.pow(Math.random(), 0.7) * 6;
      const a = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4.5;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(a) * r - 2;
      sizes[i] = 0.6 + Math.random() * 2.4;
      offsets[i] = Math.random();
    }
    return { positions, sizes, offsets };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [],
  );

  useFrame((state, delta) => {
    uniforms.uTime.value += delta;
    mouse.current.lerp(state.pointer, 0.05);
    uniforms.uMouse.value.copy(mouse.current);
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  return (
    <>
      <points ref={ref}>
        <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aOffset" args={[offsets, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
    </>
  );
}

function PlateMesh() {
  const group = useRef<THREE.Group>(null!);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
      <group ref={group} position={[2.2, 0, 0]}>
        {/* Outer plate */}
        <mesh castShadow receiveShadow>
          <torusGeometry args={[1.1, 0.22, 32, 96]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.95}
            roughness={0.35}
            envMapIntensity={1.2}
          />
        </mesh>
        {/* Inner rim glow */}
        <mesh>
          <torusGeometry args={[0.78, 0.02, 16, 96]} />
          <meshBasicMaterial color="#FFD700" />
        </mesh>
        {/* Bar */}
        <mesh position={[-1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.09, 0.09, 2.4, 24]} />
          <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0.2, 5.6], fov: 42 }}
    >
      {/* Background is transparent for overlay */}

      {/* Studio lighting */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[4, 2, 4]} intensity={3} color="#FFD700" />
      <pointLight position={[-3, 1, 2]} intensity={2.2} color="#FFD700" distance={9} />
      <pointLight position={[4, -2, 2]} intensity={0.6} color="#ffffff" distance={10} />

      <Environment preset="warehouse" />

      <fog attach="fog" args={["#050505", 2, 10]} />

      <ParticleField />
      <PlateMesh />
    </Canvas>
  );
}
