import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect, Suspense, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

// Realistic Bee Model Component
const RealisticBeeModel = () => {
  const group = useRef<THREE.Group>(null!)
  const [scale, setScale] = useState<[number, number, number]>([0.9, 0.9, 0.9])
  const { scene, animations } = useGLTF(
    'https://raw.githubusercontent.com/DennysDionigi/bee-glb/94253437c023643dd868592e11a0fd2c228cfe07/demon_bee_full_texture.glb'
  )
  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    // Function to update scale based on screen size
    const updateScale = () => {
      const isMobile = window.innerWidth < 768; // md breakpoint
      setScale(isMobile ? [0.4, 0.4, 0.4] : [0.9, 0.9, 0.9]);
    };

    // Set initial scale
    updateScale();

    // Add resize listener
    window.addEventListener('resize', updateScale);

    // Cleanup
    return () => window.removeEventListener('resize', updateScale);
  }, [])
  
  useEffect(() => {
    // Play the first animation if available
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = Object.values(actions)[0]
      firstAction?.play()
    }
    
    // Apply realistic bee colors to the model
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const material = child.material as THREE.MeshStandardMaterial
          
          // Apply realistic bee colors - bright yellow body with black stripes
          if (material.name?.toLowerCase().includes('body') || !material.name) {
            material.color.setHex(0xFFD700) // Bright bee yellow
            material.roughness = 0.7
            material.metalness = 0.2
          }
          
          // Black stripes and head
          if (material.name?.toLowerCase().includes('stripe') || 
              material.name?.toLowerCase().includes('head') ||
              material.name?.toLowerCase().includes('black')) {
            material.color.setHex(0x2C1810) // Dark brown-black
            material.roughness = 0.9
            material.metalness = 0.05
          }
          
          // Wings - translucent with slight blue tint
          if (material.name?.toLowerCase().includes('wing')) {
            material.color.setHex(0xE6F3FF) // Light blue-white
            material.transparent = true
            material.opacity = 0.7
            material.roughness = 0.1
            material.metalness = 0.0
          }
          
          material.needsUpdate = true
        }
      })
    }
  }, [actions, scene])
  
  useFrame((state) => {
    if (group.current) {
      const scrollY = window.scrollY
      const time = state.clock.elapsedTime
      
      // Enhanced side-to-side movement with scroll
      const sideMovement = Math.sin(scrollY * 0.008) * 3.0 + Math.cos(time * 0.4) * 0.6
      const verticalMovement = -scrollY * 0.004 + Math.sin(time * 1.2) * 0.12 // Negative to move down with scroll
      const depthMovement = Math.cos(scrollY * 0.006) * 0.8 + Math.sin(time * 0.8) * 0.4
      
      // Dynamic angles based on movement direction for realistic turning
      const rotationX = Math.sin(scrollY * 0.005) * 0.2 + Math.cos(time * 0.7) * 0.08
      const rotationY = sideMovement * 0.15 + Math.sin(time * 0.6) * 0.25 // Turn based on side movement
      const rotationZ = Math.cos(scrollY * 0.007) * 0.25 + sideMovement * 0.1 // Banking turns
      
      // Apply smooth movements
      gsap.to(group.current.position, {
        x: sideMovement,
        y: verticalMovement,
        z: depthMovement,
        duration: 1.5,
        ease: "power2.out"
      })
      
      // Apply dynamic rotations for realistic flight patterns
      gsap.to(group.current.rotation, {
        x: rotationX,
        y: rotationY,
        z: rotationZ,
        duration: 1.5,
        ease: "power2.out"
      })
      
      // Additional subtle floating motion
      group.current.position.y += Math.sin(time * 2.1) * 0.03
      group.current.position.x += Math.cos(time * 1.8) * 0.02
    }
  })
  
  
  return (
    <group ref={group} scale={scale}>
      <primitive object={scene} />
    </group>
  )
}

// Minimal loading fallback - bee appears almost immediately
const BeeLoader = () => (
  <mesh scale={[0.3, 0.3, 0.3]}>
    <sphereGeometry args={[0.2, 8, 6]} />
    <meshStandardMaterial color="#DAA520" opacity={0.8} transparent />
  </mesh>
)

// Main Realistic Bee Scene
const RealisticBeeScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      <Canvas
        camera={{ 
          position: [0, 0, 13], 
          fov: 10,
        }}
        className="w-full h-full"
      >
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.6} color="#FFF8DC" />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2} 
          color="#FFD700"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.8} 
          color="#87CEEB" 
        />
        <spotLight
          position={[0, 20, 10]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#FFFACD"
          castShadow
        />
        
        {/* Realistic Bee - loads immediately with minimal fallback */}
        <Suspense fallback={<BeeLoader />}>
          <RealisticBeeModel />
        </Suspense>
        
        {/* Atmospheric fog */}
        <fog attach="fog" args={['#fefbf3', 15, 25]} />
      </Canvas>
    </div>
  )
}

export default RealisticBeeScene