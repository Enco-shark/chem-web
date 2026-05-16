import { useMemo } from 'react'
import * as THREE from 'three'

interface BondProps {
  start: [number, number, number]
  end: [number, number, number]
  order: number // 1 = single, 2 = double, 3 = triple
}

export default function Bond({ start, end, order }: BondProps) {
  const bondData = useMemo(() => {
    const startVec = new THREE.Vector3(...start)
    const endVec = new THREE.Vector3(...end)
    const direction = new THREE.Vector3().subVectors(endVec, startVec)
    const length = direction.length()
    const center = new THREE.Vector3()
      .addVectors(startVec, endVec)
      .multiplyScalar(0.5)

    // Calculate quaternion for orientation
    const quaternion = new THREE.Quaternion()
    quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize()
    )

    // Calculate perpendicular direction for multiple bonds
    const perpendicular = new THREE.Vector3()
    if (Math.abs(direction.y) < 0.99) {
      perpendicular
        .crossVectors(direction, new THREE.Vector3(0, 1, 0))
        .normalize()
    } else {
      perpendicular
        .crossVectors(direction, new THREE.Vector3(1, 0, 0))
        .normalize()
    }

    return { length, center, quaternion, perpendicular }
  }, [start, end])

  const bondRadius = 0.06
  const bondGap = 0.14

  return (
    <group>
      {Array.from({ length: order }).map((_, i) => {
        const offset =
          order > 1 ? (i - (order - 1) / 2) * bondGap : 0

        return (
          <mesh
            key={i}
            position={[
              bondData.center.x + bondData.perpendicular.x * offset,
              bondData.center.y + bondData.perpendicular.y * offset,
              bondData.center.z + bondData.perpendicular.z * offset,
            ]}
            quaternion={bondData.quaternion}
          >
            <cylinderGeometry args={[bondRadius, bondRadius, bondData.length, 12]} />
            <meshPhysicalMaterial
              color="#889999"
              transparent
              opacity={0.55}
              roughness={0.3}
              metalness={0.1}
              clearcoat={0.5}
            />
          </mesh>
        )
      })}
    </group>
  )
}
