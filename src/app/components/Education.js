import styles from './Education.module.css';

const EDUCATION = [
  {
    school: 'Banaras Hindu University',
    location: 'Varanasi, UP',
    degree: 'Master of Computer Applications, 8.19 CGPA',
    date: 'Oct 2023 - July 2025',
  },
  {
    school: 'Dr Bhimrao Ambedkar University',
    location: 'Agra, UP',
    degree: 'Bachelor of Computer Applications, 79.84%',
    date: 'Oct 2020 - Sep 2023',
  },
];

export default function Education() {
  return (
    <section className={styles.education} id="education">
      <div className="section-inner">
        <h2 className="section-title">Education</h2>
        <div className={styles.list}>
          {EDUCATION.map((edu) => (
            <div key={edu.school} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.school}>{edu.school}</h3>
                <span className={styles.location}>{edu.location}</span>
              </div>
              <div className={styles.meta}>
                <p className={styles.degree}>{edu.degree}</p>
                <span className={styles.date}>{edu.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
