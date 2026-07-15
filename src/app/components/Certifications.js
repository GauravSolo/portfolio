import styles from './Certifications.module.css';

const ITEMS = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    detail: 'Certification',
    icon: '🎓',
  },
  {
    title: 'Haxplore Codefest Hackathon — IIT BHU',
    detail: 'Developed a Temple Ticket Generation System (Mar 2024).',
    icon: '🏆',
  },
  {
    title: 'TCS CodeVita Season 12',
    detail: 'Ranked 1295 among global participants.',
    icon: '⚡',
  },
];

export default function Certifications() {
  return (
    <section className={styles.certifications} id="certifications">
      <div className="section-inner">
        <h2 className="section-title">Certifications &amp; Achievements</h2>
        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.icon}>{item.icon}</span>
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.detail}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
