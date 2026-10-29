interface ProjectData {
	name: string;
	url: string;
	description: string;
	isFeatured: boolean;
}

export const projectData: ProjectData[] = [
	{
		name: "Multilingual Bus Tracking Platform",
		url: "https://github.com/joshikha19/Multilingual-Bus-Tracking-System",
		description: "A full‑stack, multilingual bus tracking platform built with Python, JavaScript, and real‑time APIs, featuring voice interaction and route monitoring.",
		isFeatured: true,
	},
	{
		name: "Hybrid Log Classification System",
		url: "https://github.com/joshikha19/Hybrid-Log-Classification",
		description: "A high‑performance log processing system built with Python and FastAPI, designed for low‑latency classification and routing of log data.",
		isFeatured: true,
	},
	{
		name: "SmartFlow: AI-Native SME Financial Diagnostics & Credit Scoring Platform",
		url: "https://github.com/joshikha19/smartflow-sme-intelligence",
		description: "An AI‑first financial analytics platform that empowers SMEs to diagnose financial health, automate compliance, and access credit through intelligent diagnostics and cash‑flow forecasting.",
		isFeatured: true
	},
];
