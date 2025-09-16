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
  }, [actions])
  
  useFrame((state) => {
    if (group.current) {
      // Enhanced scroll-based movement with more pronounced bee behavior
      const scrollY = window.scrollY
      const scrollProgress = scrollY / (document.body.scrollHeight - window.innerHeight)
      
      // More dramatic scroll-based positioning
      const targetY = scrollY * 0.008 - 2 // More vertical movement
      const targetX = Math.sin(scrollY * 0.01) * 3 // Wider horizontal movement
      const targetZ = Math.cos(scrollY * 0.008) * 1.5 // More depth movement
      
      // Enhanced GSAP animations with scroll-responsive speed
      gsap.to(group.current.position, {
        x: targetX,
        y: targetY,
        z: targetZ,
        duration: 1.5,
        ease: "power2.out"
      })
      
      // Dynamic bee rotation with scroll influence
      const rotationIntensity = Math.min(scrollProgress * 2, 1)
      gsap.to(group.current.rotation, {
        x: Math.sin(scrollY * 0.008) * 0.3 * rotationIntensity,
        y: scrollY * 0.005 + Math.sin(state.clock.elapsedTime * 0.8) * 0.4,
        z: Math.cos(scrollY * 0.01) * 0.2 * rotationIntensity,
        duration: 1.5,
        ease: "power2.out"
      })
      
      // Enhanced floating motion with scroll influence
      const floatIntensity = 0.05 + (scrollProgress * 0.03)
      group.current.position.y += Math.sin(state.clock.elapsedTime * 2) * floatIntensity
      
      // Wing flutter effect based on scroll speed
      const scrollSpeed = Math.abs(scrollY - (group.current.userData.lastScrollY || 0))
      group.current.userData.lastScrollY = scrollY
      
      if (scrollSpeed > 1) {
        group.current.scale.setScalar(0.8 + Math.sin(state.clock.elapsedTime * 15) * 0.05)
      }
    }
  })
  
  // Apply BuzzWorld color scheme to bee materials
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
          const mesh = child as THREE.Mesh
          // Clone material to avoid affecting other instances
          const material = (mesh.material as THREE.MeshStandardMaterial).clone()
          
          // Apply BuzzWorld color theme based on material properties
          if (material.name?.includes('body') || material.color) {
            // Bee body - rich black with honey highlights
            material.color.setHSL(38/360, 0.92, 0.08) // --bee-black
            material.emissive.setHSL(45/360, 0.98, 0.15) // Subtle honey glow
          }
          
          if (material.name?.includes('wing')) {
            // Wings - translucent with honey tint
            material.transparent = true
            material.opacity = 0.7
            material.color.setHSL(45/360, 0.98, 0.91) // Light honey color
          }
          
          if (material.name?.includes('stripe') || material.name?.includes('yellow')) {
            // Yellow stripes - bright honey color
            material.color.setHSL(45/360, 0.98, 0.51) // --honey-yellow
            material.emissive.setHSL(45/360, 1.0, 0.1) // Honey glow
          }
          
          // Enhanced material properties for better lighting
          material.metalness = 0.1
          material.roughness = 0.3
          
          mesh.material = material
        }
      })
    }
  }, [scene])

  return (
    <group ref={group} scale={[0.8, 0.8, 0.8]}>
      <primitive object={scene} />
    </group>
  )
}

// Loading fallback component
const BeeLoader = () => (
  <mesh>
    <sphereGeometry args={[0.5, 16, 16]} />
    <meshStandardMaterial color="#FFD700" opacity={0.6} transparent />
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
        {/* BuzzWorld-themed Lighting Setup */}
        <ambientLight intensity={0.7} color="hsl(48, 100%, 98%)" />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          color="hsl(45, 98%, 51%)"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.6} 
          color="hsl(122, 39%, 49%)" 
        />
        <spotLight
          position={[0, 20, 10]}
          angle={0.4}
          penumbra={1}
          intensity={0.8}
          color="hsl(42, 100%, 70%)"
          castShadow
        />
        
        {/* Realistic Bee with Suspense */}
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