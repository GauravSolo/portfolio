import styles from './Contact.module.css';

const LINKS = [
  { label: 'Email', href: 'mailto:gauravsharma9339@gmail.com', icon: '✉' },
  { label: '+91 9548523294', href: 'tel:+919548523294', icon: '☎' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/gauravsolo',
    icon: 'in',
  },
  { label: 'GitHub', href: 'https://github.com/gauravsolo', icon: '⌘' },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/gauravsolo',
    icon: '⟨/⟩',
  },
  {
    label: 'HackerRank',
    href: 'https://hackerrank.com/gauravsolo',
    icon: '⊞',
  },
];

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="section-inner">
        <h2 className="section-title">Get In Touch</h2>
        <p className={styles.text}>
          I&apos;m currently open to new opportunities. Whether you have a
          question or just want to say hello, feel free to reach out!
        </p>
        <div className={styles.links}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
