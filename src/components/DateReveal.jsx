"use client";

import { useEffect, useRef, useState } from "react";

const heartClipPath =
	"path('M150 270 C125 240 0 165 0 88 C0 0 112 -5 150 60 C188 -5 300 0 300 88 C300 165 175 240 150 270 Z')";

export default function DateReveal() {
	const canvasRef = useRef(null);
	const [revealed, setRevealed] = useState(false);
	const drawing = useRef(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const rect = canvas.getBoundingClientRect();
		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;

		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

		const gradient = ctx.createLinearGradient(
			0,
			0,
			rect.width,
			rect.height
		);

		gradient.addColorStop(0, "#E9D9F1");
		gradient.addColorStop(0.42, "#9A76B0");
		gradient.addColorStop(1, "#5F466F");

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, rect.width, rect.height);

		const glow = ctx.createRadialGradient(
			rect.width * 0.28,
			rect.height * 0.18,
			0,
			rect.width * 0.34,
			rect.height * 0.25,
			rect.width * 0.72
		);
		glow.addColorStop(0, "rgba(255, 255, 255, 0.72)");
		glow.addColorStop(0.3, "rgba(255, 255, 255, 0.16)");
		glow.addColorStop(1, "rgba(255, 255, 255, 0)");
		ctx.fillStyle = glow;
		ctx.fillRect(0, 0, rect.width, rect.height);

		ctx.save();
		ctx.globalAlpha = 0.16;
		ctx.strokeStyle = "#FFF9FF";
		ctx.lineWidth = 1;
		for (let offset = -rect.height; offset < rect.width; offset += 12) {
			ctx.beginPath();
			ctx.moveTo(offset, 0);
			ctx.lineTo(offset + rect.height, rect.height);
			ctx.stroke();
		}
		ctx.restore();

		ctx.save();
		ctx.globalAlpha = 0.18;
		ctx.fillStyle = "#FFF9FF";
		for (let index = 0; index < 260; index += 1) {
			const x = (index * 73.13) % rect.width;
			const y = (index * 41.71) % rect.height;
			const radius = (index % 3) * 0.28 + 0.35;
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.restore();

		ctx.save();
		ctx.strokeStyle = "rgba(255, 255, 255, 0.58)";
		ctx.lineWidth = 2;
		ctx.shadowColor = "rgba(58, 35, 70, 0.45)";
		ctx.shadowBlur = 7;
		ctx.shadowOffsetY = 3;
		ctx.beginPath();
		ctx.moveTo(rect.width * 0.5, rect.height * 0.9);
		ctx.bezierCurveTo(
			rect.width * 0.43,
			rect.height * 0.8,
			rect.width * 0.1,
			rect.height * 0.58,
			rect.width * 0.1,
			rect.height * 0.34
		);
		ctx.bezierCurveTo(
			rect.width * 0.1,
			rect.height * 0.1,
			rect.width * 0.39,
			rect.height * 0.08,
			rect.width * 0.5,
			rect.height * 0.28
		);
		ctx.bezierCurveTo(
			rect.width * 0.61,
			rect.height * 0.08,
			rect.width * 0.9,
			rect.height * 0.1,
			rect.width * 0.9,
			rect.height * 0.34
		);
		ctx.bezierCurveTo(
			rect.width * 0.9,
			rect.height * 0.58,
			rect.width * 0.57,
			rect.height * 0.8,
			rect.width * 0.5,
			rect.height * 0.9
		);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();

		ctx.fillStyle = "rgba(255, 255, 255, 0.94)";
		ctx.font = "600 12px Georgia, serif";
		ctx.textAlign = "center";
		ctx.letterSpacing = "2px";
		ctx.fillText("SCRATCH TO REVEAL", rect.width / 2, rect.height / 2);
		ctx.letterSpacing = "0px";

		ctx.globalCompositeOperation = "destination-out";
	}, []);

	const scratch = (e) => {
		if (!drawing.current || revealed) return;

		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");

		if (!canvas || !ctx) return;

		const rect = canvas.getBoundingClientRect();

		ctx.globalCompositeOperation = "destination-out";
		ctx.beginPath();
		ctx.arc(
			e.clientX - rect.left,
			e.clientY - rect.top,
			22,
			0,
			Math.PI * 2
		);
		ctx.fill();
	};

	const checkReveal = () => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");

		if (!canvas || !ctx || revealed) return;

		const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

		let transparent = 0;

		// Sample every fourth pixel to reduce processing.
		for (let i = 3; i < pixels.length; i += 16) {
			if (pixels[i] < 50) transparent++;
		}

		const total = pixels.length / 16;

		if (transparent / total > 0.45) {
			setRevealed(true);
			canvas.style.pointerEvents = "none";
		}
	};

	return (
		<section id="date" className="section-padding text-center">
			<div className="section-container">
				<p className="section-label">A special day awaits</p>

				<h2 className="section-title mt-4">Save the Date</h2>

				<div className="gold-line" />

				<p className="mb-10 text-sm text-[#887B91]">
					A little surprise is waiting for you.
				</p>

				<div className="relative mx-auto h-[270px] w-[300px] max-w-full drop-shadow-[0_22px_20px_rgba(83,58,99,0.28)]">
					<div
						className="absolute inset-0 flex flex-col items-center
							justify-center bg-[radial-gradient(circle_at_30%_22%,#ffffff_0%,#fbf7fd_48%,#eadff0_100%)]"
						style={{ clipPath: heartClipPath }}>
						<p className="font-[family-name:var(--font-heading)] text-6xl text-[#746080]">
							08
						</p>

						<p className="mt-1 text-lg tracking-[4px] text-[#746080]">
							NOVEMBER
						</p>

						<p className="mt-2 text-sm text-[#C5A46D]">2026</p>
					</div>

					<canvas
						ref={canvasRef}
						onPointerDown={(e) => {
							drawing.current = true;
							e.currentTarget.setPointerCapture(e.pointerId);
							scratch(e);
						}}
						onPointerMove={scratch}
						onPointerUp={() => {
							drawing.current = false;
							checkReveal();
						}}
						onPointerCancel={() => {
							drawing.current = false;
						}}
						onPointerLeave={() => {
							drawing.current = false;
							checkReveal();
						}}
						className={`absolute inset-0 h-full w-full touch-none
            cursor-crosshair transition-opacity duration-700
            ${revealed ? "opacity-0" : "opacity-100"}`}
						style={{ clipPath: heartClipPath }}
					/>
				</div>

				<p className="mt-8 text-sm text-[#887B91]">
					{revealed
						? "We look forward to celebrating with you."
						: "Use your finger to reveal the date."}
				</p>
			</div>
		</section>
	);
}
