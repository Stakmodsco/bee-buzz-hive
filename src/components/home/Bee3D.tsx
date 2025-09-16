import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text3D, Float } from '@react-three/drei'
import { useRef, useEffect, useState, useMemo } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

// Simple 3D Bee Geometry Component
const BeeGeometry = () => {
  const beeRef = useRef<THREE.Group>(null!)
  
  // Create bee parts with simple geometries
  const beeColors = {
    body: '#2C1810',
    stripes: '#FFD700',
    wings: 'rgba(255, 255, 255, 0.3)',
    head: '#1A1A1A'
  }
  
  useFrame((state) => {
    if (beeRef.current) {
      // Subtle floating animation
      beeRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
      beeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.05
      
      // Wing flutter
      const wings = beeRef.current.children.filter((child, index) => index >= 2 && index <= 3)
      wings.forEach((wing, index) => {
        if (wing instanceof THREE.Mesh) {
          wing.rotation.y = Math.sin(state.clock.elapsedTime * 8 + index * Math.PI) * 0.3
        }
      })
    }
  })
  
  return (
    <group ref={beeRef} scale={[0.8, 0.8, 0.8]}>
      {/* Head */}
      <mesh position={[0, 0.3, 0.5]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhongMaterial color={beeColors.head} />
      </mesh>
      
      {/* Body with stripes */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.4, 16, 12]} />
        <meshPhongMaterial color={beeColors.body} />
      </mesh>
      
      {/* Yellow stripes */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0, -0.2 + i * 0.3]}>
          <ringGeometry args={[0.35, 0.4, 16]} />
          <meshPhongMaterial color={beeColors.stripes} />
        </mesh>
      ))}
      
      {/* Wings */}
      <mesh position={[-0.3, 0.2, 0]} rotation={[0, -0.3, 0.2]}>
        <planeGeometry args={[0.3, 0.8]} />
        <meshPhongMaterial 
          color={beeColors.wings} 
          transparent={true} 
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0.3, 0.2, 0]} rotation={[0, 0.3, -0.2]}>
        <planeGeometry args={[0.3, 0.8]} />
        <meshPhongMaterial 
          color={beeColors.wings} 
          transparent={true} 
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Antennae */}
      <mesh position={[-0.1, 0.5, 0.6]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshPhongMaterial color={beeColors.head} />
      </mesh>
      <mesh position={[0.1, 0.5, 0.6]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshPhongMaterial color={beeColors.head} />
      </mesh>
    </group>
  )
}

// Enhanced scene component with scroll-based movement
const BeeScene = () => {
  const groupRef = useRef<THREE.Group>(null!)
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useFrame((state) => {
    if (groupRef.current) {
      // Smooth scroll-based movement
      const targetY = scrollY * 0.001
      const targetX = Math.sin(scrollY * 0.003) * 0.5
      
      gsap.to(groupRef.current.position, {
        x: targetX,
        y: targetY,
        duration: 1,
        ease: "power2.out"
      })
      
      // Gentle rotation based on scroll
      groupRef.current.rotation.y = scrollY * 0.002
    }
  })
  
  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
        <BeeGeometry />
      </Float>
    </group>
  )
}

// Main 3D Bee Component
const Bee3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="w-full h-full"
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8} 
          color="#FFD700"
          castShadow
        />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#87CEEB" />
        
        {/* Bee Scene */}
        <BeeScene />
        
        {/* Subtle environment */}
        <fog attach="fog" args={['#f8fafc', 8, 12]} />
      </Canvas>
    </div>
  )
}

export default Bee3D