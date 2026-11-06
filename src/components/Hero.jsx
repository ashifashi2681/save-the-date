"use client";

import { wedding } from "@/data/wedding";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative flex min-h-screen items-center justify-center
      overflow-hidden text-center">
			<video
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
				poster="/images/venue.webp"
				className="absolute inset-0 h-full w-full object-cover [filter:hue-rotate(310deg)_saturate(0.7)_brightness(1.2)]">
				<source src="/videos/wedding-hero.mp4" type="video/mp4" />
			</video>

			<div className="absolute inset-0 bg-[#302238]/35" />

			<div className="relative z-10 px-5 text-white">
				<p data-reveal className="arabic mb-8 text-3xl text-[#f2dcae]">
					بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
				</p>

				<p className="mb-4 text-xs uppercase tracking-[6px]">
					Together with our families
				</p>

				<h1 data-reveal className="text-6xl sm:text-8xl">
					{wedding.groom}
					<span className="mx-3 text-[#e7c995]">&</span>
					{wedding.bride}
				</h1>

				<div className="mx-auto my-7 h-px w-24 bg-[#e7c995]" />

				<p data-reveal className="text-sm tracking-[3px] sm:text-base">
					INVITE YOU TO CELEBRATE OUR WEDDING
				</p>

				<p className="mt-6 font-[family-name:var(--font-heading)] text-3xl">
					{wedding.date.day} {wedding.date.month} {wedding.date.year}
				</p>

				<a
					href="#date"
					className="mt-12 inline-block animate-bounce text-sm">
					Discover Our Invitation ↓
				</a>
			</div>
		</section>
	);
}
