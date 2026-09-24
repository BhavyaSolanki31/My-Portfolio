import {
  Brain, Eye, AudioWaveform, Cpu, Code, FlaskConical, Bug, Wrench,
  Zap, Lock, Mic, FileText, CircuitBoard, GraduationCap, School, Award,
  Layers, Network, Image, Microchip, Wifi, Activity, Binary, Boxes, Plug,
  ShieldCheck, Search, GitBranch,
} from 'lucide-react'

// Brand marks are inline SVG (lucide-react no longer ships them).
export function GitHubIcon({ className = 'size-5', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export function LinkedInIcon({ className = 'size-5', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const map = {
  brain: Brain, eye: Eye, waveform: AudioWaveform, cpu: Cpu, code: Code,
  flask: FlaskConical, bug: Bug, wrench: Wrench,
  zap: Zap, lock: Lock, mic: Mic, file: FileText, board: CircuitBoard,
  graduation: GraduationCap, school: School, award: Award,
  layers: Layers, network: Network, image: Image, microchip: Microchip, wifi: Wifi,
  activity: Activity, binary: Binary, boxes: Boxes, plug: Plug, shield: ShieldCheck,
  search: Search, branch: GitBranch,
}

export function NamedIcon({ name, className = 'size-5', strokeWidth = 1.7, ...props }) {
  const Icon = map[name] ?? Code
  return <Icon aria-hidden="true" className={className} strokeWidth={strokeWidth} {...props} />
}
