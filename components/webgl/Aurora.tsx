"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { auroraVertex, auroraFragment } from "./aurora-shaders";
import { hexToRgb, palette } from "@/lib/theme";

const v3 = (hex: string) => new THREE.Vector3(...hexToRgb(hex));

export default function Aurora({
  scrollRef,
}: {
  scrollRef?: React.RefObject<number>;
}) {
  const { viewport } = useThree();
  const eased = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
      uAspect: { value: 1 },
      uColorA: { value: v3(palette.rose) },
      uColorB: { value: v3(palette.lilac) },
      uColorC: { value: v3(palette.sky) },
      uColorD: { value: v3(palette.mint) },
      uColorE: { value: v3(palette.butter) },
      uCream: { value: v3(palette.cream) },
    }),
    [],
  );

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader: auroraVertex,
        fragmentShader: auroraFragment,
        depthWrite: false,
        depthTest: false, // pure background — never occlude the stickers
      }),
    [uniforms],
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    eased.current.lerp(state.pointer, 0.045);
    uniforms.uMouse.value.copy(eased.current);
    uniforms.uAspect.value = state.size.width / state.size.height;
    if (scrollRef) uniforms.uScroll.value = scrollRef.current ?? 0;
  });

  return (
    <mesh
      scale={[viewport.width * 1.35, viewport.height * 1.35, 1]}
      material={material}
      renderOrder={-1}
      frustumCulled={false}
      position={[0, 0, -1]}
    >
      <planeGeometry args={[1, 1]} />
    </mesh>
  );
}
