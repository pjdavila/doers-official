import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface InteractiveGlobeProps {
  className?: string;
}

const InteractiveGlobe = ({ className = '' }: InteractiveGlobeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;
      container.appendChild(renderer.domElement);

      // Globe geometry and material with DOERS colors
      const geometry = new THREE.SphereGeometry(2, 64, 64);
      
      // Vertex shader for the globe effect
      const vertexShader = `
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vPosition = position;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      // Fragment shader with DOERS colors (purple and orange)
      const fragmentShader = `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          // DOERS brand colors
          vec3 purple = vec3(0.478, 0.247, 1.0); // #7A3FFF
          vec3 orange = vec3(1.0, 0.353, 0.122); // #FF5A1F
          
          // Create animated patterns
          float noise = sin(vPosition.x * 2.0 + time) * sin(vPosition.y * 2.0 + time * 0.5) * sin(vPosition.z * 2.0 + time * 0.3);
          float wave = sin(vUv.x * 10.0 + time * 2.0) * sin(vUv.y * 8.0 + time * 1.5);
          
          // Mix colors based on position and animation
          float colorMix = (noise + wave + vPosition.y) * 0.5 + 0.5;
          vec3 color = mix(purple, orange, colorMix);
          
          // Add glow effect
          float fresnel = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
          color += fresnel * 0.3;
          
          // Add transparency for depth
          float alpha = 0.8 + fresnel * 0.2;
          
          gl_FragColor = vec4(color, alpha);
        }
      `;

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          time: { value: 0 }
        },
        transparent: true,
        blending: THREE.AdditiveBlending
      });

      const globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      // Add wireframe overlay
      const wireframeGeometry = new THREE.SphereGeometry(2.01, 32, 32);
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x7A3FFF,
        wireframe: true,
        transparent: true,
        opacity: 0.2
      });
      const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
      scene.add(wireframe);

      // Add particles around the globe
      const particleCount = 200;
      const particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        // Random positions around the sphere
        const radius = 3 + Math.random() * 2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);

        // DOERS colors for particles
        const colorChoice = Math.random();
        if (colorChoice < 0.5) {
          colors[i * 3] = 0.478;
          colors[i * 3 + 1] = 0.247;
          colors[i * 3 + 2] = 1.0;
        } else {
          colors[i * 3] = 1.0;
          colors[i * 3 + 1] = 0.353;
          colors[i * 3 + 2] = 0.122;
        }
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Mouse interaction
      const mouse = new THREE.Vector2();
      const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / height) * 2 + 1;
      };

      container.addEventListener('mousemove', handleMouseMove);

      // Animation loop
      const animate = () => {
        const time = Date.now() * 0.001;
        
        // Update shader uniforms
        material.uniforms.time.value = time;
        
        // Rotate globe
        globe.rotation.y += 0.005;
        globe.rotation.x += 0.002;
        
        // Rotate wireframe in opposite direction
        wireframe.rotation.y -= 0.003;
        wireframe.rotation.x -= 0.001;
        
        // Animate particles
        particles.rotation.y += 0.001;
        particles.rotation.x += 0.0005;
        
        // Mouse interaction effect
        globe.rotation.x += mouse.y * 0.001;
        globe.rotation.y += mouse.x * 0.001;
        
        renderer.render(scene, camera);
        animationIdRef.current = requestAnimationFrame(animate);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!containerRef.current || !rendererRef.current) return;
        
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;
        
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        rendererRef.current.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
          rendererRef.current.dispose();
        }
        container.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    } catch (error) {
      console.warn('WebGL not supported, globe animation disabled:', error);
      setWebGLSupported(false);
    }
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

export default InteractiveGlobe;
