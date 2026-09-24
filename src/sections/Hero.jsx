import { Fragment } from 'react'
import { profile } from '../data/site'
import Button from '../components/Button'
import HeroVisual from '../components/HeroVisual'
import SocialLinks from '../components/SocialLinks'

// Each word slides up out of its own mask, one after another.
function SplitWords({ text }) {
  return text.split(' ').map((word, i, all) => (
    <Fragment key={i}>
      <span className="word-mask">
        <span className="word" style={{ '--w': i }}>
          {word}
        </span>
      </span>
      {i < all.length - 1 ? ' ' : null}
    </Fragment>
  ))
}

// Full-screen hero: fills the viewport below the sticky header and spreads across its width.
export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden py-12 sm:py-16"
    >
      <div className="mx-auto grid w-full max-w-[1500px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:px-14">
        <div>
          <p
            className="hero-in inline-flex items-center gap-3 rounded-2xl bg-tint py-2 pl-3.5 pr-4 text-sm font-medium text-primary sm:rounded-full"
            style={{ '--i': 0 }}
          >
            <span className="status-dot relative size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            {profile.status}
          </p>

          <h1
            id="hero-title"
            className="mt-8 text-[clamp(2.9rem,8.4vw,6.6rem)] font-normal leading-[1.04] tracking-[-0.03em]"
          >
            <SplitWords text="Hi all, I’m Bhavya" />{' '}
            <span className="wave-hand hand-pop" aria-hidden="true">
              👋
            </span>
          </h1>

          <p
            className="hero-in mt-8 max-w-[40rem] text-[clamp(1.2rem,2.5vw,1.9rem)] leading-snug text-sub"
            style={{ '--i': 2 }}
          >
            {profile.tagline}
          </p>

          <SocialLinks className="hero-in mt-10" style={{ '--i': 3 }} />

          <div className="hero-in mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ '--i': 4 }}>
            <Button href="#contact">Contact me</Button>
            <Button href={profile.resume} download="Bhavya_Solanki_Resume.pdf">
              Download my resume
            </Button>
          </div>
        </div>

        <div className="hero-in" style={{ '--i': 3 }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
