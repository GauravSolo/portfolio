import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="section-inner">
        <h2 className="section-title">About Me</h2>
        <p className={styles.text}>
          Full Stack Developer skilled in Java, JavaScript, React.js, Spring
          Boot, and PHP with experience building scalable web applications.
          Certified in Oracle Cloud AI Foundations, with a strong understanding
          of AI concepts. I have worked across startups ranging from early-stage
          founding teams to YC-backed companies, contributing to products that
          serve thousands of daily active users.
        </p>
      </div>
    </section>
  );
}
