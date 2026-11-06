"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";


export default function Intro({ onStart, onComplete }) {
	const videoRef = useRef(null);
	const isStartingRef = useRef(false);
	const hasCompletedRef = useRef(false);
	const [opened, setOpened] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	useEffect(() => {
		const { body, documentElement } = document;
		const previousBodyOverflow = body.style.overflow;
		const previousDocumentOverflow = documentElement.style.overflow;

		body.style.overflow = "hidden";
		documentElement.style.overflow = "hidden";

		return () => {
			body.style.overflow = previousBodyOverflow;
			documentElement.style.overflow = previousDocumentOverflow;
		};
	}, []);

	const handleOpen = async () => {
		if (isStartingRef.current) return;

		isStartingRef.current = true;
		setOpened(true);
		onStart?.();

		try {
			await videoRef.current?.play();
		} catch {
			isStartingRef.current = false;
			setOpened(false);
		}
	};

	const handleVideoEnd = () => {
		setIsClosing(true);
	};

	const handleFadeComplete = (event) => {
		if (
			!isClosing ||
			event.target !== event.currentTarget ||
			event.propertyName !== "opacity" ||
			hasCompletedRef.current
		) {
			return;
		}

		hasCompletedRef.current = true;
		onComplete?.();
	};

	return (
		<div
			className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#ede5f6] transition-opacity duration-1000 ease-out ${
				isClosing ? "pointer-events-none opacity-0" : "opacity-100"
			}`}
			onTransitionEnd={handleFadeComplete}>
			<video
				ref={videoRef}
				src="/videos/intro.mp4"
				muted
				playsInline
				preload="auto"
				onClick={handleOpen}
				onEnded={handleVideoEnd}
				className="absolute inset-0 h-full w-full cursor-pointer object-cover [filter:hue-rotate(310deg)_saturate(0.7)_brightness(1.2)]"
			/>

			<div
				className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-24 transition-opacity duration-300 ${
					opened ? "opacity-0" : "opacity-100"
				}`}>
				<p className="mb-5 text-xs uppercase tracking-[5px] text-white/90">
					A special invitation
				</p>

				<button
					onClick={handleOpen}
					disabled={opened}
					className="pointer-events-auto flex items-center gap-3 rounded-full border border-[#c5a46d]
          bg-white/70 px-8 py-4 text-sm text-[#746080] backdrop-blur-md">
					<Play size={15} />
					Open Invitation
				</button>
			</div>
		</div>
	);
}
