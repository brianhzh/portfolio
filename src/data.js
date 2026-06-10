// ── Edit everything about yourself here, nothing personal lives in components ──

export const profile = {
  first: 'Brian',
  last: 'Zhang',
  mark: 'flying', // decorative corner text
  role: 'biomedical engineering · machine learning',
  intro:
    '',
  status: 'open to opportunities · winter 2027',
  email: 'brianhzhang6@gmail.com',
  github: 'https://github.com/brianhzh',
  linkedin: 'https://linkedin.com/in/brianhzhang6',
}

export const experience = [
  {
    role: 'Exo Software Developer',
    org: 'Waterloo BioMechatronics',
    period: 'September 2025 — Present',
    bullets: [
      'Trained a lower-body exoskeleton in NVIDIA Isaac Sim using a deep reinforcement learning architecture',
      'Designed data pipeline for encoders and IMUs, implementing a low-pass Butterworth filter to ensure consistent data',
    ],
  },
  {
    role: 'MindFlex Team Member',
    org: 'WATOLINK',
    period: 'Apr 2026 — Present',
    bullets: [
      '',
      '',
      '',
    ],
  },
  {
    role: 'Machine Learning Intern',
    org: 'Spectrum Dynamics Medical',
    period: 'May 2026 — Aug 2026',
    bullets: [
      'Developed a medical imaging pipeline integrating DICOM metadata QC and nnU-Net segmentation',
      'Retrained nnUNet segmentation models for 15+ protocols, achieving average Dice of 0.935',
      'Containerized modules using Docker and deployed as CUDA ensemble for API inference via a Python package',
    ],
  },
]

export const works = [
  // `repo` is optional — when set, a GitHub icon appears next to the title
  {
    id: '',
    title: 'osu!mimic',
    line: 'hybrid AI model that mimics human cursor movement to play the video game osu!',
    tags: ['pytorch', 'docker', 'fastapi', 'aws'],
    repo: 'https://github.com/brianhzh/osu-mimic',
  },
  {
    id: '',
    title: 'neu2real',
    line: 'web-based sandbox simulation using neurons as building blocks to complete tasks',
    tags: ['svelte', 'supabase', 'fastapi', 'brian2'],
    repo: '',
  },
  {
    id: '',
    title: 'Breast Cancer Classifier',
    line: 'simple breast cancer tumour classifier neural network trained on the BreakHis dataset',
    tags: ['python', 'pytorch', 'streamlit'],
    repo: 'https://github.com/brianhzh/breast-cancer-classifier',
  }
]

// ── Tag color coding ─────────────────────────────────────────────
// Tags matching a key below (case-insensitive) render in that color;
// anything else falls back to the accent color. Hexes are darkened
// where the brand color is too light to read on the white background
// (python, aws, hugging face, cuda…). Add your own freely.
export const tagColors = {
  // languages & core scientific stack
  python: '#b08800', // brand yellow darkened for readability
  'c++': '#00599c',
  java: '#e44d26',
  r: '#276dc3',
  sql: '#336791',
  matlab: '#e16737',
  numpy: '#4d77cf',
  pandas: '#5b4a8a',
  scipy: '#0054a6',
  'scikit-learn': '#e08313',
  // deep learning
  pytorch: '#ee4c2c',
  tensorflow: '#f57c00',
  keras: '#d00000',
  'hugging face': '#c97b00', // brand yellow-orange darkened
  onnx: '#6e6e6e',
  cuda: '#5f9400', // nvidia green darkened
  mlflow: '#0194e2',
  // medical imaging & BME tools
  opencv: '#3d8f3d',
  monai: '#00857c',
  dicom: '#0e7490',
  itk: '#8a4f9e',
  '3d slicer': '#5a7d9a',
  simulink: '#0076a8',
  labview: '#b59a00', // brand yellow darkened
  comsol: '#2167ae',
  solidworks: '#d40000',
  arduino: '#00878f',
  'raspberry pi': '#c51a4a',
  // web & hackathon staples
  javascript: '#a08600', // brand yellow darkened
  typescript: '#3178c6',
  html: '#e34f26',
  css: '#264de4',
  svelte: '#ff3e00',
  vue: '#2f9e6e',
  angular: '#dd0031',
  'next.js': '#4a4a4a', // brand black softened
  'node.js': '#2f7d32',
  express: '#5a5a5a',
  tailwind: '#0891b2', // brand cyan darkened
  vite: '#646cff',
  supabase: '#249361', // brand green darkened
  firebase: '#c97e00', // brand amber darkened
  vercel: '#4a4a4a',
  figma: '#8a44e0',
  bootstrap: '#7952b3',
  graphql: '#c4007f', // brand pink darkened
  postgresql: '#336791',
  redis: '#d82c20',
  stripe: '#635bff',
  // infra & tooling
  docker: '#2496ed',
  kubernetes: '#5ba7e6', // lighter than docker, still readable
  aws: '#d97b00', // brand orange darkened
  gcp: '#4285f4',
  azure: '#0078d4',
  git: '#f05032',
  linux: '#8a7400', // tux yellow darkened
  flask: '#4a4a4a',
  fastapi: '#009688',
  react: '#0e7c9e', // brand cyan darkened
  jupyter: '#f37726',
  mongodb: '#47a248',

}