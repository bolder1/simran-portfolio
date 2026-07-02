// Cotton Candy Sky — domain-warped multi-pastel aurora, fragment-shader driven.

export const auroraVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const auroraFragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform float uTime;
  uniform vec2  uMouse;    // -1..1, eased
  uniform float uScroll;   // 0..1 down-page
  uniform float uAspect;
  uniform vec3  uColorA;   // rose
  uniform vec3  uColorB;   // lilac
  uniform vec3  uColorC;   // sky
  uniform vec3  uColorD;   // mint
  uniform vec3  uColorE;   // butter
  uniform vec3  uCream;    // base lift

  // --- Ashima simplex noise 2D ---
  vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289(vec2 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x){ return mod289(((x*34.0)+1.0)*x); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0))
           + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p){
    float v = 0.0;
    float a = 0.5;
    for(int i=0;i<4;i++){
      v += a * snoise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    vec2 p = vec2(uv.x * uAspect, uv.y) * 1.25;

    float t = uTime * 0.045;
    vec2 m = uMouse * 0.28;

    // domain warp
    vec2 q = vec2(fbm(p + t + m), fbm(p + vec2(5.2, 1.3) - t));
    vec2 r = vec2(
      fbm(p + q * 1.6 + vec2(1.7, 9.2) + 0.15 * t + m),
      fbm(p + q * 1.6 + vec2(8.3, 2.8) - 0.126 * t)
    );
    float f = fbm(p + r * 1.25);

    // Blend the pastels — bias light so ink text stays readable over it.
    vec3 col = mix(uCream, uColorA, smoothstep(-0.35, 0.55, r.x));
    col = mix(col, uColorB, smoothstep(-0.1, 0.7, f));
    col = mix(col, uColorC, smoothstep(0.15, 0.95, q.y + 0.35));
    col = mix(col, uColorD, clamp(length(r) * 0.55, 0.0, 1.0));
    col = mix(col, uColorE, smoothstep(0.2, 0.9, r.y + 0.25) * 0.6);

    // lift toward cream so it reads sunlit + keeps contrast for foreground text
    col = mix(col, uCream, 0.24 + 0.12 * uScroll);

    // warm shift as you scroll
    col = mix(col, uColorE, uScroll * 0.08);

    // soft vignette
    float d = distance(uv, vec2(0.5, 0.46));
    col *= smoothstep(1.15, 0.25, d) * 0.22 + 0.86;

    // in-shader grain — never look like a default CSS gradient
    float g = fract(sin(dot(uv * vec2(1180.0, 760.0) + uTime * 0.6, vec2(12.9898, 78.233))) * 43758.5453);
    col += (g - 0.5) * 0.035;

    gl_FragColor = vec4(col, 1.0);
  }
`;
