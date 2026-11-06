"use client";

import { CalendarDays, Heart, Utensils } from "lucide-react";
import { wedding } from "@/data/wedding";

const icons = [CalendarDays, Heart, Utensils];

export default function WeddingEvents() {
	return (
		<section id="events" className="section-padding bg-[#ede5f6]">
			<div className="section-container">
				<div className="mb-16 text-center" data-reveal>
					<p className="section-label">Join our celebration</p>
					<h2 className="section-title mt-4">The Celebration</h2>
					<p className="mt-4 text-sm text-[#887B91]">
						A day filled with blessings, happiness and togetherness.
					</p>
				</div>

				<div className="relative mx-auto max-w-2xl">
					<div
						className="absolute bottom-0 left-5 top-0 w-px
          bg-[#C5A46D] sm:left-1/2 sm:-translate-x-1/2"
					/>

					<div className="space-y-10">
						{wedding.events.map((event, index) => {
							const Icon = icons[index % icons.length];

							return (
								<div
									key={event.title}
									data-reveal
									className={`relative pl-14 sm:w-1/2
                  sm:pl-0
                  ${index % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:pl-12"}`}>
									<div
										className="absolute left-0 top-5 z-10 flex
                  h-10 w-10 items-center justify-center rounded-full
                  border border-[#C5A46D] bg-[#F8F5FC]
                  sm:left-auto sm:right-[-20px]
                  sm:translate-x-1/2">
										<Icon
											size={17}
											className="text-[#746080]"
										/>
									</div>

									{index % 2 === 1 && (
										<div
											className="absolute left-[-20px] top-10
                    hidden h-px w-10 bg-[#C5A46D] sm:block"
										/>
									)}

									<div className="soft-card p-6">
										<p className="text-xs tracking-[3px] text-[#C5A46D]">
											{event.time}
										</p>

										<h3 className="mt-3 text-3xl text-[#746080]">
											{event.title}
										</h3>

										<p className="mt-3 text-sm leading-7 text-[#887B91]">
											{event.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
