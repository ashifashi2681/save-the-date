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
								<div className="group relative mx-auto aspect-[3/4] w-full max-w-sm">
									<div className="absolute -inset-3 rounded-[2rem] border border-[#C5A46D]/55" />
									<div className="absolute -inset-1 rounded-[1.65rem] bg-[#E9D8F2]/70 blur-sm" />

									<div
										className="relative h-full overflow-hidden rounded-[1.4rem]
                border-[6px] border-white shadow-[0_18px_35px_rgba(116,96,128,0.24)]">
										<Image
											src={item.image}
											alt={item.title}
											fill
											sizes="(max-width: 768px) min(100vw - 40px, 384px), 384px"
											className="object-cover transition-transform duration-700 group-hover:scale-105"
										/>

										<div className="absolute inset-0 bg-gradient-to-t from-[#44384D]/35 via-transparent to-white/10" />
									</div>

									<span
										aria-hidden="true"
										className="absolute -bottom-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-[#C5A46D]/70 bg-[#F8F5FC] text-sm text-[#C5A46D] shadow-sm">
										♥
									</span>
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
