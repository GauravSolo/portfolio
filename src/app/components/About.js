import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="section-inner">
        <h2 className="section-title">About Me</h2>
        <p className={styles.text}>
          Software Engineer skilled in Java, JavaScript, React.js, and Spring
          Boot, with experience building scalable applications. I have hands-on
          expertise in Kubernetes and GCP, and enjoy working across the stack —
          from real-time AI pipelines to production infrastructure and
          observability. Certified in Oracle Cloud AI Foundations, with a strong
          understanding of AI concepts. I&apos;ve worked across startups ranging
          from early-stage founding teams to YC-backed companies, contributing
          to products that serve thousands of daily active users.
        </p>
      </div>
    </section>
  );
}
