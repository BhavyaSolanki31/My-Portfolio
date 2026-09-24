import { certFile } from './site'
import galgotiasLogo from '../assets/logos/galgotias.png'
import davLogo from '../assets/logos/dav.png'
import mathworksLogo from '../assets/logos/mathworks.png'
import infosysLogo from '../assets/logos/infosys-springboard.png'
import googleCloudLogo from '../assets/logos/google-cloud.png'
import nielitLogo from '../assets/logos/nielit.png'
import nitDelhiLogo from '../assets/logos/nit-delhi.png'
import internshalaLogo from '../assets/logos/internshala.png'
import nptelLogo from '../assets/logos/nptel.png'

// Education entries follow the resume.
export const education = [
  {
    icon: 'graduation',
    logo: galgotiasLogo,
    name: 'Galgotias University, Greater Noida',
    degree: 'Bachelor of Technology in Electronics and Communication Engineering (AIML)',
    period: '2023 – 2027',
    points: ['Current CGPA: 8.91 / 10'],
  },
  {
    icon: 'school',
    logo: davLogo,
    name: 'DAV Public School, Ghaziabad',
    degree: 'Senior Secondary Education',
    period: '2023',
    points: ['Percentage: 71.3%'],
  },
  {
    icon: 'school',
    logo: davLogo,
    name: 'DAV Public School, Ghaziabad',
    degree: 'Secondary Education',
    period: '2021',
    points: ['Percentage: 96.6%'],
  },
]

export const certifications = [
  {
    title: 'Analog ICs and Semiconductor Advancements in VLSI',
    logo: nitDelhiLogo,
    issuedBy: 'NIT Delhi',
    date: 'February 2025',
    file: certFile('nit-delhi-analog-ics-vlsi.pdf'),
  },
  {
    title: 'AI Bootcamp',
    logo: nielitLogo,
    issuedBy: 'NIELIT',
    date: 'April 2025',
    file: certFile('nielit-ai-bootcamp.pdf'),
  },
  {
    title: 'Machine Learning',
    logo: internshalaLogo,
    issuedBy: 'Internshala',
    date: 'December 2024',
    file: certFile('machine-learning-internshala.pdf'),
  },
  {
    title: 'Data Structures and Algorithms using Java',
    logo: infosysLogo,
    issuedBy: 'Infosys Springboard',
    date: 'July 2025',
    file: certFile('dsa-java-infosys.pdf'),
  },
  {
    title: 'Introduction to Generative AI Studio',
    logo: googleCloudLogo,
    issuedBy: 'Google Cloud',
    date: 'July 2025',
    file: certFile('generative-ai-google-cloud.pdf'),
  },
  {
    title: 'Design Thinking – A Primer',
    logo: nptelLogo,
    issuedBy: 'NPTEL',
    date: 'July – August 2024',
    file: certFile('design-thinking-nptel.pdf'),
  },
  {
    title: 'Mastering Python',
    logo: infosysLogo,
    issuedBy: 'Infosys Springboard',
    date: 'December 2024',
    file: certFile('python-infosys.pdf'),
  },
  {
    title: 'Machine Learning Onramp',
    logo: mathworksLogo,
    issuedBy: 'MathWorks',
    date: 'September 2025',
    file: certFile('machine-learning-mathworks.pdf'),
  },
]

// Direction of travel, tied to work already done. No progress percentages.
export const exploring = [
  {
    icon: 'code',
    title: 'Data Structures & Algorithms',
    text: 'The foundation for writing efficient code around models, in Python and C.',
  },
  {
    icon: 'brain',
    title: 'Deep Learning',
    text: 'Building on the LSTM forecasting work in the Smart Energy Meter.',
  },
  {
    icon: 'eye',
    title: 'Computer Vision',
    text: 'Extending the Barco OpenCV work into learned approaches to image analysis.',
  },
  {
    icon: 'cpu',
    title: 'Edge AI',
    text: 'Running models close to the sensor, where latency and hardware limits matter.',
  },
]
