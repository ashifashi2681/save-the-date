// import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Amiri } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	variable: "--font-heading",
	weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-body",
});

const amiri = Amiri({
	subsets: ["arabic"],
	variable: "--font-arabic",
	weight: ["400", "700"],
});

export const metadata = {
	title: "Ashif & Rashida | Wedding Invitation",
	description:
		"Together with our families, we invite you to celebrate our wedding.",
	openGraph: {
		title: "Ashif & Rashida | Wedding Invitation",
		description: "Join us in celebrating our special day.",
		images: ["/images/venue.webp"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${cormorant.variable} ${dmSans.variable} ${amiri.variable}`}>
				<div className="block sm:hidden">{children}</div>
				<p className="hidden sm:flex justify-center items-center h-100 text-purple-700">Optimized for Mobail view</p>
			</body>
		</html>
	);
}
