"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";

export default function Countdown() {
	const [time, setTime] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		expired: false,
	});

	useEffect(() => {
		const target = new Date(wedding.weddingDate).getTime();

		const update = () => {
			const difference = target - Date.now();

			if (difference <= 0) {
				setTime({
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
					expired: true,
				});
				return;
			}

			setTime({
				days: Math.floor(difference / 86400000),
				hours: Math.floor((difference / 3600000) % 24),
				minutes: Math.floor((difference / 60000) % 60),
				seconds: Math.floor((difference / 1000) % 60),
				expired: false,
			});
		};

		update();

		const interval = setInterval(update, 1000);

		return () => clearInterval(interval);
	}, []);

	const units = [
		{ label: "Days", value: time.days },
		{ label: "Hours", value: time.hours },
		{ label: "Minutes", value: time.minutes },
		{ label: "Seconds", value: time.seconds },
	];

	return (
		<section className="section-padding bg-[#ede5f6] text-center">
			<div className="section-container">
				<p className="section-label">Counting every moment</p>

				<h2 className="section-title mt-4">Until Our Big Day</h2>

				{time.expired ? (
					<p className="mt-10 text-2xl">
						Alhamdulillah, our special day has arrived!
					</p>
				) : (
					<div className="mx-auto mt-12 grid max-w-3xl grid-cols-4 gap-3 sm:gap-6">
						{units.map((unit) => (
							<div
								key={unit.label}
								className="soft-card flex flex-col items-center
                justify-center px-2 py-7">
								<span
									className="font-[family-name:var(--font-heading)]
                text-4xl text-[#746080] sm:text-6xl">
									{String(unit.value).padStart(2, "0")}
								</span>

								<span
									className="mt-2 text-[10px] uppercase
                tracking-[2px] text-[#887B91]">
									{unit.label}
								</span>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
