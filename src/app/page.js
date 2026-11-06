"use client";

import { useRef, useState } from "react";

import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import BackgroundMusic from "@/components/BackgroundMusic";
import PigeonFlight from "@/components/PigeonFlight";
import DateReveal from "@/components/DateReveal";
import Countdown from "@/components/Countdown";
import QuranVerse from "@/components/QuranVerse";
import OurStory from "@/components/OurStory";
import WeddingEvents from "@/components/WeddingEvents";
import Venue from "@/components/Venue";
import Blessing from "@/components/Blessing";
import Footer from "@/components/Footer";

import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";

export default function Home() {
	const [showIntro, setShowIntro] = useState(true);

	const audioRef = useRef(null);

	useGSAPAnimations();

	const startExperience = () => {
		const audio = audioRef.current;

		if (!audio) return;

		audio.volume = 0.35;

		// Called directly from the opening click gesture.
		void audio.play().catch(() => {
			// Music remains available through the music button.
		});
	};

	return (
		<main>
			{/* Background music */}
			<BackgroundMusic audioRef={audioRef} />

			{/* Flying pigeon */}
			{/* <PigeonFlight /> */}

			{/* Opening experience */}
			{showIntro && (
				<Intro
					onStart={startExperience}
					onComplete={() => setShowIntro(false)}
				/>
			)}

			{/* Wedding invitation */}
			<Hero />

			<DateReveal />

			<Countdown />

			<QuranVerse />

			<OurStory />

			<WeddingEvents />

			<Venue />

			<Blessing />

			<Footer />
		</main>
	);
}
