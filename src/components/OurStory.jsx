import Image from "next/image";
import { wedding } from "@/data/wedding";

export default function OurStory() {
	return (
		<section id="story" className="section-padding">
			<div className="section-container">
				<div className="mb-16 text-center" data-reveal>
					<p className="section-label">Every love has a story</p>
					<h2 className="section-title mt-4">Our Story</h2>
					<div className="gold-line" />
					<p className="text-sm text-[#887B91]">
						A journey of beautiful moments and cherished memories.
					</p>
				</div>

				<div className="relative">
					<div
						className="absolute bottom-0 left-1/2 top-0 hidden
          w-px -translate-x-1/2 bg-[#D6C2E8] md:block"
					/>

					<div className="space-y-16">
						{wedding.story.map((item, index) => (
							<div
								key={item.year}
								data-reveal
								className={`grid items-center gap-8 md:grid-cols-2
                ${index % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
								<div
									className="relative aspect-[4/3] overflow-hidden
                rounded-3xl">
									<Image
										src={item.image}
										alt={item.title}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover transition-transform
                    duration-700 hover:scale-105"
									/>
								</div>

								<div className="px-3 py-5 md:px-12">
									<p className="text-sm tracking-[4px] text-[#C5A46D]">
										{item.year}
									</p>

									<h3 className="mt-3 text-4xl text-[#746080]">
										{item.title}
									</h3>

									<div className="my-5 h-px w-14 bg-[#C5A46D]" />

									<p className="max-w-md text-sm leading-8 text-[#887B91]">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
