import { useState } from 'react';
import logo from '../images/frokenhag_logo.jpg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return <header className="site-header"><div className="wrap">
    <a href="#top" className="brand" onClick={closeMenu}><img src={logo} alt="Frökenhag" /></a>
    <button className="nav-toggle" aria-label="Öppna meny" aria-expanded={isOpen} aria-controls="siteNav" onClick={() => setIsOpen((open) => !open)}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="#2E4033" strokeWidth="2" strokeLinecap="round"/></svg></button>
    <nav className={`site-nav${isOpen ? ' open' : ''}`} id="siteNav"><a href="#om" onClick={closeMenu}>Om mig</a><a href="#material" onClick={closeMenu}>Material</a><a href="#instagram" onClick={closeMenu}>Instagram</a><a href="#kontakt" onClick={closeMenu}>Kontakt</a></nav>
  </div></header>;
}

function HeroArt() {
  return <div className="hero-art" aria-hidden="true">
    <svg className="sticker star" viewBox="0 0 64 64"><path d="M32 4l7 18 19 2-14 13 4 19-16-10-16 10 4-19L6 24l19-2z" fill="#F4B23B" stroke="#2E4033" strokeWidth="2" strokeLinejoin="round"/></svg>
    <svg className="sticker apple" viewBox="0 0 64 64"><path d="M32 24c-8-8-20-4-20 8 0 14 12 24 20 24s20-10 20-24c0-12-12-16-20-8Z" fill="#E8604A" stroke="#2E4033" strokeWidth="2"/><path d="M32 24V12" stroke="#2E4033" strokeWidth="2" strokeLinecap="round"/><path d="M32 14c4-6 12-4 12-4" stroke="#3E7C80" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
    <svg className="sticker pencil" viewBox="0 0 64 20"><rect x="2" y="4" width="46" height="12" rx="2" fill="#F4B23B" stroke="#2E4033" strokeWidth="2"/><path d="M48 4l12 6-12 6Z" fill="#E8604A" stroke="#2E4033" strokeWidth="2" strokeLinejoin="round"/><rect x="2" y="4" width="10" height="12" fill="#3E7C80"/></svg>
    <svg className="sticker ruler" viewBox="0 0 80 24"><rect x="2" y="2" width="76" height="20" rx="3" fill="#FFFCF5" stroke="#2E4033" strokeWidth="2"/><path d="M12 2v8M24 2v14M36 2v8M48 2v14M60 2v8M68 2v14" stroke="#2E4033" strokeWidth="1.5"/></svg>
    <svg className="sticker abc" viewBox="0 0 96 40"><text x="0" y="30" fontFamily="Fredoka, sans-serif" fontSize="34" fontWeight="600" fill="#3E7C80">ABC</text></svg>
  </div>;
}

export default function App() {
  return <><Header /><main id="top">
    <section className="hero"><div className="wrap"><div className="hero-copy"><span className="hero-eyebrow-badge">Nytt material publiceras löpande</span><h1>Skolmaterial som barnen faktiskt <span className="underline-swipe">vill använda<svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8 C 40 2, 90 2, 100 6 S 160 10, 198 4" stroke="#E8604A" strokeWidth="5" fill="none" strokeLinecap="round"/></svg></span></h1><p className="hero-sub">Egenskapade övningar, spel och bildstöd för lågstadiet — provade i ett riktigt klassrum innan de landar hos dig.</p><div className="button-row"><a href="#material" className="btn btn-primary">Se materialet</a><a href="#instagram" className="btn btn-secondary">Följ på Instagram</a></div></div><HeroArt /></div></section>
    <svg className="torn-divider" viewBox="0 0 1200 34" preserveAspectRatio="none" aria-hidden="true"><path d="M0 20 L40 8 L80 24 L120 6 L160 22 L200 10 L240 26 L280 8 L320 20 L360 6 L400 24 L440 10 L480 22 L520 8 L560 26 L600 12 L640 22 L680 6 L720 24 L760 10 L800 20 L840 8 L880 24 L920 6 L960 22 L1000 10 L1040 26 L1080 8 L1120 20 L1160 6 L1200 22 L1200 34 L0 34 Z"/></svg>
    <section className="about" id="om"><div className="wrap"><figure className="polaroid"><div className="photo-slot">Foto av dig här<br />(1000×1250 px rekommenderas)</div><figcaption>Hej, det är jag som är Frökenhag!</figcaption></figure><div className="about-copy"><h2>Gjort av en lärare, för klassrummet</h2><p>[Skriv två till tre meningar här om vem du är, hur länge du har jobbat med skolmaterial, och vad som gör ditt material speciellt. Berätta gärna varför du började, och vad du brinner för att lära ut.]</p><p>Allt material testas i verkliga klassrum innan det publiceras, och uppdateras utifrån feedback från lärare och elever.</p><ul className="tag-list"><li>Bokstäver &amp; ljud</li><li>Matteövningar</li><li>Bildstöd</li><li>Spel &amp; lek</li></ul></div></div></section>
    <section className="gallery" id="material"><div className="wrap"><div className="section-head"><h2>Senaste materialet</h2><p>Coming soon</p></div></div></section>
    <section className="contact" id="kontakt"><div className="wrap"><div className="contact-box"><h2>Har du en fråga eller feedback?</h2><p>Skicka ett DM på <a href="https://instagram.com/frokenhag" target="_blank" rel="noreferrer">Instagram</a> eller mail, så hör jag av mig så fort jag kan.</p><a className="btn btn-primary" href="mailto:hej@example.com">Skicka mail</a></div></div></section>
  </main><footer className="site-footer"><div className="wrap"><div>© {new Date().getFullYear()} Frökenhag. Allt material är upphovsrättsskyddat.</div><div className="footer-credit">Built by JayTech</div></div></footer></>;
}
