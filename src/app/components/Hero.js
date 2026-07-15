import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 className={styles.name}>Gaurav Sharma</h1>
          <h2 className={styles.title}>Software Engineer</h2>
          <p className={styles.tagline}>
            I build scalable applications with Java, JavaScript, React.js, and
            Spring Boot, with hands-on expertise in Kubernetes, GCP, and
            real-time AI pipelines. Certified in Oracle Cloud AI Foundations.
          </p>
          <div className={styles.buttons}>
            <a
              href="/Gaurav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              View Resume
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Contact Me
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.codeCard}>
            <div className={styles.cardHeader}>
              <span className={styles.dot} style={{ background: '#ff5f57' }} />
              <span className={styles.dot} style={{ background: '#febc2e' }} />
              <span className={styles.dot} style={{ background: '#28c840' }} />
              <span className={styles.cardTitle}>gaurav.js</span>
            </div>
            <pre className={styles.code}><code>{
`const gaurav = {
  role: "Software Engineer",
  languages: ["TypeScript", "JavaScript",
              "Java", "Python"],
  frontend:  ["React.js", "Next.js",
              "Node.js"],
  backend:   ["Spring Boot", "Express.js"],
  cloud:     ["GCP", "Kubernetes",
              "Terraform", "Docker"],
  data:      ["PostgreSQL", "BigQuery",
              "Redis"],
  ai:        ["LLM Apps", "RAG",
              "AI Agents"],
  passion:   "Building products that scale"
};`
            }</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
