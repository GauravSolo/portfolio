import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: 'Pertut',
    description: [
      'Online tutor platform with live class scheduling, chat via WebSockets, and feedback loop.',
      'Provided a centralized solution for personalized education, addressing the challenge of finding reliable tutors.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'SQL', 'Socket.IO', 'Git'],
  },
  {
    title: 'RAG AI Chatbot',
    description: [
      'Built a Retrieval-Augmented Generation (RAG) Chatbot enabling context-aware responses.',
      'Integrated Jina embeddings, ChromaDB for vector search, and Redis for session history storage.',
      'Deployed full-stack solution on Render using Docker Compose for scalable cloud deployment.',
    ],
    tags: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'ChromaDB',
      'Redis',
      'Docker',
      'Gemini AI',
      'Jina Embedding',
    ],
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <div key={project.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <ul className={styles.bullets}>
                {project.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
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
