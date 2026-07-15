import styles from './Skills.module.css';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'PHP', 'SQL'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['GCP', 'Kubernetes', 'AWS (Lambda)', 'Terraform', 'Spinnaker', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'BigQuery', 'Supabase', 'Redis', 'ChromaDB'],
  },
  {
    title: 'AI & Systems',
    skills: ['LLM Applications', 'AI Agents', 'RAG', 'STT/TTS Pipelines', 'Vector Databases'],
  },
  {
    title: 'Observability & Tools',
    skills: ['Langfuse', 'KEDA', 'Datastream', 'Metabase', 'Kafka', 'Git', 'Linux'],
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
