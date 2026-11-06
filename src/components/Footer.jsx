import { wedding } from "@/data/wedding";

export default function Footer() {
	return (
		<footer className="invitation-texture bg-[#F8F5FC] px-6 py-12 text-center">
			<h2
				className="font-[family-name:var(--font-heading)]
      text-4xl text-[#746080]">
				{wedding.groom} & {wedding.bride}
			</h2>

			<p className="mt-3 text-xs tracking-[3px] text-[#887B91]">
				FOREVER BEGINS HERE
			</p>

			<div className="gold-line" />

			<p className="text-xs text-[#887B91]">
				Made with love, for a beautiful beginning.
			</p>

			<p className="mt-4 text-xs text-[#C5A46D]">
				© {wedding.date.year} · {wedding.groom} & {wedding.bride}
			</p>
		</footer>
	);
}
