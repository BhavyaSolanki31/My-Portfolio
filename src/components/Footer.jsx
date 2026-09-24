import { profile } from '../data/site'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-page-alt">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-4 px-5 py-12 text-center sm:px-8">
        <p className="font-sign text-3xl text-primary">{profile.name}</p>
        <p className="text-sub">ECE + AI/ML Engineer</p>
        <p className="text-sm text-sub">AI • Computer Vision • Signal Processing • Intelligent Systems</p>
        <SocialLinks size="sm" className="mt-2" />
        <p className="mt-4 text-sm text-sub">© 2026 Bhavya Solanki</p>
      </div>
    </footer>
  )
}
