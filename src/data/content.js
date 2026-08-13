// ---------------------------------------------------------------------------
// Edit this file to customize the entire site. Every section below reads
// from here — you shouldn't need to touch component files for basic content.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Samruddhi Kaledeshmukh',
  initials: 'SK',
  role: 'MS Data Science Student · Deep Learning Researcher',
  tagline: 'Building deep learning systems from first principles.',
  summary:
    "MS in Data Science student driven by a deep curiosity for building deep learning systems from first principles rather than treating them as black boxes — from Vision/Swin Transformers to RL-based detection pipelines built entirely from scratch. My research on mHealth for dementia care fuels my belief that AI should be built around real human needs.",
  location: 'San Jose, California',
  resumeUrl: '/resume.pdf',
  availability: 'Open to research collaborations & new opportunities',
}

export const about = {
  paragraphs: [
    "I'm currently pursuing an MS in Data Science at Northeastern University (2025–2027). My coursework and research have centered on machine learning, deep learning, and reinforcement learning.",
    "I like understanding systems from first principles — I've implemented Vision and Swin Transformers from scratch, formulated object detection as a reinforcement learning problem, and built ML pipelines for mHealth dementia care research. I'm using my master's to dig deeper into open research questions.",
  ],
  facts: [
    { label: 'Based in', value: 'San Jose, CA' },
    { label: 'Focus', value: 'Deep Learning Research' },
    { label: 'Currently', value: 'MS Data Science @ Northeastern' },
    { label: 'Education', value: 'B.Tech CS, Cummins COEW' },
  ],
}

export const skills = [
  {
    category: 'Research Practices',
    items: [
      'Literature Review',
      'Hypothesis-Driven Experimentation',
      'Model Evaluation & Benchmarking',
      'Data Pipeline Design',
      'Reproducible Training Workflows',
    ],
  },
  {
    category: 'Languages',
    items: ['Python', 'Java', 'SQL', 'C', 'C++'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'OpenVINO', 'React', 'Next.js', 'FastAPI', 'Flask', 'Node.js', 'Pandas', 'NumPy'],
  },
  {
    category: 'AI/ML & NLP',
    items: ['LLM Integration', 'RAG Systems', 'Semantic Search', 'NLP Processing', 'Prompt Engineering'],
  },
  {
    category: 'Deep Learning',
    items: ['CNNs', 'RNNs', 'Vision Transformers', 'Swin Transformers', 'GANs', 'VAEs'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Git', 'GitLab'],
  },
  {
    category: 'Web Technologies',
    items: ['REST APIs', 'OAuth Integration', 'WebSockets', 'State Management', 'API Integration'],
  },
]

export const experience = [
  {
    role: 'Research Assistant — mHealth for Dementia Care',
    company: 'Cummins College of Engineering for Women, Pune, India (Advisor: Prof. Dr. Chhaya Santosh Gosavi)',
    period: '2024 — 2025',
    points: [
      'Co-authored a comprehensive literature review on mHealth technologies for dementia care and caregiver support, evaluating 20+ existing applications across Android and iOS platforms.',
      'Synthesized findings across usability, adoption, and clinical validation to propose a holistic mobile solution integrating reminders, cognitive games, GPS-based safety alerts, and a voice-to-text diary.',
    ],
  },
  {
    role: 'Research Assistant — RL-Based Object Detection',
    company: 'Cummins College of Engineering for Women, Pune, India (Research Guide: Prof. Dr. Anjali Naik)',
    period: '2024 — 2025',
    points: [
      'Formulated the object detection problem (bounding-box localization) as a dynamic Markov Decision Process (MDP) using deep reinforcement learning.',
      'Trained and evaluated the approach on the Pascal VOC2012 dataset, contributing to a publication on object detection using deep reinforcement learning.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Concept Information Technology Pvt. Ltd., Pune, India',
    period: 'Summer 2022',
    points: [
      'Developed and optimized backend and frontend features across internal applications, improving page load times and system responsiveness by 30%.',
      'Built and integrated RESTful APIs to support data exchange between services, reducing manual processing and improving data consistency.',
      'Automated routine workflows and scripts, cutting repetitive engineering effort by 25%, following Git-based version control best practices.',
    ],
  },
]

export const projects = [
  {
    title: 'Building a Vision Transformer from Scratch for Remote Sensing Change Detection',
    description:
      'Implemented a Siamese Vision Transformer from scratch in PyTorch (custom patch embedding, 12-layer multi-head self-attention, FPN-style decoder), then extended it with a Siamese Swin Transformer using hierarchical shifted-window attention for pixel-level change detection on bi-temporal satellite imagery. Trained on the LEVIR-CD benchmark (7,120 pairs); the Swin variant achieved an F1 of 0.8613 and IoU of 0.7564, a +3.77% F1 / +5.63% IoU gain over the ViT baseline. Presented as a poster at the Research and Innovation Showcase 2026.',
    tags: ['Computer Vision', 'Vision Transformers', 'Swin Transformers', 'PyTorch', 'Remote Sensing'],
    image: null,
    liveUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    title: 'DEMCARE: Holistic Mobile Application for Dementia Patients',
    description:
      'Generated ML-ready data pipelines processing 10K+ daily behavioral events, enabling 95% signal consistency for downstream modeling and analytics. Implemented adaptive cognitive games, GPS-based safety alerts, and a voice-to-text diary, driving 75% higher user engagement and 80% faster real-time risk detection.',
    tags: ['Mobile Health', 'Reinforcement Learning', 'Adaptive Systems', 'Applied ML'],
    image: null,
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'Low-Resource Medical Imaging via Transfer Learning',
    description:
      'Co-developed (with Aayush Katoch) a study on model generalization under extreme data scarcity (~300 samples), benchmarking three transfer learning paradigms (scratch, ImageNet, medical-domain pretraining) with k-fold cross-validation. Achieved 92.02% accuracy and 0.9875 AUC (14% gain), producing interpretable findings on when domain-adjacent pretraining generalizes reliably.',
    tags: ['Transfer Learning', 'Limited Data', 'Uncertainty', 'Statistical Evaluation'],
    image: null,
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
]

export const publications = [
  {
    title: 'Building a Vision Transformer from Scratch for Remote Sensing Change Detection (Poster)',
    venue: 'Research and Innovation Showcase 2026',
    year: '2026',
    url: '',
  },
]

export const contact = {
  message:
    "I'm currently open to research collaborations, PhD opportunities, and interesting problems in deep learning. Whether you have a question or just want to say hi — my inbox is always open.",
  email: 'kaledeshmukh.s@northeastern.edu',
  links: [
    { label: 'Email', value: 'kaledeshmukh.s@northeastern.edu', href: 'mailto:kaledeshmukh.s@northeastern.edu' },
    { label: 'GitHub', value: 'github.com/Samruddhi2212', href: 'https://github.com/Samruddhi2212' },
    { label: 'LinkedIn', value: 'linkedin.com/in/samruddhi-k-1a4375399', href: 'https://www.linkedin.com/in/samruddhi-k-1a4375399' },
  ],
}

export const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Publications', 'Contact']
