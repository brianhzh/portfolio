import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileLines } from 'react-icons/fa6'
import { profile, works, experience, tagColors } from './data.js'

// Two colorways = the two "templates". ?theme=lilac in the URL or the
// switch in the corner flips between them; choice sticks via localStorage.
const THEMES = ['mint', 'lilac']

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const fromUrl = new URLSearchParams(location.search).get('theme')
    if (THEMES.includes(fromUrl)) return fromUrl
    const saved = localStorage.getItem('theme')
    return THEMES.includes(saved) ? saved : 'mint'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return [theme, setTheme]
}

const LINKS = [
  { label: 'github', href: profile.github, Icon: FaGithub },
  { label: 'linkedin', href: profile.linkedin, Icon: FaLinkedinIn },
  { label: 'email', href: `mailto:${profile.email}`, Icon: FaEnvelope },
  { label: 'resume', href: profile.resume, Icon: FaFileLines },
]

export default function App() {
  const [theme, setTheme] = useTheme()
  const [tab, setTab] = useState('work')

  return (
    <>
      {/* gooey filter: blur + alpha threshold makes overlapping blobs fuse
          into one and pinch apart when they separate — the lava-lamp trick */}
      <svg className="goo-defs" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -14"
            />
          </filter>
        </defs>
      </svg>
      <div className="wash" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => <span key={i} className={`blob blob-${i}`} />)}
      </div>
      <div className="grain" aria-hidden="true" />

      {/* vertical rails framing the content, spanning the middle half of the screen */}
      <div className="rail rail-l" aria-hidden="true" />
      <div className="rail rail-r" aria-hidden="true" />

      {/* quiet corner notes */}
      <div className="hud" aria-hidden="true">
        <span className="hud-bl">est. 2026</span>
        <span className="hud-br">{profile.mark}</span>
      </div>

      <ThemeSwitch theme={theme} setTheme={setTheme} />

      <main>
        {/* ── identity ── */}
        <section className="stage">
          <p className="role">{profile.role}</p>
          <h1 className="name">
            {profile.first} <span className="name-last">{profile.last}</span>
          </h1>
          <p className="intro">{profile.intro}</p>
          <p className="status"><i className="pulse" />{profile.status}</p>
          <div className="links">
            {LINKS.map(({ label, href, Icon }) => (
              <a key={label} className="chip" href={href} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" /> {label}
              </a>
            ))}
          </div>
        </section>

        {/* ── work / experience: minimalist tab nav in the title row ── */}
        <section className="work">
          <nav className="tabs" aria-label="sections">
            <button
              className={tab === 'work' ? 'on' : ''}
              onClick={() => setTab('work')}
            >projects</button>
            <span className="tab-rail" aria-hidden="true" />
            <button
              className={tab === 'experience' ? 'on' : ''}
              onClick={() => setTab('experience')}
            >experience</button>
          </nav>

          {/* both tabs stay mounted, stacked in one grid cell: the container
              keeps the taller one's height (no page jump) and they cross-fade */}
          <div className="tab-stack">
            <div className={`tab-content ${tab === 'work' ? 'show' : ''}`}>
              <div className="panels">
                {works.map((w, i) => (
                  <article className="panel" key={i}>
                    <span className="panel-id">{w.id}</span>
                    <h3>
                      {w.title}
                      {/* only projects with a repo link get the icon */}
                      {w.repo && (
                        <a
                          className="panel-repo"
                          href={w.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${w.title} on GitHub`}
                        >
                          <FaGithub />
                        </a>
                      )}
                    </h3>
                    <p>{w.line}</p>
                    <p className="panel-tags">
                      {w.tags.map((t, j) => (
                        <span key={j}>
                          {j > 0 && <span className="tag-sep"> · </span>}
                          {/* known tags get their tech's color, rest keep the accent */}
                          <span className="tag" style={{ color: tagColors[t.toLowerCase()] }}>
                            {t}
                          </span>
                        </span>
                      ))}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className={`tab-content ${tab === 'experience' ? 'show' : ''}`}>
              <div className="timeline">
                {/* newest on top: list reversed, IDs count down toward the oldest
                    at the bottom (data.js stays in chronological order) */}
                {experience.slice().reverse().map((e, i) => (
                  <div className="exp-item" key={i}>
                    <span className="exp-id">
                      {String(experience.length - i).padStart(2, '0')}
                    </span>
                    <p className="exp-period">{e.period}</p>
                    <h3 className="exp-role">{e.role}</h3>
                    <p className="exp-org">{e.org}</p>
                    {/* hidden until the entry is hovered */}
                    <div className="exp-bullets">
                      <ul>
                        {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── one-line outro ── */}
        <footer className="plate">
          say hi — <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="plate-sep">·</span>© 2026 {profile.first} {profile.last}
        </footer>
      </main>

    </>
  )
}

function ThemeSwitch({ theme, setTheme }) {
  return (
    <div className="switch" role="group" aria-label="colorway">
      {THEMES.map((t) => (
        <button
          key={t}
          className={theme === t ? 'on' : ''}
          onClick={() => setTheme(t)}
        >{t}</button>
      ))}
    </div>
  )
}
