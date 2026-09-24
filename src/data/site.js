// Single source of truth for personal details and links.
// Resume is the primary source; LinkedIn PDF and GitHub add context.

const BASE = import.meta.env.BASE_URL

// Certificate PDFs live in public/certificates/. Replace a file there to update its certificate.
export const certFile = (name) => `${BASE}certificates/${name}`

export const profile = {
  name: 'Bhavya Solanki',
  role: 'ECE + AI/ML Engineer',
  location: 'Greater Noida, Uttar Pradesh, India',
  email: 'bhavya4818@gmail.com',
  github: 'https://github.com/BhavyaSolanki31',
  linkedin: 'https://www.linkedin.com/in/bhavya-solanki-267011309/',
  // Put your PDF at public/Bhavya_Solanki_Resume.pdf (already included).
  resume: `${BASE}Bhavya_Solanki_Resume.pdf`,
  status: 'Open to AI/ML, embedded and engineering opportunities',
  tagline: 'Building intelligent systems that connect AI, electronics, signals, and real-world engineering 🤖🚀',
  about:
    'I’m an Electronics & Communication Engineering student specializing in AI & Machine Learning, building practical systems across computer vision, signal processing, intelligent monitoring and embedded technologies.',
}

export const navItems = [
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'opensource', label: 'Open Source' },
]

// Every section id observed for the active nav link, mapped to its nav item.
export const navGroup = {
  home: null,
  technologies: 'skills',
  skills: 'skills',
  tools: 'skills',
  experience: 'experience',
  projects: 'projects',
  education: 'education',
  certifications: 'certifications',
  exploring: 'certifications',
  opensource: 'opensource',
  contact: 'contact',
}

// Tools shown as pills next to the intro text.
export const toolPills = [
  'Python',
  'OpenCV',
  'TensorFlow',
  'MATLAB',
  'Robot Framework',
]

export const aboutCards = [
  {
    icon: 'brain',
    title: 'AI / Machine Learning',
    text: 'LSTM forecasting, Isolation Forest anomaly detection and Random Forest emotion classification, built on real datasets.',
  },
  {
    icon: 'eye',
    title: 'Computer Vision',
    text: 'OpenCV pipelines for image-quality scoring, display detection, sharpest-frame capture and OCR validation.',
  },
  {
    icon: 'waveform',
    title: 'Signal Processing',
    text: 'MFCC and spectral features, spectrograms, bit-plane slicing and pseudo-random embedding in MATLAB.',
  },
  {
    icon: 'cpu',
    title: 'Embedded & Intelligent Systems',
    text: 'Microcontroller and IoT foundations (8051) with edge-inference latency measured in a working prototype.',
  },
]

