// Volumetric hologram background (Three.js WebGL).
// Rotating wireframe crystal + floating particles; bursts on solve.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

(function () {
  const canvas = document.getElementById('hologram');
  if (!canvas) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer, scene, camera, group;
  let burst = 0;
  let baseScale = 1;

  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 6.5;

    group = new THREE.Group();
    scene.add(group);

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2, 1),
      new THREE.MeshBasicMaterial({ color: 0x57b8ff, wireframe: true, transparent: true, opacity: 0.65 }),
    );
    group.add(inner);

    const outer = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.9, 0),
      new THREE.MeshBasicMaterial({ color: 0x9b7bff, wireframe: true, transparent: true, opacity: 0.3 }),
    );
    group.add(outer);

    const count = 220;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.4 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(
      pointsGeo,
      new THREE.PointsMaterial({ color: 0x7fd0ff, size: 0.035, transparent: true, opacity: 0.6 }),
    );
    group.add(points);
  } catch (err) {
    console.error('[hologram] WebGL init failed:', err);
    return;
  }

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    baseScale = Math.min(1, Math.max(0.5, w / h));
  }
  window.addEventListener('resize', resize);
  resize();

  let mx = 0, my = 0;
  window.addEventListener('pointermove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function renderFrame() {
    const t = performance.now() * 0.001;
    group.rotation.y = t * 0.22 + mx * 0.45;
    group.rotation.x = t * 0.1 + my * 0.35;
    group.scale.setScalar(baseScale * (1 + burst * 0.07 + Math.sin(t * 2) * 0.012));
    burst *= 0.95;
    renderer.render(scene, camera);
  }

  if (reduceMotion) {
    renderFrame();
  } else {
    (function loop() {
      requestAnimationFrame(loop);
      renderFrame();
    })();
  }

  window.TrizHolo = {
    burst: function () { burst = 1; },
    calm: function () { burst = 0; },
  };
})();
