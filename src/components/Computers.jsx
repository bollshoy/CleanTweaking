import React, { Suspense, useEffect, useMemo } from "react";;
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMobile } from '../redux/action.js';
import { Canvas } from "@react-three/fiber"
import './_Computers.scss';

const Computers = ({ isMobile }) => {
	const computer = useMemo(() => useGLTF("./desktop_pc/scene.gltf"), [])

	return (
			<mesh>
				<ambientLight intensity={1} />
				<hemisphereLight intensity={1.3} groundColor="black" />
				<spotLight
						position={[-20, 10, 10]}
						angle={1.7}
						penumbra={1}
						intensity={4}
						castShadow
						shadow-mapSize={1024}
				/>
				<pointLight position={[-1, 3, 0.7]} intensity={6} />
				<primitive
						object={computer.scene}
						scale={isMobile ? 1 : 1}
						position={isMobile ? [0, -1.5, -2.2] : [0, -1.5, -1.5]}
						rotation={[-0.01, -0.2, -0.1]}
				/>
			</mesh>
	);
};

const ComputersCanvas = () => {
	const dispatch = useDispatch();
	const isMobile = useSelector((state) => state.isMobile);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 500px)");
		dispatch(setIsMobile(mediaQuery.matches));

		const handleMediaQueryChange = (event) => {
			dispatch(setIsMobile(event.matches));
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, [dispatch]);

	return (
			<Canvas
					frameloop='demand'
					shadows
					dpr={[1, 2]}
					camera={{ position: [20, 6, 2], fov: 25 }}
					gl={{ preserveDrawingBuffer: true }}>
				<Suspense>
					<OrbitControls
							enablePan={false}
							onContextMenu={(e) => e.preventDefault()}
							enableZoom={false}
							maxPolarAngle={Math.PI / 2}
							minPolarAngle={Math.PI / 2}
					/>
					<Computers isMobile={isMobile} />
					<EffectComposer>
						<Bloom intensity={0.5} />
					</EffectComposer>
				</Suspense>
				<Preload all />
			</Canvas>
	);
};

export default ComputersCanvas;
