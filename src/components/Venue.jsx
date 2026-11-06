import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import { wedding } from "@/data/wedding";

export default function Venue() {
	return (
		<section id="venue" className="section-padding">
			<div className="section-container">
				<div className="mb-12 text-center" data-reveal>
					<p className="section-label">We would love to see you</p>
					<h2 className="section-title mt-4">The Venue</h2>
				</div>

				<div
					data-reveal
					className="grid overflow-hidden rounded-3xl bg-white
          shadow-sm md:grid-cols-2">
					<div className="flex flex-col justify-center p-8 sm:p-12">
						<MapPin className="text-[#C5A46D]" size={30} />

						<p className="mt-4 text-sm font-bold leading-7 text-[#887B91]">
							{wedding.location.time}
						</p>
						<h3 className="mt-2 text-4xl text-[#746080]">
							{wedding.location.name}
						</h3>

						<p className="mt-4 text-sm leading-7 text-[#887B91]">
							{wedding.location.address}
						</p>

						<a
							href={wedding.location.mapUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-8 inline-flex w-fit items-center gap-3
              rounded-full bg-[#746080] px-7 py-4 text-sm text-white
              transition-colors hover:bg-[#5d4969]">
							<Navigation size={16} />
							Get Directions
						</a>
					</div>
				</div>
				<div
					data-reveal
					className="grid mt-5 overflow-hidden rounded-3xl bg-white
          shadow-sm md:grid-cols-2">
					<div className="flex flex-col justify-center p-8 sm:p-12">
						<MapPin className="text-[#C5A46D]" size={30} />

						<p className="mt-4 text-sm font-bold leading-7 text-[#887B91]">
							{wedding.location2.time}
						</p>
						<h3 className="mt-2 text-4xl text-[#746080]">
							{wedding.location2.name}
						</h3>

						<p className="mt-4 text-sm leading-7 text-[#887B91]">
							{wedding.location2.address}
						</p>

						<a
							href={wedding.location2.mapUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-8 inline-flex w-fit items-center gap-3
              rounded-full bg-[#746080] px-7 py-4 text-sm text-white
              transition-colors hover:bg-[#5d4969]">
							<Navigation size={16} />
							Get Directions
						</a>
					</div>
				</div>

				{/* <div
					className="mt-8 overflow-hidden rounded-3xl border
        border-[#D6C2E8]">
					<iframe
						src={wedding.location.embedUrl}
						width="100%"
						height="350"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Wedding venue map"
						className="block border-0"
					/>
				</div> */}
			</div>
		</section>
	);
}
