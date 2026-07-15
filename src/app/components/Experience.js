import styles from './Experience.module.css';

const EXPERIENCES = [
  {
    role: 'SDE Intern',
    company: 'Arintra (YC W22, Series B)',
    location: 'Onsite - Bangalore',
    date: 'Apr 2026 - Present',
    bullets: [
      'Built production pipelines using Kubernetes manifests and Spinnaker.',
      'Implemented Langfuse tracing, KEDA integration, and Terraform-based alerting for observability.',
      'Setup Datastream CDC to BigQuery, built a cross-env data sync pipeline, and Metabase database connections.',
    ],
    tags: [
      'Python',
      'Docker',
      'Kubernetes',
      'GCP',
      'Terraform',
      'GitHub Actions',
      'Langfuse',
      'Datastream',
      'Jira Automation',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Superreply',
    location: 'Remote - Bangalore',
    date: 'Dec 2025 - Feb 2026',
    bullets: [
      'Led development of an AI voice calling agent with a real-time STT → LLM → TTS pipeline.',
      'Built scalable automation workflows for a WhatsApp-based agent.',
      'Implemented GitHub Actions CI/CD for AWS Lambda deployments and managed infrastructure using Terraform.',
    ],
    tags: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Supabase',
      'AWS',
      'Terraform',
      'GitHub Actions',
      'Git',
      'AI Agents',
    ],
  },
  {
    role: 'Full-Stack Engineer Intern',
    company: 'Zuddl (YC S20, Series A)',
    location: 'Remote - Abu Dhabi',
    date: 'Feb 2025 - Aug 2025',
    bullets: [
      'Integrated Sigma Computing with role-based access controls in the backend using APIs.',
      'Streamlined data migration flow from BigQuery to PostgreSQL via REST APIs using Tray workflows.',
      'Implemented a Kafka consumer for real-time attendee data processing with 99.9% uptime.',
    ],
    tags: [
      'JavaScript',
      'React.js',
      'TypeScript',
      'Spring Boot',
      'Java',
      'Maven',
      'PostgreSQL',
      'Flyway',
      'Git',
      'Kafka',
      'Redis',
    ],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Rise Retail',
    location: 'Remote - Pune',
    date: 'Feb 2022 - Jan 2025',
    bullets: [
      'Built and optimized Billing, Stock, Loyalty, Orders, and QR booking modules supporting 10,000+ daily active users.',
      'Integrated Razorpay and AsiaPay gateways, reducing payment failures by 15%.',
      'Developed WinkelPe platform and a dynamic image-text overlay tool, increasing user engagement by 30%.',
    ],
    tags: ['PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'SQL', 'Git', 'Linux'],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>
        <div className={styles.timeline}>
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.date}>{exp.date}</span>
              </div>
              <p className={styles.company}>
                {exp.company} &middot; {exp.location}
              </p>
              <ul className={styles.bullets}>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {exp.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
