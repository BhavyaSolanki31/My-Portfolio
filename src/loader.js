// Controls the initial loading screen defined in index.html.
// It stays for a short minimum time (so it never just flashes), waits for the page and
// signature font to be ready, then fades out and is removed from the DOM.

const root = document.documentElement
const el = document.getElementById('loader')

function finish() {
  root.classList.remove('is-loading')
  if (!el) return
  el.classList.add('is-done')
  const remove = () => el.remove()
  el.addEventListener('transitionend', remove, { once: true })
  setTimeout(remove, 1200) // fallback if transitionend never fires
}

if (!el) {
  root.classList.remove('is-loading')
} else {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const MIN = reduce ? 400 : 1700 // total ms from navigation start
  const MAX = 4500

  const sig = el.querySelector('.ld-sig')
  const showSig = () => sig && sig.classList.add('ready')
  const fontReady = document.fonts
    ? Promise.race([document.fonts.load('1em Yellowtail'), new Promise((r) => setTimeout(r, 1200))])
    : Promise.resolve()
  fontReady.then(showSig, showSig)

  const pageLoaded = new Promise((resolve) => {
    if (document.readyState === 'complete') resolve()
    else window.addEventListener('load', resolve, { once: true })
  })
  const minTime = new Promise((resolve) => setTimeout(resolve, Math.max(0, MIN - performance.now())))

  Promise.race([Promise.all([pageLoaded, fontReady, minTime]), new Promise((r) => setTimeout(r, MAX))]).then(finish, finish)
}
