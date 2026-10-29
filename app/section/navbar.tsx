"use client";

import { LayoutGroup } from "framer-motion";
import { Suspense } from "react";
import { NavItem } from "../components/nav-item";

const navItems = {
	"/": {
		name: "Home",
	},
	"/projects": {
		name: "Projects",
	},
	"/resume.pdf": {
		name: "Resume",
	},
};

export const Navbar = () => {
	return (
		<div className="sticky top-4 z-50 flex justify-center w-full mb-12">
			<LayoutGroup>
				<nav
					className="flex flex-row items-center px-4 py-2 bg-neutral-100/70 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full shadow-sm"
					id="nav"
				>
					<div className="flex flex-row space-x-1">
						<Suspense fallback={null}>
							{Object.entries(navItems).map(([url, { name }]) => {
								return <NavItem key={url} url={url} name={name} />;
							})}
						</Suspense>
					</div>
				</nav>
			</LayoutGroup>
		</div>
	);
};
