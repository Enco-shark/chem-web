import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Atom from './Atom'
import Bond from './Bond'

interface MoleculeSceneProps {
  formula: string
  autoRotate: boolean
}

// Sample molecule data - in production, this would come from MoleculesDB
const sampleMolecules: Record<string, any> = {
  H2O: {
    atoms: [
      { element: 'O', x: 0, y: 0, z: 0 },
      { element: 'H', x: -0.76, y: 0.59, z: 0 },
      { element: 'H', x: 0.76, y: 0.59, z: 0 },
    ],
    bonds: [
      [0, 1, 1],
      [0, 2, 1],
    ],
  },
  CO2: {
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0 },
      { element: 'O', x: -1.16, y: 0, z: 0 },
      { element: 'O', x: 1.16, y: 0, z: 0 },
    ],
    bonds: [
      [0, 1, 2],
      [0, 2, 2],
    ],
  },
  CH4: {
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0 },
      { element: 'H', x: 0.63, y: 0.63, z: 0.63 },
      { element: 'H', x: -0.63, y: -0.63, z: 0.63 },
      { element: 'H', x: -0.63, y: 0.63, z: -0.63 },
      { element: 'H', x: 0.63, y: -0.63, z: -0.63 },
    ],
    bonds: [
      [0, 1, 1],
      [0, 2, 1],
      [0, 3, 1],
      [0, 4, 1],
    ],
  },
}

// Atom properties
const atomProperties: Record<string, { radius: number; color: string }> = {
  H: { radius: 0.31, color: '#ffffff' },
  C: { radius: 0.77, color: '#444444' },
  N: { radius: 0.71, color: '#3050f8' },
  O: { radius: 0.66, color: '#ff0d0d' },
  S: { radius: 1.05, color: '#ffff30' },
  Cl: { radius: 1.02, color: '#1ff01f' },
  Na: { radius: 1.66, color: '#ab5cf2' },
  Fe: { radius: 1.56, color: '#e06633' },
  Cu: { radius: 1.45, color: '#c88033' },
}

export default function MoleculeScene({ formula, autoRotate }: MoleculeSceneProps) {
  const groupRef = useRef<THREE.Group>(null)
  const molecule = sampleMolecules[formula] || sampleMolecules.H2O

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} />
      <pointLight position={[0, 10, 0]} intensity={0.3} color="#4488ff" />

      {/* Controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.08}
        autoRotate={autoRotate}
        autoRotateSpeed={1.5}
        enablePan={false}
      />

      {/* Molecule group */}
      <group ref={groupRef}>
        {/* Atoms */}
        {molecule.atoms.map((atom: any, i: number) => {
          const props = atomProperties[atom.element] || {
            radius: 0.5,
            color: '#888888',
          }
          return (
            <Atom
              key={i}
              position={[atom.x * 0.8, atom.y * 0.8, atom.z * 0.8]}
              radius={props.radius * 0.6}
              color={props.color}
              element={atom.element}
            />
          )
        })}

        {/* Bonds */}
        {molecule.bonds.map((bond: number[], i: number) => {
          const startAtom = molecule.atoms[bond[0]]
          const endAtom = molecule.atoms[bond[1]]
          const order = bond[2]

          return (
            <Bond
              key={i}
              start={[startAtom.x * 0.8, startAtom.y * 0.8, startAtom.z * 0.8]}
              end={[endAtom.x * 0.8, endAtom.y * 0.8, endAtom.z * 0.8]}
              order={order}
            />
          )
        })}
      </group>
    </>
  )
}
