import Reveal from './Reveal'
import CertificateLink from './CertificateLink'
import LogoDisc from './LogoDisc'

// Organisation branding first: a large issuer logo, the certificate name, who issued it,
// month + year, then a single "View Certificate ↗" action. No descriptions, no extra text.
export default function CertificationCard({ cert, index = 0, className = '' }) {
  return (
    <Reveal
      as="article"
      variant="rise"
      delay={(index % 4) * 90}
      className={`cert-card card-pop spot group flex flex-col items-center rounded-[14px] border border-line bg-card px-4 pb-7 pt-8 text-center shadow-card ${className}`}
    >
      <LogoDisc
        src={cert.logo}
        alt={`${cert.issuedBy} logo`}
        bg="#ffffff"
        fill={0.9}
        className="cert-disc w-[min(12.25rem,88%)]"
      />

      <h3 className="mt-7 text-[1.08rem] font-medium leading-snug">{cert.title}</h3>

      <div className="mt-auto w-full pt-5">
        <p className="text-[0.9rem] font-semibold text-primary-text">Issued by {cert.issuedBy}</p>
        <p className="mt-0.5 text-[0.88rem] text-sub">{cert.date}</p>
        <CertificateLink href={cert.file} label={cert.title} variant="solid" className="mt-5" />
      </div>
    </Reveal>
  )
}
