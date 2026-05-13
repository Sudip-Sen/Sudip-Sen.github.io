"use client";

import { useState, useEffect } from "react";
import Particles from "./components/Particles";

const socials = [
  { name: "Google Scholar", url: "https://scholar.google.com/citations?user=TUpm174AAAAJ&hl=en", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg", invert: false },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sudip-sen-phi", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg", invert: true },
  { name: "ORCID", url: "https://orcid.org/0009-0004-3885-2054", logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/ORCID_iD.svg", invert: false },
  { name: "GitHub", url: "https://github.com/Sudip-Sen", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg", invert: true },
  { name: "ResearchGate", url: "https://www.researchgate.net/profile/Sudip-Sen-3", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/researchgate.svg", invert: true },
  { name: "X", url: "https://x.com/SudipSe71444612", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg", invert: true },
];

const updates = [
  { date: "May 7, 2026", text: "Launched my personal academic portfolio website at sudip-sen.github.io" },
  { date: "May 1, 2026", text: "First-authored paper on precision early cotton yield prediction published — MS Thesis work accepted in Precision Agriculture journal!" },
];

const publications = [
  { type: "published", year: "2025", title: "Precision early cotton yield prediction in smallholder farms comparing agronomic, remote sensing, and hybrid approaches using statistical and machine learning methods", authors: ["Sen, S.", "Nesa, M. M.", "Rahman, M. F.", "Ashiquzzaman, M.", "Ahmmed, T.", "Tuhin, A. K.", "Islam, M. S.", "Abdullah, H.M."], journal: "Precision Agriculture", link: "#" },
  { type: "published", year: "2025", title: "Cotton Seedling Monitoring and Growth Stage Classification Integrating Deep Learning and Feature Engineering", authors: ["Abdullah, H. M.", "Islam, M.", "Islam, M. S.", "Sen, S.", "Tuhin, A. K.", "Arman, S. E.", "Hasan, M. M."], journal: "Smart Agricultural Technology, 101619", link: "#" },
  { type: "review", year: "2025", title: "Challenges of Unmanned Aerial Systems (UAS) in Crop Production", authors: ["Sen, S.", "Nesa, M. M.", "Ashiquzzaman, M.", "Tuhin, A. K."], journal: "UAV Applications in Natural Resources, Springer (Under Review)", link: null },
  { type: "published", year: "2025", title: "Heat and Drought Induced Yield Loss Quantification of Wheat: Predicted from UAV-based Phenological Parameters", authors: ["Tuhin, A. K.", "Abdullah, H. M.", "Rahman, M. F.", "Ashiquzzaman, M.", "Islam, M. R.", "Sen, S.", "Nesa, M. M."], journal: "Smart Agricultural Technology, 101487", link: "#" },
  { type: "published", year: "2025", title: "Unmanned Aerial Vehicle in Optimizing Nitrogen Fertilizer Use and Estimating Yield of Two Okra Varieties", authors: ["Ahmmed, T.", "Abdullah, H. M.", "Rahman, M. F.", "Sen, S.", "Ashiquzzaman, M.", "Sadia, N. J.", "Tuhin, A. K."], journal: "Smart Agricultural Technology, 101522", link: "#" },
  { type: "book", year: "2024", title: "Land Use Change and Soil Erosion: Challenges and Way Forward to Management", authors: ["Nesa, M.M.", "Propa, S.M.", "Sen, S.", "Abdullah, H.M."], journal: "Climate Change and Soil-Water-Plant Nexus, Springer, Singapore", link: "#" },
];

const skillGroups = [
  {
    title: "🛰️ Remote Sensing & GIS",
    skills: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "ENVI", "Pix4Dmapper", "DJI Terra"],
  },
  {
    title: "🚁 UAV / Drone",
    skills: ["DJI Matrice 350 RTK", "L2 LiDAR Sensor", "Flight Planning", "Multispectral Imaging", "Point Cloud Processing"],
  },
  {
    title: "💻 Programming",
    skills: ["Python", "R", "JavaScript", "Git / GitHub", "Jupyter Notebooks"],
  },
  {
    title: "🤖 Machine Learning & AI",
    skills: ["Random Forest", "Support Vector Machine", "Deep Learning", "Feature Engineering", "Regression Models"],
  },
  {
    title: "🌾 Agricultural Science",
    skills: ["Precision Agriculture", "Crop Yield Prediction", "Plant Phenotyping", "Soil Analysis", "Cotton & Wheat Research"],
  },
  {
    title: "🛠️ Other Tools",
    skills: ["Adobe Illustrator", "Microsoft Office", "Survey Design", "Field Data Collection"],
  },
];

// Gallery photos — add your own photo filenames here later
const galleryPhotos = [
  { src: "/gallery/photo1.jpg", caption: "UAV field operation" },
  { src: "/gallery/photo2.jpg", caption: "Lab work" },
  { src: "/gallery/photo3.jpg", caption: "Field sampling" },
  { src: "/gallery/photo4.jpg", caption: "Research activity" },
  { src: "/gallery/photo5.jpg", caption: "Conference" },
  { src: "/gallery/photo6.jpg", caption: "Yale collaboration fieldwork" },
];

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const phrases = [
      "GIS & Remote Sensing Researcher",
      "Precision Agriculture Specialist",
      "UAV / Drone Operator",
      "Machine Learning Enthusiast",
    ];
    let phraseIdx = 0, charIdx = 0, deleting = false;
    let timeout: NodeJS.Timeout;
    function type() {
      const current = phrases[phraseIdx];
      if (!deleting) {
        setTypedText(current.slice(0, charIdx + 1));
        charIdx++;
        if (charIdx === current.length) { deleting = true; timeout = setTimeout(type, 2000); return; }
      } else {
        setTypedText(current.slice(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
      }
      timeout = setTimeout(type, deleting ? 40 : 70);
    }
    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  const filtered = activeFilter === "all" ? publications : publications.filter((p) => p.type === activeFilter);
  const isDark = theme === "dark";
  const accent = isDark ? "#4ade80" : "#16a34a";
  const navBg = isDark ? "rgba(10,15,13,0.92)" : "rgba(245,249,246,0.92)";
  const sectionAltBg = isDark ? "rgba(15,23,18,0.75)" : "rgba(237,244,239,0.75)";

  const navLinks = ["home", "updates", "about", "education", "publications", "experience", "skills", "gallery", "contact"];

  return (
    <>
      <Particles />

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div onClick={() => setLightboxImg(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <img src={lightboxImg} alt="Gallery" style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: "12px", objectFit: "contain" }} />
        </div>
      )}

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: navBg, backdropFilter: "blur(20px)", borderBottom: "1px solid var(--card-border)", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem" }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.2rem", color: "var(--foreground)" }}>
          Sudip <span style={{ color: accent }}>Sen</span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }} className="desktop-nav">
            {["updates","about","education","publications","experience","skills","gallery","contact"].map(s => (
              <a key={s} href={"#"+s} style={{ color: "var(--text2)", textTransform: "capitalize", fontSize: "0.85rem", letterSpacing: "0.02em", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = accent}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text2)"}>
                {s === "updates" ? "Updates" : s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>
          <button onClick={() => setTheme(isDark ? "light" : "dark")}
            style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)", width: "36px", height: "36px", borderRadius: "50%", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {isDark ? "🌙" : "☀️"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--foreground)", fontSize: "1.4rem", display: "none" }}>☰</button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position: "fixed", top: "64px", left: 0, right: 0, background: navBg, backdropFilter: "blur(20px)", padding: "1.5rem 2rem", borderBottom: "1px solid var(--card-border)", zIndex: 99, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {navLinks.map(s => (
            <a key={s} href={"#"+s} onClick={() => setMenuOpen(false)}
              style={{ color: "var(--text2)", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500, textTransform: "capitalize" }}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 2rem 4rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--accent-dim)", border: "1px solid var(--accent)", color: accent, fontSize: "0.73rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: "100px", marginBottom: "1.5rem" }}>
                <span style={{ width: "6px", height: "6px", background: accent, borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }}></span>
                Open to Collaborations
              </div>
              <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1.05, marginBottom: "0.5rem", color: "var(--foreground)" }}>
                Sudip<br /><span style={{ color: accent }}>Sen</span>
              </h1>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9rem", color: accent, marginBottom: "1.5rem", minHeight: "1.4rem" }}>
                {typedText}<span style={{ display: "inline-block", width: "2px", height: "1em", background: accent, marginLeft: "2px", animation: "blink 1s infinite", verticalAlign: "middle" }}></span>
              </div>
              <p style={{ fontSize: "1rem", color: "var(--text2)", lineHeight: 1.9, marginBottom: "2rem", maxWidth: "580px" }}>
                Researcher at <strong style={{ color: "var(--foreground)" }}>Gazipur Agricultural University</strong> specializing in Precision Agriculture, Remote Sensing, and Machine Learning to advance sustainable food systems.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                <a href="#publications" style={{ background: accent, color: "#000", padding: "0.75rem 1.8rem", borderRadius: "6px", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  📄 View Research
                </a>
                <a href="#contact" style={{ background: "transparent", color: "var(--foreground)", padding: "0.75rem 1.8rem", borderRadius: "6px", fontWeight: 500, fontSize: "0.9rem", textDecoration: "none", border: "1px solid var(--card-border)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  ✉️ Get In Touch
                </a>
              </div>

              {/* SOCIAL BUTTONS */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {socials.map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" title={s.name}
                    onMouseEnter={() => setHoveredSocial(s.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={{ width: "44px", height: "44px", borderRadius: "50%", background: hoveredSocial === s.name ? accent : "var(--accent-dim)", border: "2px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transform: hoveredSocial === s.name ? "translateY(-4px)" : "translateY(0)", transition: "all 0.2s ease" }}>
                    <img src={s.logo} alt={s.name} style={{ width: "22px", height: "22px", objectFit: "contain", filter: s.invert ? "brightness(0) invert(1)" : "none" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* HERO STATS CARD */}
            <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "16px", padding: "2rem", minWidth: "200px", textAlign: "center" }} className="hero-card">
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--accent-dim)", border: `3px solid ${accent}`, margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Serif Display',serif", fontSize: "1.8rem", color: accent }}>SS</div>
              {[["6+", "Publications"], ["3.99", "M.Sc. CGPA"], ["96", "TOEFL Score"], ["5+", "Trainings"]].map(([num, label]) => (
                <div key={label} style={{ padding: "0.75rem 0", borderTop: "1px solid var(--line)" }}>
                  <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.6rem", color: accent, lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.2rem" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECENT UPDATES */}
      <section id="updates" style={{ padding: "5rem 2rem", background: sectionAltBg, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// Recent Updates</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: "1rem" }}>Latest News</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "2.5rem" }}></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {updates.map((u, i) => (
              <div key={i} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderLeft: `4px solid ${accent}`, borderRadius: "8px", padding: "1.25rem 1.5rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.78rem", color: accent, whiteSpace: "nowrap", paddingTop: "0.1rem", minWidth: "100px" }}>{u.date}</div>
                <div style={{ fontSize: "0.92rem", color: "var(--text2)", lineHeight: 1.7 }}>{u.text}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="#publications" style={{ color: accent, fontSize: "0.88rem", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              See All Publications →
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "5rem 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 01. About</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: "1rem" }}>About Me</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "16px", overflow: "hidden", marginBottom: "1.5rem" }}>
                <img src="/photo.jpg" alt="Sudip Sen" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem" }}>
                {[
                  { icon: "📍", label: "Location", value: "Gazipur, Bangladesh" },
                  { icon: "🏫", label: "Institution", value: "Gazipur Agricultural University" },
                  { icon: "✉️", label: "Email", value: "sudipsen4534@gmail.com" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.6rem 0", borderBottom: i < 2 ? "1px solid var(--line)" : "none" }}>
                    <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text2)", marginTop: "0.1rem" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {[
                "I am a researcher specializing in GIS, Remote Sensing, and Precision Agriculture at the GIS & Remote Sensing Laboratory, Gazipur Agricultural University (GAU), Bangladesh.",
                "My M.Sc. thesis — now published in Precision Agriculture journal — focused on precision early cotton yield prediction in smallholder farms, comparing agronomic, remote sensing, and hybrid approaches using statistical and machine learning methods.",
                "I have collaborated with globally renowned institutions including Yale School of the Environment and the International Rice Research Institute (IRRI). I am also a National Science and Technology Fellowship recipient from the Ministry of Science and Technology, Bangladesh.",
                "Beyond research, I have a deep passion for music, art, and mentoring students. I am an award-winning musician and national art competition awardee.",
              ].map((p, i) => (
                <p key={i} style={{ color: "var(--text2)", marginBottom: "1.2rem", lineHeight: 1.9, fontSize: "0.96rem" }}>{p}</p>
              ))}
              <div style={{ marginTop: "2rem" }}>
                <div style={{ fontSize: "0.78rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", fontWeight: 600 }}>Research Interests</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["🌾 Precision Agriculture", "🛰️ Remote Sensing", "🤖 Machine Learning", "🌱 Crop System Modelling", "🚁 UAV / Drone", "🗺️ GIS", "🐍 Python", "📊 R Programming", "☁️ LiDAR", "🌍 Google Earth Engine"].map(tag => (
                    <span key={tag} style={{ background: "var(--accent-dim)", color: accent, border: "1px solid var(--accent)", padding: "0.35rem 0.9rem", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: "5rem 2rem", background: sectionAltBg, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 02. Education</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: "1rem" }}>Academic Background</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          <div style={{ position: "relative", paddingLeft: "2rem", borderLeft: "2px solid var(--line)" }}>
            {[
              { year: "2023–2025", degree: "Master of Science in Agroforestry & Environment", icon: "🎓", school: "Gazipur Agricultural University (GAU), Bangladesh", meta: "CGPA: 3.99 / 4.00 · Outstanding Academic Excellence 🏆" },
              { year: "2018–2022", degree: "Bachelor of Science in Agriculture", icon: "🎓", school: "Gazipur Agricultural University (GAU), Bangladesh", meta: "CGPA: 3.77 / 4.00" },
              { year: "Oct 2024", degree: "TOEFL iBT — English Proficiency", icon: "📜", school: "ETS (Educational Testing Service)", meta: "Score: 96 · Reading: 27 · Listening: 24 · Speaking: 21 · Writing: 24" },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.2rem", position: "relative" }}>
                <div style={{ position: "absolute", left: "-2.55rem", top: "1.75rem", width: "12px", height: "12px", background: accent, borderRadius: "50%", border: "3px solid var(--background)" }}></div>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.75rem", color: accent, marginBottom: "0.4rem" }}>{item.year}</div>
                    <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.1rem", marginBottom: "0.3rem" }}>{item.icon} {item.degree}</h3>
                    <div style={{ color: "var(--text2)", fontSize: "0.88rem", marginBottom: "0.4rem" }}>{item.school}</div>
                    <div style={{ color: accent, fontSize: "0.82rem", fontWeight: 600 }}>{item.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" style={{ padding: "5rem 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 03. Publications</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: "1rem" }}>Research Publications</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "2rem" }}></div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            {[["all", "All (6)"], ["published", "Published"], ["review", "Under Review"], ["book", "Book Chapter"]].map(([val, label]) => (
              <button key={val} onClick={() => setActiveFilter(val)}
                style={{ background: activeFilter === val ? accent : "var(--card)", color: activeFilter === val ? "#000" : "var(--text2)", border: "1px solid var(--card-border)", padding: "0.4rem 1.1rem", borderRadius: "100px", fontSize: "0.8rem", cursor: "pointer", fontWeight: activeFilter === val ? 600 : 400, transition: "all 0.2s" }}>
                {label}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gap: "1.2rem" }}>
            {filtered.map((pub, i) => (
              <div key={i} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.5rem", transition: "border-color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--card-border)"}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.75rem" }}>
                  <span style={{ background: "var(--accent-dim)", color: accent, border: "1px solid var(--accent)", padding: "0.2rem 0.7rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    {pub.type === "review" ? "Under Review" : pub.type === "book" ? "Book Chapter" : "Published"}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.78rem", color: "var(--text3)" }}>{pub.year}</span>
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem", lineHeight: 1.55 }}>{pub.title}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text2)", marginBottom: "0.4rem" }}>
                  {pub.authors.map((a, j) => (
                    <span key={j}>{a === "Sen, S." ? <strong style={{ color: accent }}>{a}</strong> : a}{j < pub.authors.length - 1 ? ", " : ""}</span>
                  ))}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text3)", fontStyle: "italic" }}>{pub.journal}</div>
                {pub.link && <a href={pub.link} style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: accent, marginTop: "0.6rem", fontWeight: 500, textDecoration: "none" }}>🔗 View Article</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "5rem 2rem", background: sectionAltBg, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 04. Experience</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: "1rem" }}>Professional Experience</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          {[
            { title: "Graduate Research Assistant", period: "Jul 2025 – Present", org: "GIS and Remote Sensing Lab, Gazipur Agricultural University", desc: "Conducting UAV flight planning, operation, image processing, and spatial data analysis using QGIS, R, and Python for ongoing research projects in precision agriculture and environmental monitoring." },
            { title: "Research Assistant — Yale Collaboration", period: "Jul 2025", org: "PhD Project, Yale School of the Environment", desc: "Supported 'Measuring the Impacts of Land Conversion and Fragmentation on Bangladesh's Last Tropical Moist Deciduous Forest' through sampling design, biophysical data collection, and navigation of random ground sample locations in the Sal Forest." },
            { title: "Teaching Assistant", period: "Jan – Apr 2025", org: "GIS and Remote Sensing Lab, Gazipur Agricultural University", desc: "Instructed sophomore students in UAV operations, image processing, and R-based data analysis for natural resource management." },
            { title: "Drone Operator & Image Processing", period: "Mar – May 2024", org: "International Rice Research Institute (IRRI), Bangladesh", desc: "Supported the Feed the Future Bangladesh IRRI rice breeding public-private partnership platform activity project through UAV operations and multispectral image processing." },
            { title: "Internship — Genetic Engineering", period: "Mar – May 2022", org: "Institute of Biotechnology & Genetic Engineering (IBGE), Bangladesh", desc: "Worked on transferring resistance genes for a durable blast-resistant wheat line." },
          ].map((exp, i) => (
            <div key={i} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.2rem", transition: "border-color 0.3s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateX(0)"; }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem" }}>{exp.title}</h3>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.75rem", color: accent, background: "var(--accent-dim)", padding: "0.25rem 0.7rem", borderRadius: "4px", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
              <div style={{ color: accent, fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.7rem" }}>{exp.org}</div>
              <div style={{ color: "var(--text2)", fontSize: "0.87rem", lineHeight: 1.8 }}>{exp.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "5rem 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 05. Skills</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: "1rem" }}>Technical Skills</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {skillGroups.map((group, i) => (
              <div key={i} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.5rem", transition: "border-color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--card-border)"}>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "1rem" }}>{group.title}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.skills.map(skill => (
                    <span key={skill} style={{ background: "var(--accent-dim)", color: accent, border: "1px solid var(--accent)", padding: "0.3rem 0.8rem", borderRadius: "100px", fontSize: "0.78rem", fontWeight: 500 }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "5rem 2rem", background: sectionAltBg, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 06. Gallery</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: "0.5rem" }}>Field & Research Gallery</h2>
          <p style={{ color: "var(--text2)", fontSize: "0.9rem", marginBottom: "1rem" }}>Field work, research outputs, and memorable moments.</p>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.2rem" }}>
            {galleryPhotos.map((photo, i) => (
              <div key={i} onClick={() => setLightboxImg(photo.src)}
                style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s, border-color 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = accent; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--card-border)"; }}>
                <div style={{ aspectRatio: "4/3", background: "var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <img src={photo.src} alt={photo.caption}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div style={{ position: "absolute", fontSize: "2rem" }}>📷</div>
                </div>
                <div style={{ padding: "0.75rem 1rem", fontSize: "0.82rem", color: "var(--text2)", fontStyle: "italic" }}>{photo.caption}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--text3)" }}>
            💡 To add your photos: save them in <code style={{ background: "var(--accent-dim)", color: accent, padding: "0.1rem 0.4rem", borderRadius: "4px" }}>public/gallery/</code> folder and update the filenames in the gallery section of page.tsx
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "5rem 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 07. Contact</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", marginBottom: "1rem" }}>Get In Touch</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <p style={{ color: "var(--text2)", marginBottom: "2rem", lineHeight: 1.9, fontSize: "0.96rem" }}>
                Open to research collaborations, PhD opportunities, speaking invitations, and academic discussions. Feel free to reach out!
              </p>
              {[
                { icon: "✉️", label: "Email", value: "sudipsen4534@gmail.com" },
                { icon: "🏫", label: "Institution", value: "GIS & RS Lab, Gazipur Agricultural University, Gazipur-1706, Bangladesh" },
                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/sudip-sen-phi" },
                { icon: "🔬", label: "ORCID", value: "0009-0004-3885-2054" },
              ].map((item, i) => (
                <div key={i} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.85rem", transition: "border-color 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = accent}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--card-border)"}>
                  <div style={{ width: "40px", height: "40px", background: "var(--accent-dim)", border: "1px solid var(--accent)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.15rem" }}>{item.label}</div>
                    <div style={{ fontSize: "0.87rem", color: "var(--foreground)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontSize: "0.82rem", color: "var(--text3)", marginBottom: "1.2rem", background: "var(--accent-dim)", padding: "0.75rem 1rem", borderRadius: "8px", borderLeft: `3px solid ${accent}` }}>
                💡 Sign up free at <strong>formspree.io</strong> → create a form → replace <code>YOUR_FORM_ID</code> below to activate this form.
              </p>
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {[["Name", "name", "Your name"], ["Email", "email", "your@email.com"]].map(([label, name, ph]) => (
                    <div key={String(name)}>
                      <div style={{ fontSize: "0.8rem", color: "var(--text2)", marginBottom: "0.4rem", fontWeight: 500 }}>{label}</div>
                      <input name={String(name)} placeholder={String(ph)} style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)", padding: "0.75rem 1rem", borderRadius: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", width: "100%", outline: "none" }} />
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text2)", marginBottom: "0.4rem", fontWeight: 500 }}>Subject</div>
                  <input name="subject" placeholder="Research collaboration, PhD inquiry..." style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)", padding: "0.75rem 1rem", borderRadius: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", width: "100%", outline: "none" }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text2)", marginBottom: "0.4rem", fontWeight: 500 }}>Message</div>
                  <textarea name="message" placeholder="Your message..." rows={5} style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)", padding: "0.75rem 1rem", borderRadius: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", width: "100%", outline: "none", resize: "vertical" }} />
                </div>
                <button type="submit" style={{ background: accent, color: "#000", border: "none", padding: "0.85rem 2rem", borderRadius: "8px", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer" }}>
                  ✉️ Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: isDark ? "#0a0f0d" : "#e4efe7", borderTop: "1px solid var(--line)", padding: "2.5rem 2rem", textAlign: "center", color: "var(--text3)", fontSize: "0.85rem", position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.2rem", color: accent, marginBottom: "0.5rem" }}>Sudip Sen</div>
        <p>GIS & Remote Sensing Researcher · Gazipur Agricultural University, Bangladesh</p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>© 2025–2026 · Built with Next.js · Hosted on GitHub Pages</p>
      </footer>

      <style>{`
        @keyframes blink { 0%,50%{opacity:1} 51%,100%{opacity:0} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,0.4)} 50%{box-shadow:0 0 0 6px rgba(74,222,128,0)} }
        @media(max-width:768px){
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .hero-card { display: none !important; }
        }
        @media(min-width:769px){
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}