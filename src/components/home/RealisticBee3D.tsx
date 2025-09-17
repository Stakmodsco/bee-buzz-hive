import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

// Realistic Bee Model Component
const RealisticBeeModel = () => {
  const group = useRef<THREE.Group>(null!)
  const { scene, animations } = useGLTF(
    'https://raw.githubusercontent.com/DennysDionigi/bee-glb/94253437c023643dd868592e11a0fd2c228cfe07/demon_bee_full_texture.glb'
  )
  const { actions } = useAnimations(animations, group)
  
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
          
          // Apply realistic bee colors - golden yellow body with black stripes
          if (material.name?.toLowerCase().includes('body') || !material.name) {
            material.color.setHex(0xDAA520) // Golden rod color
            material.roughness = 0.8
            material.metalness = 0.1
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
      const sideMovement = Math.sin(scrollY * 0.008) * 2.5 + Math.cos(time * 0.3) * 0.8
      const verticalMovement = scrollY * 0.003 + Math.sin(time * 1.2) * 0.15
      const depthMovement = Math.cos(scrollY * 0.006) * 1.2 + Math.sin(time * 0.8) * 0.3
      
      // Dynamic angles based on movement direction
      const rotationX = Math.sin(scrollY * 0.005) * 0.15 + Math.cos(time * 0.7) * 0.05
      const rotationY = scrollY * 0.004 + sideMovement * 0.1 + Math.sin(time * 0.6) * 0.3
      const rotationZ = Math.cos(scrollY * 0.007) * 0.2 + Math.sin(time * 0.9) * 0.08
      
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
    <group ref={group} scale={[0.9, 0.9, 0.9]}>
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