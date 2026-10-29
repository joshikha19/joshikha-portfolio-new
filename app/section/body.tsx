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
				<motion.div variants={item} className="prose prose-neutral dark:prose-invert mb-8">
					<h2>AI/ML Enthusiast | Software Engineer | Researcher</h2>
					<p>
						I&apos;m a Computer Science undergraduate at SRM Institute of Science and Technology, passionate about
						building intelligent, scalable, and impactful technology. My experience spans Artificial Intelligence,
						Machine Learning, Deep Learning, Natural Language Processing, backend engineering, full-stack development,
						and research-driven innovation.
					</p>
					<h2>A bit about myself</h2>
				</motion.div>
				<motion.ul
					variants={container}
					className="prose prose-neutral dark:prose-invert list-disc space-y-2 my-6 ml-2"
				>
					<motion.li variants={item}>
						<strong>AI &amp; Machine Learning:</strong> Experienced in developing intelligent systems using PyTorch,
						Scikit-learn, Transformers, BERT, CNNs, Vision Transformers, and LLMs, with applications spanning healthcare,
						financial intelligence, and automated log analysis.
					</motion.li>
					<motion.li variants={item}>
						<strong>Software &amp; Backend Engineering:</strong> Build backend services, REST APIs, data-processing
						pipelines, and full-stack applications using Python, FastAPI, React.js, SQL, and asynchronous processing.
					</motion.li>
					<motion.li variants={item}>
						<strong>Medical AI Research:</strong> Working on multimodal intracranial aneurysm detection using CNNs, Vision
						Transformers, radiomics, and ensemble learning, achieving an AUC of 0.96 in internal validation.
					</motion.li>
					<motion.li variants={item}>
						<strong>Financial AI &amp; Intelligent Systems:</strong> Built SmartFlow, an AI-powered SME financial
						diagnostics and credit-scoring platform integrating financial data processing, cash-flow forecasting,
						explainable machine learning, and intelligent financial insights.
					</motion.li>
					<motion.li variants={item}>
						<strong>Intelligent Log Analysis:</strong> Developed a hybrid log-classification pipeline combining regular
						expressions, BERT embeddings, Sentence Transformers, and LLMs to balance classification accuracy, inference
						latency, and computational cost.
					</motion.li>
					<motion.li variants={item}>
						<strong>Full-Stack &amp; Accessibility:</strong> Created a multilingual bus-tracking platform using React,
						Leaflet, and FastAPI, integrating speech recognition, Transformers, AI4Bharat text-to-speech, and Twilio for
						accessible public transport information.
					</motion.li>
					<motion.li variants={item}>
						<strong>Healthcare Innovation:</strong> Worked as a Winter Research Intern at the University of Ilorin,
						contributing to a point-of-care diagnostic system combining cardiac biomarkers, ELISA-based detection,
						microfluidics, and machine-learning concepts for early myocardial infarction detection. The work received
						official copyright protection.
					</motion.li>
					<motion.li variants={item}>
						<strong>Systems &amp; AI Integration:</strong> Worked on an SAP interference detection system using FastAPI,
						RabbitMQ, OpenTelemetry, and CrewAI, focusing on modular data ingestion, inference workflows, and low-latency
						predictions.
					</motion.li>
					<motion.li variants={item}>
						<strong>Research &amp; Leadership:</strong> International Conference Presenter at ICICDT 2026, Smart India
						Hackathon 2025 internal finalist among the university&apos;s top 75 teams, and Assistant Head of PR &amp;
						Management at Logic Play Club.
					</motion.li>
				</motion.ul>
				<motion.div variants={item} className="prose prose-neutral dark:prose-invert">
					<h2>My Technical Toolkit</h2>
					<ul>
						<li>
							<strong>Programming Languages:</strong> Python, C, C++, Java, JavaScript, SQL, MySQL
						</li>
						<li>
							<strong>AI &amp; Machine Learning:</strong> PyTorch, Scikit-learn, Transformers, BERT, Sentence
							Transformers, CNNs, Vision Transformers, LLMs, NLP, Speech Recognition, Computer Vision, Image Processing,
							Radiomics, Ensemble Learning, Explainable AI
						</li>
						<li>
							<strong>Data Science &amp; Processing:</strong> Pandas, NumPy, Data Preprocessing, Feature Engineering,
							Data Analysis, Model Evaluation, Financial Data Processing
						</li>
						<li>
							<strong>Backend &amp; APIs:</strong> FastAPI, REST APIs, SQLAlchemy, Asynchronous Processing, API
							Integration
						</li>
						<li>
							<strong>Databases:</strong> PostgreSQL, SQLite, SQL
						</li>
						<li>
							<strong>Frontend &amp; Mapping:</strong> React.js, HTML, CSS, Leaflet
						</li>
						<li>
							<strong>Messaging, Observability &amp; AI Orchestration:</strong> RabbitMQ, OpenTelemetry, CrewAI
						</li>
						<li>
							<strong>AI &amp; Voice Integrations:</strong> OpenAI Whisper, Twilio
						</li>
						<li>
							<strong>Developer Tools &amp; Platforms:</strong> Git, GitHub, Jupyter Notebook, Google Colab, Figma,
							Adobe After Effects
						</li>
					</ul>
					<h2>What I Love Building</h2>
					<p>
						I enjoy turning complex problems into practical solutions, whether that means designing AI-powered
						financial systems, developing deep-learning pipelines for medical imaging, building intelligent automation
						workflows, or creating accessible full-stack applications.
					</p>
					<p>
						I&apos;m particularly interested in AI research, Machine Learning Engineering, AI Engineering, backend
						development, and scalable software systems. I enjoy experimenting with new technologies, understanding how
						systems work under the hood, and continuously strengthening my engineering fundamentals.
					</p>
					<h2>Let&apos;s Connect! 🚀</h2>
					<p>
						I&apos;m always open to collaborating on meaningful projects, exploring research opportunities, exchanging
						ideas, and connecting with people who are passionate about technology.
					</p>
					<p>
						If you&apos;re interested in AI, machine learning, research, or software engineering, feel free to reach
						out to me on{" "}
						<a href="https://www.linkedin.com/in/joshikha-s-51bb2730a/" target="_blank" rel="noreferrer">
							LinkedIn
						</a>
						. I&apos;d love to connect and build something impactful together!
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
};
