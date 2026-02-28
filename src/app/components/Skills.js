import styles from './Skills.module.css';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'PHP', 'SQL'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (Lambda)', 'Terraform', 'GitHub Actions', 'Docker', 'CI/CD'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'Supabase', 'Redis', 'ChromaDB', 'BigQuery'],
  },
  {
    title: 'AI & Systems',
    skills: ['LLM Applications', 'AI Agents', 'RAG', 'STT/TTS Pipelines', 'Vector Databases'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Linux', 'Kafka', 'Maven', 'Flyway'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className={styles.groups}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.tags}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
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
