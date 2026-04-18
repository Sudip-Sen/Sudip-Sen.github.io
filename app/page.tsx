"use client";

import { useState, useEffect } from "react";
import Particles from "./components/Particles";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Theme toggle
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Typing effect
  useEffect(() => {
    const phrases = [
      "GIS & Remote Sensing Researcher",
      "Precision Agriculture Specialist",
      "UAV / Drone Operator",
      "Machine Learning Enthusiast",
      "MS Thesis: Cotton Yield Prediction",
    ];
    let phraseIdx = 0, charIdx = 0, deleting = false;
    let timeout: NodeJS.Timeout;

    function type() {
      const current = phrases[phraseIdx];
      if (!deleting) {
        setTypedText(current.slice(0, charIdx + 1));
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        setTypedText(current.slice(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }
      timeout = setTimeout(type, deleting ? 40 : 70);
    }
    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  const publications = [
    {
      type: "review",
      year: "2025",
      title: "Precision early cotton yield prediction in smallholder farms comparing agronomic, remote sensing, and hybrid approaches using statistical and machine learning methods",
      authors: ["Sen, S.", "Nesa, M. M.", "Rahman, M. F.", "Ashiquzzaman, M.", "Ahmmed, T.", "Tuhin, A. K.", "Islam, M. S.", "Abdullah, H.M."],
      journal: "Precision Agriculture (Under Review) — MS Thesis",
      link: null,
    },
    {
      type: "published",
      year: "2025",
      title: "Cotton Seedling Monitoring and Growth Stage Classification Integrating Deep Learning and Feature Engineering",
      authors: ["Abdullah, H. M.", "Islam, M.", "Islam, M. S.", "Sen, S.", "Tuhin, A. K.", "Arman, S. E.", "Hasan, M. M."],
      journal: "Smart Agricultural Technology, 101619",
      link: "#",
    },
    {
      type: "review",
      year: "2025",
      title: "Challenges of Unmanned Aerial Systems (UAS) in Crop Production",
      authors: ["Sen, S.", "Nesa, M. M.", "Ashiquzzaman, M.", "Tuhin, A. K."],
      journal: "UAV Applications in Natural Resources, Springer (Under Review)",
      link: null,
    },
    {
      type: "published",
      year: "2025",
      title: "Heat and Drought Induced Yield Loss Quantification of Wheat: Predicted from UAV-based Phenological Parameters",
      authors: ["Tuhin, A. K.", "Abdullah, H. M.", "Rahman, M. F.", "Ashiquzzaman, M.", "Islam, M. R.", "Sen, S.", "Nesa, M. M."],
      journal: "Smart Agricultural Technology, 101487",
      link: "#",
    },
    {
      type: "published",
      year: "2025",
      title: "Unmanned Aerial Vehicle in Optimizing Nitrogen Fertilizer Use and Estimating Yield of Two Okra Varieties",
      authors: ["Ahmmed, T.", "Abdullah, H. M.", "Rahman, M. F.", "Sen, S.", "Ashiquzzaman, M.", "Sadia, N. J.", "Tuhin, A. K."],
      journal: "Smart Agricultural Technology, 101522",
      link: "#",
    },
    {
      type: "book",
      year: "2024",
      title: "Land Use Change and Soil Erosion: Challenges and Way Forward to Management",
      authors: ["Nesa, M.M.", "Propa, S.M.", "Sen, S.", "Abdullah, H.M."],
      journal: "Climate Change and Soil-Water-Plant Nexus, Springer, Singapore",
      link: "#",
    },
  ];

  const filtered = activeFilter === "all"
    ? publications
    : publications.filter((p) => p.type === activeFilter);

  const isDark = theme === "dark";
  const accent = isDark ? "#4ade80" : "#16a34a";

  const styles: Record<string, React.CSSProperties> = {
    nav: {
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: isDark ? "rgba(10,15,13,0.85)" : "rgba(245,249,246,0.85)",
      backdropFilter: "blur(20px)",
      borderBottom: `1px solid var(--card-border)`,
      padding: "0 2rem", display: "flex",
      alignItems: "center", justifyContent: "space-between",
      height: "64px",
    },
    logo: {
      fontFamily: "'DM Serif Display', serif",
      fontSize: "1.2rem", color: "var(--foreground)",
    },
    section: {
      padding: "5rem 2rem",
      position: "relative", zIndex: 1,
    },
    sectionAlt: {
      padding: "5rem 2rem",
      background: isDark ? "rgba(15,23,18,0.7)" : "rgba(237,244,239,0.7)",
      position: "relative", zIndex: 1,
    },
    container: { maxWidth: "1100px", margin: "0 auto" },
    card: {
      background: "var(--card)",
      border: "1px solid var(--card-border)",
      borderRadius: "12px", padding: "1.5rem",
      marginBottom: "1.2rem",
      transition: "border-color 0.3s, transform 0.3s",
    },
  };

  return (
    <>
      <Particles />

      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.logo}>
          Sudip <span style={{ color: accent }}>Sen</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div style={{ display: menuOpen ? "flex" : "none", position: "fixed", top: "64px", left: 0, right: 0, background: isDark ? "rgba(10,15,13,0.95)" : "rgba(245,249,246,0.95)", flexDirection: "column", padding: "2rem", gap: "1.5rem", borderBottom: "1px solid var(--card-border)", zIndex: 99 }}>
            {["about","education","publications","experience","skills","contact"].map(s => (
              <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)}
                style={{ color: "var(--text2)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.05em", textDecoration: "none" }}>
                {s}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {["about","education","publications","experience","skills","contact"].map(s => (
              <a key={s} href={`#${s}`}
                style={{ color: "var(--text2)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.05em", textDecoration: "none", display: "none" }}
                className="nav-desktop-link">
                {s}
              </a>
            ))}
          </div>
          <button onClick={() => setTheme(isDark ? "light" : "dark")}
            style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)", width: "38px", height: "38px", borderRadius: "50%", cursor: "pointer", fontSize: "1rem" }}>
            {isDark ? "🌙" : "☀️"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--foreground)", fontSize: "1.5rem" }}>
            ☰
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 2rem 4rem", position: "relative", zIndex: 1 }}>
        <div style={styles.container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--accent-dim)", border: `1px solid ${accent}40`, color: accent, fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.4rem 1rem", borderRadius: "100px", marginBottom: "1.5rem" }}>
            <span style={{ width: "6px", height: "6px", background: accent, borderRadius: "50%", display: "inline-block" }}></span>
            GIS &amp; Remote Sensing Researcher
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1.05, marginBottom: "0.5rem", color: "var(--foreground)" }}>
            Sudip<br /><span style={{ color: accent }}>Sen</span>
          </h1>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9rem", color: accent, marginBottom: "1.5rem", minHeight: "1.4rem" }}>
            {typedText}<span style={{ display: "inline-block", width: "2px", height: "1em", background: accent, marginLeft: "2px", animation: "blink 1s infinite", verticalAlign: "middle" }}></span>
          </div>
          <p style={{ fontSize: "1.05rem", color: "var(--text2)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "600px" }}>
            Researcher at Gazipur Agricultural University exploring the intersection of{" "}
            <strong>Precision Agriculture</strong>, <strong>Remote Sensing</strong>, and{" "}
            <strong>Machine Learning</strong> to advance sustainable food systems.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a href="#publications" style={{ background: accent, color: "#000", padding: "0.75rem 1.8rem", borderRadius: "6px", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              📄 View Publications
            </a>
            <a href="#contact" style={{ background: "transparent", color: "var(--foreground)", padding: "0.75rem 1.8rem", borderRadius: "6px", fontWeight: 500, fontSize: "0.9rem", textDecoration: "none", border: "1px solid var(--card-border)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              ✉️ Get In Touch
            </a>
          </div>
          <div style={{ display: "flex", gap: "2.5rem" }}>
            {[["6+","Papers"],["3.99","M.Sc. CGPA"],["96","TOEFL Score"],["5+","Trainings"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", color: accent, display: "block", lineHeight: 1 }}>{num}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.sectionAlt}>
        <div style={styles.container}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 01. about</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>About Me</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start" }}>
            <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "16px", aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem", color: "var(--text3)" }}>
              <div style={{ fontSize: "4rem" }}>🧑‍🔬</div>
              <p style={{ fontSize: "0.8rem", textAlign: "center", padding: "0 1rem" }}>Add your photo here<br/><span style={{fontSize:"0.72rem"}}>(instructions below)</span></p>
            </div>
            <div>
              {[
                "I am a researcher specializing in GIS, Remote Sensing, and Precision Agriculture at the GIS & Remote Sensing Laboratory, Gazipur Agricultural University (GAU), Bangladesh.",
                "My M.Sc. thesis focused on precision early cotton yield prediction in smallholder farms, comparing agronomic, remote sensing, and hybrid approaches — currently under review at Precision Agriculture journal.",
                "I have collaborated with globally renowned institutions including Yale School of the Environment and the International Rice Research Institute (IRRI). I am also a National Science and Technology Fellowship recipient.",
                "Beyond research, I have a deep passion for music, art, and mentoring students. I am an award-winning musician and national art competition awardee.",
              ].map((p, i) => (
                <p key={i} style={{ color: "var(--text2)", marginBottom: "1.2rem", lineHeight: 1.9, fontSize: "0.97rem" }}>{p}</p>
              ))}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" }}>
                {["🌾 Precision Agriculture","🛰️ Remote Sensing","🤖 Machine Learning","🌱 Crop System Modelling","🚁 UAV / Drone","🗺️ GIS","🐍 Python","📊 R Programming"].map(tag => (
                  <span key={tag} style={{ background: "var(--accent-dim)", color: accent, border: `1px solid ${accent}30`, padding: "0.35rem 0.85rem", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={styles.section}>
        <div style={styles.container}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 02. education</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Academic Credentials</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          <div style={{ position: "relative", paddingLeft: "2rem", borderLeft: "2px solid var(--line)" }}>
            {[
              { year: "2023–2025", title: "Master of Science in Agroforestry & Environment", sub: "Gazipur Agricultural University (GAU), Bangladesh", meta: "CGPA: 3.99 / 4.00 🏆" },
              { year: "2018–2022", title: "Bachelor of Science in Agriculture", sub: "Gazipur Agricultural University (GAU), Bangladesh", meta: "CGPA: 3.77 / 4.00" },
              { year: "Oct 2, 2024", title: "TOEFL iBT — English Proficiency", sub: "ETS (Educational Testing Service)", meta: "Score: 96 | Reading: 27 | Listening: 24 | Speaking: 21 | Writing: 24" },
            ].map((item, i) => (
              <div key={i} style={{ ...styles.card, position: "relative" }}>
                <div style={{ position: "absolute", left: "-2.55rem", top: "1.75rem", width: "12px", height: "12px", background: accent, borderRadius: "50%", border: "3px solid var(--background)" }}></div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.75rem", color: accent, marginBottom: "0.4rem" }}>{item.year}</div>
                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.1rem", marginBottom: "0.2rem" }}>{item.title}</h3>
                <div style={{ color: "var(--text2)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>{item.sub}</div>
                <div style={{ color: accent, fontSize: "0.85rem", fontWeight: 600 }}>{item.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" style={styles.sectionAlt}>
        <div style={styles.container}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 03. publications</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Research Publications</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "2rem" }}></div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            {[["all","All (6)"],["published","Published"],["review","Under Review"],["book","Book Chapter"]].map(([val, label]) => (
              <button key={val} onClick={() => setActiveFilter(val)}
                style={{ background: activeFilter === val ? accent : "var(--card)", color: activeFilter === val ? "#000" : "var(--text2)", border: `1px solid ${activeFilter === val ? accent : "var(--card-border)"}`, padding: "0.4rem 1rem", borderRadius: "100px", fontSize: "0.8rem", cursor: "pointer" }}>
                {label}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gap: "1.2rem" }}>
            {filtered.map((pub, i) => (
              <div key={i} style={{ ...styles.card, marginBottom: 0 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.75rem" }}>
                  <span style={{ background: "var(--accent-dim)", color: accent, border: `1px solid ${accent}30`, padding: "0.25rem 0.7rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    {pub.type === "review" ? "Under Review" : pub.type === "book" ? "Book Chapter" : "Published"}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.8rem", color: "var(--text3)" }}>{pub.year}</span>
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem", lineHeight: 1.5 }}>{pub.title}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text2)", marginBottom: "0.5rem" }}>
                  {pub.authors.map((a, j) => (
                    <span key={j}>{a === "Sen, S." ? <strong style={{ color: accent }}>{a}</strong> : a}{j < pub.authors.length - 1 ? ", " : ""}</span>
                  ))}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text3)", fontStyle: "italic" }}>{pub.journal}</div>
                {pub.link && <a href={pub.link} style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: accent, marginTop: "0.5rem", fontWeight: 500 }}>🔗 View Article</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={styles.section}>
        <div style={styles.container}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 04. experience</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Professional Experience</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          {[
            { title: "Graduate Research Assistant", period: "Jul 2025–Present", org: "GIS and Remote Sensing Lab, GAU", desc: "Conducting UAV flight planning, operation, image processing, and spatial data analysis using QGIS, R, and Python for ongoing research projects." },
            { title: "Research Assistant — Yale Collaboration", period: "Jul 2025", org: "PhD Project, Yale School of the Environment", desc: "Supported 'Measuring the Impacts of Land Conversion and Fragmentation on Bangladesh's Last Tropical Moist Deciduous Forest' through sampling design and biophysical data collection." },
            { title: "Teaching Assistant", period: "Jan–Apr 2025", org: "GIS and Remote Sensing Lab, GAU", desc: "Instructed sophomore students in UAV operations, image processing, and R-based data analysis for natural resource management." },
            { title: "Drone Operator & Image Processing", period: "Mar–May 2024", org: "International Rice Research Institute (IRRI), Bangladesh", desc: "Supported the Feed the Future Bangladesh IRRI rice breeding public-private partnership platform activity project." },
            { title: "Internship — Genetic Engineering", period: "Mar–May 2022", org: "Institute of Biotechnology & Genetic Engineering (IBGE), Bangladesh", desc: "Worked on transferring resistance genes for a durable blast-resistant wheat line." },
          ].map((exp, i) => (
            <div key={i} style={styles.card}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.5rem" }}>
                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem" }}>{exp.title}</h3>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.75rem", color: accent, background: "var(--accent-dim)", padding: "0.25rem 0.7rem", borderRadius: "4px", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
              <div style={{ color: accent, fontSize: "0.88rem", fontWeight: 500, marginBottom: "0.75rem" }}>{exp.org}</div>
              <div style={{ color: "var(--text2)", fontSize: "0.88rem", lineHeight: 1.7 }}>{exp.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={styles.sectionAlt}>
        <div style={styles.container}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 05. skills</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Technical Skills</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem" }}>
            {[
              { title: "Geospatial Analysis", skills: [["ArcGIS Pro", 90],["QGIS", 92],["Google Earth Engine", 80]] },
              { title: "UAV / Drone", skills: [["DJI Matrice 350 RTK + LiDAR", 88],["Pix4D / DJI Terra", 85],["Flight Planning", 90]] },
              { title: "Programming", skills: [["R (Statistical Analysis)", 75],["Python (ML/Data Science)", 70]] },
              { title: "Other Tools", skills: [["Adobe Illustrator", 80],["Pix4Dmapper", 85]] },
            ].map((group, i) => (
              <div key={i} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: accent, marginBottom: "1rem" }}>{group.title}</div>
                {group.skills.map(([name, pct]) => (
                  <div key={name} style={{ marginBottom: "0.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text2)", marginBottom: "0.3rem" }}>
                      <span>{name}</span><span>{pct}%</span>
                    </div>
                    <div style={{ height: "4px", background: "var(--line)", borderRadius: "2px" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${accent}, var(--accent2))`, borderRadius: "2px" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <div style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", color: accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>// 06. contact</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Get In Touch</h2>
          <div style={{ width: "48px", height: "3px", background: accent, borderRadius: "2px", marginBottom: "3rem" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <p style={{ color: "var(--text2)", marginBottom: "2rem", lineHeight: 1.8 }}>
                I am open to research collaborations, PhD opportunities, and academic discussions. Feel free to reach out!
              </p>
              {[
                { icon: "✉️", label: "Email", value: "sudipsen4534@gmail.com" },
                { icon: "🏫", label: "Institution", value: "GIS & RS Lab, Gazipur Agricultural University, Bangladesh" },
                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/sudip-sen" },
              ].map((item, i) => (
                <div key={i} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: "12px", padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: "44px", height: "44px", background: "var(--accent-dim)", border: `1px solid ${accent}30`, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>{item.label}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--foreground)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontSize: "0.82rem", color: "var(--text3)", marginBottom: "1rem" }}>
                💡 Sign up free at <strong>formspree.io</strong> and replace YOUR_FORM_ID to enable this form.
              </p>
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {[["Name","name","Your name"],["Email","email","your@email.com"]].map(([label, name, ph]) => (
                    <div key={name}>
                      <div style={{ fontSize: "0.8rem", color: "var(--text2)", marginBottom: "0.4rem" }}>{label}</div>
                      <input name={name} placeholder={ph} style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)", padding: "0.75rem 1rem", borderRadius: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", width: "100%", outline: "none" }} />
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text2)", marginBottom: "0.4rem" }}>Subject</div>
                  <input name="subject" placeholder="Research collaboration..." style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)", padding: "0.75rem 1rem", borderRadius: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", width: "100%", outline: "none" }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text2)", marginBottom: "0.4rem" }}>Message</div>
                  <textarea name="message" placeholder="Your message..." rows={5} style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)", padding: "0.75rem 1rem", borderRadius: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", width: "100%", outline: "none", resize: "vertical" }} />
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
      <footer style={{ background: isDark ? "#0a0f0d" : "#e4efe7", borderTop: "1px solid var(--line)", padding: "2rem", textAlign: "center", color: "var(--text3)", fontSize: "0.85rem", position: "relative", zIndex: 1 }}>
        <p>© 2025 <span style={{ color: accent }}>Sudip Sen</span>. Researcher · GIS &amp; Remote Sensing · Gazipur Agricultural University, Bangladesh.</p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>Built with ❤️ using Next.js · Hosted on GitHub Pages</p>
      </footer>

      <style>{`
        @keyframes blink { 0%,50%{opacity:1} 51%,100%{opacity:0} }
        @media(min-width:768px){
          .nav-desktop-link { display: flex !important; }
        }
      `}</style>
    </>
  );
}