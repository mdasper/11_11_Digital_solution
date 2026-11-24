import React, { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const AuroraShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    // Simplex noise helpers
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      float time = uTime * 0.2;

      // Subtle mouse bias
      vec2 mouseOffset = (uMouse - 0.5) * 0.12;
      uv += mouseOffset;

      // Layered noise
      float n1 = snoise(uv * 1.5 + vec2(time * 0.3, time * 0.15));
      float n2 = snoise(uv * 3.0 - vec2(time * 0.2, time * 0.4));
      float combined = n1 * 0.6 + n2 * 0.4;

      // Luxury Light Palette: Clean Offwhite (#FAF7F9), Blush (#FFE8EE), Soft Crimson (#F8115A)
      vec3 colorBase = vec3(0.98, 0.97, 0.98);
      vec3 colorBlush = vec3(1.0, 0.91, 0.93);
      vec3 colorCrimson = vec3(0.972, 0.067, 0.353);

      vec3 finalColor = mix(colorBase, colorBlush, clamp(combined * 0.7 + 0.3, 0.0, 1.0));
      finalColor = mix(finalColor, colorCrimson, clamp(combined * combined * 0.22, 0.0, 1.0));

      gl_FragColor = vec4(finalColor, 0.7);
    }
  `,
}

const AuroraMesh = () => {
  const meshRef = useRef(null)
  const materialRef = useRef(null)

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
      materialRef.current.uniforms.uMouse.value.set(
        (state.pointer.x + 1) / 2,
        (state.pointer.y + 1) / 2
      )
    }
  })

  const shader = useMemo(() => AuroraShaderMaterial, [])

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        args={[shader]}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  )
}

export const HeroAuroraCanvas = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Only load Three.js Canvas on desktop fine pointer devices
    const isFine = window.matchMedia('(min-width: 1024px) and (hover: hover)').matches
    setIsDesktop(isFine)
  }, [])

  if (!isDesktop) {
    // CSS Fallback for mobile/tablet/low-power
    return (
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#FAF7F9] via-[#FFF0F4] to-[#FFE8EE]/60 opacity-80 pointer-events-none"
        aria-hidden="true"
      />
    )
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-75">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%' }}
      >
        <AuroraMesh />
      </Canvas>
    </div>
  )
}
