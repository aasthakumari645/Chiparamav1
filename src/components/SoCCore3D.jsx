import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// 1. Custom Hook to Get Scroll Position (Simulated for this example)
// In a real app, you'd use a library like 'react-use' or 'framer-motion'
// to get the actual scroll position (0 to 1).
const useScrollControl = () => {
    // This hook would normally read the scroll position from a provider.
    // For demonstration, we'll use a placeholder variable:
    const scrollPosition = 0.5; // Represents 50% scrolled down the page
    return scrollPosition;
};

// 2. The 3D Model Component
function ChipModel() {
    // Load your 3D asset (a simple, futuristic chip/cube model is recommended)
    // NOTE: Replace 'path/to/your/chip.glb' with the actual path to your 3D model file.
    // If you don't have one, you can substitute with a simple <mesh> for now.
    
    // const { scene } = useGLTF('path/to/your/chip.glb'); 
    
    const ref = useRef();
    const scroll = useScrollControl(); // Get the scroll progress (0 to 1)

    useFrame((state, delta) => {
        if (ref.current) {
            // --- SCROLL INTERACTION LOGIC ---
            
            // 1. Rotation (Spin slowly based on scroll)
            // Scroll 0 (top) = 0 radians, Scroll 1 (bottom) = 2 * PI radians (one full turn)
            ref.current.rotation.y = scroll * Math.PI * 2;
            
            // 2. Scale / Zoom (Slightly larger as we scroll down)
            // Starts at base scale (1) and zooms slightly up to 1.2
            const scaleFactor = 1 + scroll * 0.2; 
            ref.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
            
            // 3. Constant subtle movement for "aliveness"
            ref.current.rotation.x += delta * 0.05; 
            ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2; 
        }
    });

    // Placeholder Mesh if you don't have a GLB yet
    return (
        <mesh ref={ref}>
            <boxGeometry args={[2, 0.2, 2]} />
            <meshStandardMaterial 
                color="#00FFFF" // Cyan color
                emissive="#00FFFF" // Neon glow
                emissiveIntensity={0.5}
                metalness={1}
                roughness={0.1}
                wireframe={true} // Optional: Gives a strong futuristic wireframe look
            />
        </mesh>
    );

    // Uncomment the GLTF approach when ready:
    /*
    return (
        <primitive 
            object={scene} 
            ref={ref} 
            scale={[1, 1, 1]} // Adjust initial scale as needed
        />
    );
    */
}

// 3. The Main 3D Canvas
export default function SoCCore3D() {
  return (
    // The Canvas should be positioned fixed in the background (using Tailwind in your main layout)
    <Canvas
      style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 5], fov: 60 }} // Adjust camera for better viewing
    >
        {/* Lights and Environment */}
        <ambientLight intensity={0.5} color="#00FFFF" />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
        <spotLight position={[-20, 50, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />

        {/* Cinematic dark environment */}
        <Environment preset="night" blur={0.8} />

        {/* The chip model */}
        <ChipModel />
        
        {/* Optional: For testing model navigation */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
    </Canvas>
  );
}