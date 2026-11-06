"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

export default function BackgroundMusic({ audioRef: externalAudioRef }) {
	const fallbackAudioRef = useRef(null);
	const audioRef = externalAudioRef ?? fallbackAudioRef;
	const [playing, setPlaying] = useState(false);

	const toggleMusic = async () => {
		const audio = audioRef.current;

		if (!audio) return;

		if (audio.paused) {
			try {
				await audio.play();
				setPlaying(true);
			} catch {
				setPlaying(false);
			}
		} else {
			audio.pause();
			setPlaying(false);
		}
	};

	useEffect(() => {
		const audio = audioRef.current;

		if (!audio) return;

		const syncState = () => setPlaying(!audio.paused);
		const attemptAutoplay = async () => {
			try {
				await audio.play();
			} catch {
				setPlaying(false);
			}
		};

		audio.addEventListener("play", syncState);
		audio.addEventListener("pause", syncState);
		void attemptAutoplay();

		return () => {
			audio.removeEventListener("play", syncState);
			audio.removeEventListener("pause", syncState);
		};
	}, [audioRef]);

	return (
		<>
			<audio
				ref={audioRef}
				src="/audio/wedding-music.mp3"
				autoPlay
				loop
				preload="none"
			/>

			<button
				onClick={toggleMusic}
				aria-label={playing ? "Pause music" : "Play music"}
				className="fixed right-5 top-5 z-50 flex h-12 w-12
        items-center justify-center rounded-full border border-[#c5a46d]
        bg-white/80 text-[#746080] shadow-lg backdrop-blur-md">
				{playing ? (
					<Music2 size={19} className="animate-pulse" />
				) : (
					<VolumeX size={19} />
				)}
			</button>
		</>
	);
}
