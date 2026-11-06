"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useGSAPAnimations() {
	useGSAP(() => {
		const elements = gsap.utils.toArray("[data-reveal]");

		elements.forEach((element) => {
			gsap.fromTo(
				element,
				{
					opacity: 0,
					y: 45,
				},
				{
					opacity: 1,
					y: 0,
					duration: 1.1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 85%",
						once: true,
					},
				}
			);
		});
	});
}
