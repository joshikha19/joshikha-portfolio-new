interface ProjectData {
	name: string;
	url: string;
	description: string;
	isFeatured: boolean;
}

export const projectData: ProjectData[] = [
	{
		name: "SmartFlow: AI-Native SME Financial Diagnostics & Credit Scoring Platform",
		url: "https://github.com/joshikha19/smartflow-sme-intelligence",
		description: "An AI‑first financial analytics platform that empowers SMEs to diagnose financial health, automate compliance, and access credit through intelligent diagnostics and cash‑flow forecasting.",
		isFeatured: true,
	},
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
		name: "SAP Interference Detection System",
		url: "https://github.com/joshikha19/sap-interference",
		description: "An ML-powered interference detection system that integrates FastAPI, RabbitMQ, OpenTelemetry, and CrewAI to orchestrate modular data-processing and inference workflows with low-latency predictions.",
		isFeatured: false,
	},
	{
		name: "Multimodal Intracranial Aneurysm Detection",
		url: "",
		description: "A multimodal medical AI system that combines CNNs, Vision Transformers, and radiomics to detect intracranial aneurysms across medical imaging modalities, achieving an AUC of 0.96 in internal validation.",
		isFeatured: false,
	},
	{
		name: "Point-of-Care Diagnostic System",
		url: "https://drive.google.com/file/d/1dDTtJM5z50eM5KhbR1XrK-RlrcsoLL_E/view?usp=sharing",
		description: "A copyright-protected healthcare diagnostic concept that combines cardiac biomarker detection, ELISA-based testing, microfluidics, and machine learning to support early myocardial infarction detection.",
		isFeatured: false,
	},
	{
		name: "Personal Portfolio Website",
		url: "https://github.com/joshikha19/joshikha-portfolio-new",
		description: "A personal developer portfolio showcasing my AI/ML research, software engineering projects, technical skills, and achievements through a responsive web experience deployed on Vercel.",
		isFeatured: false,
	},
];
