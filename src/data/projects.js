// Project visuals are original concept illustrations (src/components/ProjectVisuals.jsx)
// that represent the engineering idea behind each project, not raw screenshots.

// Repository names and links are the real ones from github.com/BhavyaSolanki31.
// Metrics come from the resume (primary), then LinkedIn PDF, then the repo README.
// Nothing here is estimated or invented.

export const projects = [
  {
    id: 'energy',
    visual: 'energy',
    icon: 'zap',
    featured: true,
    figure: 'energy',
    title: 'AI-Powered Smart Energy Meter',
    kind: 'Machine learning, time-series forecasting',
    period: 'Nov 2025 – Dec 2025',
    problem:
      'Conventional meters only record consumption. They do not forecast demand or flag abnormal usage as it happens.',
    solution:
      'An LSTM model forecasts short-term power consumption, an Isolation Forest flags load spikes and theft-like patterns, and a Tkinter dashboard shows live usage, billing, forecasts and recommendations. Edge-inference latency is measured to check real-time feasibility.',
    metrics: [
      { value: '85–90%', label: 'predictive accuracy' },
      { value: '~95%', label: 'monitoring efficiency' },
      { value: '<2 s', label: 'response time' },
    ],
    tech: ['Python', 'LSTM', 'Isolation Forest', 'Tkinter', 'Data visualization', 'Anomaly detection'],
    repo: 'https://github.com/BhavyaSolanki31/AI-Powered-Smart-Energy-Meter',
  },
  {
    id: 'dsp',
    visual: 'dsp',
    icon: 'lock',
    featured: true,
    figure: 'dsp',
    title: 'DSP-Based Secure Image Authentication System',
    kind: 'Digital signal processing, image security',
    period: 'Sep 2025 – Dec 2025',
    problem:
      'Confidential images need to be hidden and recovered without visible distortion, and only by the person holding the right PIN.',
    solution:
      'A MATLAB system that hides a secret image in a cover image using bit-plane slicing and pseudo-random embedding. A PIN controls extraction, and a GUI covers both sender and receiver.',
    metrics: [
      { value: '>40 dB', label: 'PSNR across 20+ test images' },
      { value: '<1 s', label: 'PIN validation' },
      { value: '~90%', label: 'authentication success' },
    ],
    tech: ['MATLAB', 'DSP', 'Image processing', 'Bit-plane slicing', 'Pseudo-random embedding'],
    repo: 'https://github.com/BhavyaSolanki31/DSP-Based-Image-Security-and-PIN-Authentication-System',
  },
  {
    id: 'speech',
    visual: 'speech',
    icon: 'mic',
    featured: true,
    figure: 'speech',
    title: 'Real-Time Speech Emotion Detection',
    kind: 'Speech processing, machine learning',
    period: null,
    problem:
      'Speech carries emotional information that is hard to read directly from a raw waveform.',
    solution:
      'A MATLAB pipeline that records or loads audio, extracts 21 acoustic features (MFCC, pitch, energy, spectral measures) and classifies four emotions with a Random Forest trained on a RAVDESS-based dataset. A dashboard shows the waveform, spectrogram, prediction and detection history.',
    metrics: [
      { value: '21', label: 'acoustic features extracted' },
      { value: '4', label: 'emotion classes' },
      { value: '200', label: 'trees in the Random Forest' },
    ],
    tech: ['MATLAB', 'Random Forest', 'MFCC', 'Spectrograms', 'Audio Toolbox', 'Dashboard'],
    repo: 'https://github.com/BhavyaSolanki31/Real-Time-Speech-Emotion-Detection-System-using-MATLAB',
  },
  {
    id: 'ats',
    visual: 'ats',
    icon: 'file',
    featured: false,
    figure: 'ats',
    title: 'ATS Resume Analyzer Pro',
    kind: 'Web application, document processing',
    period: 'May 2026 – Jun 2026',
    solution:
      'Upload a PDF or DOCX resume and get an ATS score out of 100, section and formatting checks, keyword evaluation and improvement suggestions. Rule-based scoring across ten weighted categories.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PDF.js', 'Mammoth.js'],
    repo: 'https://github.com/BhavyaSolanki31/ATS-Resumer-Analyzer-Pro',
  },
  {
    id: 'analog',
    visual: 'analog',
    icon: 'board',
    featured: false,
    figure: 'analog',
    title: '51 Analog Circuits Series',
    kind: 'Analog electronics, team challenge',
    period: null,
    solution:
      'A 51-day challenge completed as part of a team: 51 analog circuits designed and simulated in Cadence Virtuoso, with theory, calculations and observations documented in the repository.',
    tech: ['Cadence Virtuoso', 'Analog electronics', 'Circuit simulation', 'Circuit analysis'],
    repo: 'https://github.com/BhavyaSolanki31/51-Analog-Circuits-Series',
  },
]

// Category weights from the ATS analyzer README (normalized to 100 by the app).
export const atsRubric = [
  ['Contact', 10],
  ['Sections', 15],
  ['Formatting', 10],
  ['Content length', 10],
  ['Dates', 10],
  ['Action verbs', 10],
  ['Resume length', 10],
  ['Quantified results', 15],
  ['Online presence', 10],
  ['Structure', 10],
]

export const pipelines = {
  energy: [
    { title: 'Household power data', text: 'Real-time simulation or UCI dataset' },
    { title: 'LSTM forecast', text: 'Short-term consumption prediction' },
    { title: 'Isolation Forest', text: 'Spikes and theft-like usage flagged' },
    { title: 'Dashboard', text: 'Usage, billing, forecasts, advice' },
  ],
  dsp: [
    { title: 'Cover + secret image', text: 'Plus a user-set PIN' },
    { title: 'Bit-plane slicing', text: 'Secret image split into bit planes' },
    { title: 'Pseudo-random embedding', text: 'Positions derived from the PIN' },
    { title: 'Stego image', text: 'Recovered only with the correct PIN' },
  ],
  speech: [
    { title: 'Audio input', text: 'Live recording or .wav upload' },
    { title: 'Feature extraction', text: '21 acoustic features per sample' },
    { title: 'Random Forest', text: 'Happy, sad, angry or neutral' },
    { title: 'Dashboard', text: 'Waveform, spectrogram, history' },
  ],
}
