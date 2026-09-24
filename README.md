# Bhavya Solanki: Portfolio

Personal portfolio for **Bhavya Solanki, ECE + AI/ML Engineer**.
Built with React, Vite and Tailwind CSS v4. Light and dark themes, no runtime dependencies beyond React and Lucide icons, fonts self-hosted (no Google Fonts requests).

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

## Design

The look follows the reference portfolio you shared: white page, Montserrat, purple `#55198b` buttons that invert on hover, flat illustrations, round brand-coloured social icons, and card rows for experience, projects and certifications. A light/dark switch sits in the header (light by default, choice remembered). The illustrations are original SVGs, and all copy, data and the photo are yours.

## Project structure

```
public/
  Bhavya_Solanki_Resume.pdf   <- your resume (the Download Resume buttons point here)
  favicon.svg
  og-image.png                <- social preview (1200x630)
src/
  assets/profile.jpg          <- your portrait (replace this file to change the photo)
  components/                 Navbar, ThemeToggle, Button, Chip, SocialLinks, SectionHeading,
                              HeroVisual, Illustrations, ExperienceCard, ProjectCard, SkillGroup,
                              EducationItem, CertificationCard, RepoCard, Reveal, Footer, Icons
  sections/                   Hero, Skills, Experience, Projects, Education, Certifications,
                              Exploring, OpenSource, Contact
  data/                       All content lives here, not in the components
    site.js                   name, links, hero copy, nav, intro bullets, tool pills
    experience.js             Barco and Codec
    projects.js               the five projects and metrics
    skills.js                 grouped skills
    education.js              education, certifications, "Currently exploring"
    repos.js                  GitHub repository list
  hooks/                      useReveal, useActiveSection
  index.css                   Theme tokens (light and dark), animations, reduced-motion rules
  App.jsx, main.jsx
```

## Things to change

| What | Where |
| --- | --- |
| Profile photo | Replace `src/assets/profile.jpg` (portrait, roughly 3:4, ideally 800px wide or more) |
| Resume | Replace `public/Bhavya_Solanki_Resume.pdf`, keeping the filename |
| Text, links, projects, skills | Files in `src/data/` |
| Colours (purple, backgrounds) | `:root` and `[data-theme='dark']` blocks at the top of `src/index.css` |
| Public site URL (canonical, social preview) | `VITE_SITE_URL` in `.env`, with trailing slash |

### Before you publish

1. **Set `VITE_SITE_URL`** in `.env` to the real address of your site. It feeds the canonical link, Open Graph and Twitter tags. The default in the file is a guess.
2. **Check your resume PDF.** It is public once deployed, and yours includes your phone number. If you would rather not publish it, remove the number from the copy in `public/`.
3. **Confirm your LinkedIn URL.** The site uses `linkedin.com/in/bhavya-solanki-267011309/`. Your resume and LinkedIn PDF show two other slugs. Update `src/data/site.js` if this one is not current.

## Updating certificates, logos, screenshots and the loader

| What | Where |
| --- | --- |
| Certificate PDFs (opened by every "View Certificate" button) | `public/certificates/`. Replace a file keeping its name, or change the path in `src/data/education.js` (certifications) and `src/data/experience.js` (Barco, Codec) |
| Barco, Codec, Galgotias and DAV logos | `src/assets/logos/` |
| Project card screenshots (16:10, about 1000x625) | `src/assets/projects/`, wired up in `src/data/projects.js` |
| Technology logos (brand marks, muted until hover) | `src/data/techIcons.js`; which ones appear is set in `src/data/skills.js` (`techStrip` and `skillGroups`) |
| Loading screen (cube animation and signature) | Markup and styles at the top of `index.html`; timing in `src/loader.js` (`MIN` is the minimum display time in ms) |

**Cadence Virtuoso logo:** no logo for it exists in the free icon sets, so a circuit icon is shown. To use the official mark, add it to `src/assets/logos/` and tell the tile to use it, or ask for it to be wired in.

**Certificates are public once deployed.** Anyone with the site address can open these PDFs. Check what each one shows (roll numbers, photos) before publishing.

## Deploy

The build uses relative asset paths (`base: './'`), so the same output works on every host below without extra config.

### GitHub Pages (automatic, recommended)

1. Create a repository (for example `portfolio`) and push this project to the `main` branch.
2. In the repository, open **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Push again, or run the workflow manually from the **Actions** tab. `.github/workflows/deploy.yml` builds and publishes the site.
4. Your site appears at `https://<username>.github.io/<repository>/`. Put that URL in `VITE_SITE_URL`.

For a root site at `https://<username>.github.io/`, name the repository `<username>.github.io`.

### Vercel

1. Push the project to GitHub.
2. Go to vercel.com, choose **Add New > Project** and import the repository.
3. Vercel detects Vite automatically (build `npm run build`, output `dist`). Click **Deploy**.
4. Add `VITE_SITE_URL` under **Settings > Environment Variables** with your Vercel URL, then redeploy.

Or from the terminal: `npx vercel --prod`.

### Netlify

Import the repository at app.netlify.com. `netlify.toml` already sets the build command and publish directory. Add `VITE_SITE_URL` in **Site configuration > Environment variables**.

## Content sources

Every fact on the site comes from your resume (primary), your LinkedIn profile PDF, and the READMEs of your public GitHub repositories. GitHub language and last-update data in `src/data/repos.js` was read from the GitHub API on 19 September 2026. Stars and forks are intentionally not displayed. If you add repositories or update metrics, edit the files in `src/data/`.

## Accessibility and performance notes

- Semantic landmarks, one `h1`, ordered headings, skip link, visible focus rings, keyboard-operable mobile menu (Escape closes it).
- Animations are limited to the hero entrance, a subtle scroll reveal, and hover states. `prefers-reduced-motion: reduce` turns all of them off and shows content immediately.
- Fonts (Montserrat and Yellowtail for the signature logo) are bundled through Fontsource, so there are no third-party requests at runtime.
