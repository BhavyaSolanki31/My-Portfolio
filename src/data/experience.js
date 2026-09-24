import { certFile } from './site'
import barcoLogo from '../assets/logos/barco.png'
import codecLogo from '../assets/logos/codec.png'

export const experience = [
  {
    id: 'barco',
    featured: true,
    short: 'Barco',
    monogram: 'B',
    // Banner gradient, and the disc colour = the logo's own background so the wordmark fills the circle.
    gradient: 'linear-gradient(135deg, #f42a1f 0%, #c60000 48%, #6c0000 100%)',
    accent: '#f00000',
    role: 'Research & Development Intern',
    company: 'Barco Electronic Systems Pvt. Ltd.',
    location: 'Noida, Uttar Pradesh, India',
    period: 'July 2026 – August 2026',
    status: 'Completed',
    summary: 'Built computer-vision validation and test-automation tooling.',
    bullets: [
      'Engineered a Python/OpenCV image-validation pipeline with 12 quality metrics and OCR validation, enabling automated image-quality assessment and PASS/FAIL classification.',
      'Optimized camera-based image acquisition through sharpest-frame selection, display detection, cropping, and OCR preprocessing, improving validation reliability.',
      'Streamlined test automation by consolidating Robot Framework API permission tests and enhancing Pytest execution for PTP/ITP/OSD workflows with repeated automated runs.',
    ],
    tech: [
      'Python',
      'OpenCV',
      'NumPy',
      'EasyOCR',
      'PaddleOCR',
      'Robot Framework',
      'Pytest',
      'Selenium',
      'Playwright',
      'API testing',
    ],
    logo: barcoLogo,
    certificate: certFile('barco-internship-certificate.pdf'),
  },
  {
    id: 'codec',
    featured: false,
    short: 'Codec Technologies India',
    monogram: 'C',
    gradient: 'linear-gradient(135deg, #0a0a12 0%, #1d1245 52%, #46208a 100%)',
    accent: '#000000',
    role: 'Digital Electronics & VLSI Design Intern',
    company: 'Codec Technologies India',
    location: null,
    period: 'June 2025 – July 2025',
    status: 'Completed',
    summary: 'Designed, simulated and debugged digital and CMOS circuits.',
    bullets: [
      'Designed and simulated multiple digital and CMOS-based circuits, applying semiconductor and logic-design principles to circuit analysis.',
      'Debugged and resolved functional issues across repeated simulation cycles.',
      'Completed the AICTE/ICAC-approved internship and received a Letter of Recommendation from the program.',
    ],
    tech: ['CMOS design', 'Digital circuits', 'Circuit simulation'],
    logo: codecLogo,
    certificate: certFile('codec-internship-certificate.pdf'),
  },
]
