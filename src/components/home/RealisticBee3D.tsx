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
      // Smooth scroll-based movement with enhanced bee behavior
      const scrollY = window.scrollY
      const targetY = scrollY * 0.002
      const targetX = Math.sin(scrollY * 0.005) * 1.2
      const targetZ = Math.cos(scrollY * 0.003) * 0.5
      
      // Smooth GSAP animations
      gsap.to(group.current.position, {
        x: targetX,
        y: targetY,
        z: targetZ,
        duration: 2,
        ease: "power2.out"
      })
      
      // Natural bee rotation based on movement
      gsap.to(group.current.rotation, {
        x: Math.sin(scrollY * 0.004) * 0.1,
        y: scrollY * 0.003 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2,
        z: Math.cos(scrollY * 0.005) * 0.1,
        duration: 2,
        ease: "power2.out"
      })
      
      // Gentle floating motion
      group.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.02
    }
  })
  
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