import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useViewerStore } from '@/store/viewerStore'

interface AtomProps {
  position: [number, number, number]
  radius: number
  color: string
  element: string
}

export default function Atom({ position, radius, color, element }: AtomProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const setHoveredAtom = useViewerStore((state) => state.setHoveredAtom)

  // Scale animation on hover
  useFrame(() => {
    if (meshRef.current) {
      const targetScale = hovered ? 1.15 : 1
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      )
    }
  })

  const handlePointerOver = (e: any) => {
    e.stopPropagation()
    setHovered(true)
    setHoveredAtom({
      element,
      name: element, // Would come from AtomProperties
      nameCN: element,
      mass: 0,
      position,
    })
  }

  const handlePointerOut = () => {
    setHovered(false)
    setHoveredAtom(null)
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <sphereGeometry args={[radius, 32, 32]} />
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.88}
        roughness={0.15}
        metalness={0.05}
        clearcoat={0.8}
        clearcoatRoughness={0.1}
        emissive={hovered ? color : '#000000'}
        emissiveIntensity={hovered ? 0.2 : 0}
      />
    </mesh>
  )
}
