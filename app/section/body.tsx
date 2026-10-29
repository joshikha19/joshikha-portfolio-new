"use client";

import { motion } from "framer-motion";

export const BodyComponent = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<section>
			<motion.div variants={container} initial="hidden" animate="show">
				<motion.h1
					variants={item}
					className="font-semibold text-2xl mb-8 tracking-tighter"
				>
					Hey! I&apos;m Joshikha S
				</motion.h1>
				<motion.div variants={item} className="prose prose-neutral dark:prose-invert">
					<p>A bit about myself</p>
				</motion.div>
				<motion.ul
					variants={container} // Resume staggering for list items if desired, or just use 'item' to animate as block
					className="prose prose-neutral dark:prose-invert list-disc space-y-2 my-6 ml-2"
				>
					<motion.li variants={item}>
						Tech and AI enthusiast with a focus on backend systems, medical imaging, and smart transport.
					</motion.li>
					<motion.li variants={item}>
						CS undergrad at SRM IST skilled in AI, ML, and full‑stack web development.
					</motion.li>
					<motion.li variants={item}>
						Built a copyright‑protected point‑of‑care device for early myocardial infarction detection.
					</motion.li>
					<motion.li variants={item}>
						Works with CNNs, Vision Transformers, and radiomics for multimodal intracranial aneurysm detection.
					</motion.li>
					<motion.li variants={item}>
						Active GitHub contributor, hackathon finalist, and student leader who enjoys sharing and speaking about tech.
					</motion.li>
				</motion.ul>
				<motion.div variants={item} className="prose prose-neutral dark:prose-invert">
					<p>
						If any of the above interests you, feel free to reach out to me on my Linkedin, would love to chat!
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
};
