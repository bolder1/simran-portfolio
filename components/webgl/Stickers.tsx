"use client";

import { useMemo, useRef, type ReactNode } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { palette } from "@/lib/theme";

/* ---------------------------------------------------------------- geometries */

function useHeartGeometry() {
  return useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0.25, 0.25);
    s.bezierCurveTo(0.25, 0.25, 0.2, 0, 0, 0);
    s.bezierCurveTo(-0.3, 0, -0.3, 0.35, -0.3, 0.35);
    s.bezierCurveTo(-0.3, 0.55, -0.1, 0.77, 0.25, 0.95);
    s.bezierCurveTo(0.6, 0.77, 0.8, 0.55, 0.8, 0.35);
    s.bezierCurveTo(0.8, 0.35, 0.8, 0, 0.5, 0);
    s.bezierCurveTo(0.35, 0, 0.25, 0.25, 0.25, 0.25);
    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 0.4,
      bevelEnabled: true,
      bevelThickness: 0.14,
      bevelSize: 0.12,
      bevelSegments: 6,
      curveSegments: 24,
    });
    geo.center();
    geo.computeVertexNormals();
    return geo;
  }, []);
}

function useStarGeometry() {
  return useMemo(() => {
    const s = new THREE.Shape();
    const spikes = 5;
    const outer = 0.55;
    const inner = 0.24;
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
      const px = Math.cos(a) * r;
      const py = Math.sin(a) * r;
      i === 0 ? s.moveTo(px, py) : s.lineTo(px, py);
    }
    s.closePath();
    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 0.32,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.09,
      bevelSegments: 5,
      curveSegments: 8,
    });
    geo.center();
    geo.computeVertexNormals();
    return geo;
  }, []);
}

/* ------------------------------------------------------------------ material */

function candy(color: string, opts?: { emissive?: number }) {
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={0.16}
      metalness={0}
      clearcoat={1}
      clearcoatRoughness={0.28}
      sheen={0.6}
      sheenColor="#ffffff"
      envMapIntensity={1.15}
      emissive={color}
      emissiveIntensity={opts?.emissive ?? 0.05}
    />
  );
}

/* -------------------------------------------------------------------- sticker */

type StickerProps = {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  spin?: number;
  floatSpeed?: number;
  children: ReactNode;
};

function Sticker({
  position,
  scale = 1,
  rotation = [0, 0, 0],
  spin = 0.15,
  floatSpeed = 1.4,
  children,
}: StickerProps) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * spin;
  });
  return (
    <Float
      speed={floatSpeed}
      rotationIntensity={0.6}
      floatIntensity={1.1}
      position={position}
    >
      <group ref={ref} scale={scale} rotation={rotation}>
        {children}
      </group>
    </Float>
  );
}

/* --------------------------------------------------------------------- group */

export default function Stickers() {
  const heart = useHeartGeometry();
  const star = useStarGeometry();
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // place stickers relative to the viewport so they frame the headline at any aspect
  const hw = viewport.width / 2;
  const hh = viewport.height / 2;
  const P = (nx: number, ny: number, z = 0): [number, number, number] => [
    nx * hw,
    ny * hh,
    z,
  ];

  // gentle cursor parallax for the whole cluster
  useFrame((state) => {
    if (!group.current) return;
    const g = group.current;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, state.pointer.x * 0.18, 0.04);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -state.pointer.y * 0.14, 0.04);
    g.position.x = THREE.MathUtils.lerp(g.position.x, state.pointer.x * 0.3, 0.04);
    g.position.y = THREE.MathUtils.lerp(g.position.y, state.pointer.y * 0.22, 0.04);
  });

  return (
    <group ref={group}>
      {/* magenta heart — top left */}
      <Sticker position={P(-0.74, 0.46, 0.4)} scale={0.6} rotation={[0.2, 0, Math.PI]} spin={0.1} floatSpeed={1.5}>
        <mesh geometry={heart}>{candy(palette.magenta, { emissive: 0.08 })}</mesh>
      </Sticker>

      {/* butter star — top right */}
      <Sticker position={P(0.78, 0.56, 0.3)} scale={0.55} rotation={[0.1, 0.3, -0.2]} spin={0.18}>
        <mesh geometry={star}>{candy(palette.butter)}</mesh>
      </Sticker>

      {/* lilac blob — mid right */}
      <Sticker position={P(0.86, -0.36, 0.2)} scale={0.72} spin={0.12} floatSpeed={1.2}>
        <mesh>
          <icosahedronGeometry args={[0.6, 8]} />
          <MeshDistortMaterial
            color={palette.lilac}
            roughness={0.18}
            clearcoat={1}
            clearcoatRoughness={0.3}
            envMapIntensity={1.1}
            speed={1.6}
            distort={0.32}
          />
        </mesh>
      </Sticker>

      {/* sky donut — mid left */}
      <Sticker position={P(-0.88, -0.4, 0.4)} scale={0.55} rotation={[0.7, 0.2, 0]} spin={0.22}>
        <mesh>
          <torusGeometry args={[0.42, 0.19, 24, 48]} />
          {candy(palette.sky)}
        </mesh>
      </Sticker>

      {/* mint gumball — bottom left */}
      <Sticker position={P(-0.5, -0.74, 0.6)} scale={0.42} spin={0.1} floatSpeed={1.7}>
        <mesh>
          <sphereGeometry args={[0.5, 48, 48]} />
          {candy(palette.mint)}
        </mesh>
      </Sticker>

      {/* rose candy cube — bottom right */}
      <Sticker position={P(0.56, -0.72, 0.5)} scale={0.5} rotation={[0.4, 0.5, 0.1]} spin={0.16}>
        <RoundedBox args={[0.62, 0.62, 0.62]} radius={0.16} smoothness={5}>
          {candy(palette.rose)}
        </RoundedBox>
      </Sticker>

      {/* small sky star — far left */}
      <Sticker position={P(-0.92, 0.08, -0.2)} scale={0.32} rotation={[0, 0, 0.4]} spin={0.2}>
        <mesh geometry={star}>{candy(palette.sky)}</mesh>
      </Sticker>

      {/* magenta pill — far right */}
      <Sticker position={P(0.94, 0.12, -0.1)} scale={0.38} rotation={[0.3, 0, 0.9]} spin={0.14}>
        <mesh>
          <capsuleGeometry args={[0.22, 0.4, 12, 24]} />
          {candy(palette.magenta, { emissive: 0.07 })}
        </mesh>
      </Sticker>
    </group>
  );
}
