// Skills grouped by what they let Bhavya build, not by how many tools he knows.
// Items with `brand` use a real technology logo (src/data/techIcons.js);
// the rest use a neutral icon for the concept.
// On the cards, items with a logo are shown as tool tiles and the rest as a quiet
// text list. A category with `display: 'tools'` shows every item as a tile.
// Cadence Virtuoso, Git, GitHub, Arduino IDE and VS Code appear ONLY in Tools & Platforms.

export const skillCategories = [
  {
    icon: 'brain',
    title: 'AI / Machine Learning',
    build: 'Predictive models, forecasting and intelligent automation that learn from data.',
    items: [
      { name: 'Machine Learning', icon: 'brain' },
      { name: 'Deep Learning', icon: 'layers' },
      { name: 'CNN', icon: 'network' },
      { name: 'TensorFlow', brand: 'tensorflow' },
      { name: 'NumPy', brand: 'numpy' },
      { name: 'Pandas', brand: 'pandas' },
    ],
  },
  {
    icon: 'eye',
    title: 'Computer Vision & Image Processing',
    build: 'Automated visual inspection, quality validation and OCR-driven pipelines.',
    items: [
      { name: 'OpenCV', brand: 'opencv' },
      { name: 'Image Processing', icon: 'image' },
      { name: 'Computer Vision', icon: 'eye' },
    ],
  },
  {
    icon: 'cpu',
    title: 'Electronics / ECE / Hardware',
    build: 'Circuits, embedded systems and IoT hardware, from schematic to silicon.',
    items: [
      { name: 'Digital Electronics', icon: 'board' },
      { name: 'Analog Electronics', icon: 'activity' },
      { name: 'DSP', icon: 'waveform' },
      { name: 'VLSI Fundamentals', icon: 'microchip' },
      { name: 'Embedded Systems', icon: 'cpu' },
      { name: 'Microcontrollers', icon: 'microchip' },
      { name: 'IoT', icon: 'wifi' },
    ],
  },
  {
    icon: 'code',
    title: 'Programming',
    build: 'Clean, efficient code that connects data, models and interfaces.',
    items: [
      { name: 'Python', brand: 'python' },
      { name: 'C', brand: 'c' },
      { name: 'MATLAB', brand: 'matlab' },
      { name: 'Data Structures & Algorithms', icon: 'binary' },
      { name: 'Object-Oriented Programming', icon: 'boxes' },
    ],
  },
  {
    icon: 'flask',
    title: 'Automation & Testing',
    build: 'Reliable test suites and pipelines that catch regressions before users do.',
    items: [
      { name: 'Robot Framework', brand: 'robotframework' },
      { name: 'Pytest', brand: 'pytest' },
      { name: 'Selenium', brand: 'selenium' },
      { name: 'Playwright', brand: 'playwright' },
      { name: 'API Testing', icon: 'plug' },
      { name: 'Testing & Validation', icon: 'shield' },
      { name: 'Technical Debugging', icon: 'bug' },
      { name: 'Defect Analysis', icon: 'search' },
      { name: 'Root Cause Analysis', icon: 'branch' },
      { name: 'Technical Documentation', icon: 'file' },
    ],
  },
  {
    icon: 'wrench',
    title: 'Tools & Platforms',
    build: 'The everyday tooling that ties development and hardware work together.',
    // Every item is a tool, so the card shows them all as logo tiles.
    display: 'tools',
    items: [
      { name: 'Cadence Virtuoso', icon: 'board' },
      { name: 'Git', brand: 'git' },
      { name: 'GitHub', brand: 'github' },
      { name: 'Arduino IDE', brand: 'arduino' },
      { name: 'VS Code', brand: 'vscode' },
    ],
  },
]

// Logo strip shown right after the hero: AI + Electronics + Signals + Hardware.
export const techStrip = [
  { name: 'Python', brand: 'python' },
  { name: 'TensorFlow', brand: 'tensorflow' },
  { name: 'NumPy', brand: 'numpy' },
  { name: 'OpenCV', brand: 'opencv' },
  { name: 'MATLAB', brand: 'matlab' },
  { name: 'Git', brand: 'git' },
  { name: 'GitHub', brand: 'github' },
  { name: 'Cadence Virtuoso', icon: 'board' },
  { name: 'Arduino', brand: 'arduino' },
]
