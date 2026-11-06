"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export default function PigeonFlight() {
	const pigeonRef = useRef(null);
	const pathRef = useRef(null);

	useGSAP(() => {
		const pigeon = pigeonRef.current;
		const path = pathRef.current;

		if (!pigeon || !path) return;

		const media = gsap.matchMedia();

		media.add("(prefers-reduced-motion: no-preference)", () => {
			gsap.set(pigeon, {
				autoAlpha: 1,
			});

			gsap.to(pigeon, {
				motionPath: {
					path,
					align: path,
					autoRotate: true,
					alignOrigin: [0.5, 0.5],
				},

				ease: "none",

				scrollTrigger: {
					trigger: document.body,
					start: "top top",
					end: () => ScrollTrigger.maxScroll(window),
					scrub: 1.5,
					invalidateOnRefresh: true,
				},
			});
		});

		return () => media.revert();
	}, []);

	return (
		<>
			{/* SVG flight path */}
			<svg
				aria-hidden="true"
				className="pointer-events-none fixed inset-0
        z-40 h-screen w-screen opacity-0"
				viewBox="0 0 1200 900"
				preserveAspectRatio="none">
				<path
					ref={pathRef}
					d="
            M -100 700
            C 150 150, 350 850, 500 450
            S 850 100, 1050 500
            S 1250 850, 1350 250
          "
					fill="none"
				/>
			</svg>

			{/* Flying pigeon */}
			<img
				ref={pigeonRef}
				src="/images/pigeon.svg"
				alt=""
				aria-hidden="true"
				className="pointer-events-none fixed left-0 top-0
        z-40 w-16 opacity-0 sm:w-20"
			/>
		</>
	);
}
