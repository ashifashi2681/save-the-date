export default function Blessing() {
	return (
		<section
			className="dark-invitation-texture relative overflow-hidden bg-[#746080]
    px-6 py-28 text-center text-white">
			<div
				className="absolute -left-20 -top-20 h-72 w-72
      rounded-full bg-white/5 blur-3xl"
			/>

			<div
				className="absolute -bottom-20 -right-20 h-72 w-72
      rounded-full bg-[#D6C2E8]/20 blur-3xl"
			/>

			<div className="relative z-10 mx-auto max-w-3xl" data-reveal>
				<p className="text-xs tracking-[5px] text-[#E7C995]">
					A PRAYER FOR OUR JOURNEY
				</p>

				<p
					className="arabic mt-10 text-3xl leading-[2.5]
        sm:text-4xl">
					بَارَكَ اللَّهُ لَكُمَا، وَبَارَكَ عَلَيْكُمَا، وَجَمَعَ
					بَيْنَكُمَا فِي خَيْرٍ
				</p>

				<p
					className="mx-auto mt-8 max-w-xl text-sm leading-8
        text-white/80">
					May Allah bless you both, shower His blessings upon you, and
					unite you both in goodness.
				</p>

				<div className="mx-auto my-8 h-px w-20 bg-[#C5A46D]" />

				<h2
					className="font-[family-name:var(--font-heading)]
        text-5xl text-[#F2DCAE]">
					JazakAllahu Khairan
				</h2>

				<p className="mt-5 text-xs tracking-[3px] text-white/70">
					WITH LOVE AND PRAYERS
				</p>
			</div>
		</section>
	);
}
