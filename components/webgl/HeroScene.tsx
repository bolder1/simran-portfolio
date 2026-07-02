"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, AdaptiveDpr } from "@react-three/drei";
import Aurora from "./Aurora";
import Stickers from "./Stickers";
import { palette } from "@/lib/theme";

export default function HeroScene({
  active = true,
  scrollRef,
}: {
  active?: boolean;
  scrollRef?: React.RefObject<number>;
}) {
  return (
    <Canvas
      flat
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 42 }}
    >
      <Aurora scrollRef={scrollRef} />

      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 5, 4]} intensity={1.5} />
      <pointLight position={[-4, -2, 3]} intensity={12} color={palette.rose} />

      {/* Procedural env map baked once — glossy reflections, no network HDRI. */}
      <Environment resolution={64} frames={1}>
        <Lightformer form="circle" intensity={2.2} color="#ffffff" position={[0, 3, 4]} scale={5} />
        <Lightformer form="circle" intensity={1.4} color={palette.rose} position={[-4, 1, 2]} scale={3} />
        <Lightformer form="circle" intensity={1.2} color={palette.sky} position={[4, -1, 2]} scale={3} />
        <Lightformer form="ring" intensity={1.0} color={palette.butter} position={[0, -3, 3]} scale={3} />
      </Environment>

      <Stickers />
      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
