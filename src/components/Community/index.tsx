import type { ReactNode } from 'react';
import React from 'react';
import SectionHeader from '@site/src/components/common/SectionHeader';
import styles from './styles.module.css';

const ContributeIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='6' cy='6' r='2.2' stroke='currentColor' strokeWidth='1.6' />
    <circle cx='6' cy='18' r='2.2' stroke='currentColor' strokeWidth='1.6' />
    <circle cx='18' cy='12' r='2.2' stroke='currentColor' strokeWidth='1.6' />
    <path d='M6 8.2V15.8' stroke='currentColor' strokeWidth='1.6' />
    <path
      d='M6 8.2C6 12 9 12 15.8 12'
      stroke='currentColor'
      strokeWidth='1.6'
      fill='none'
    />
  </svg>
);

const BugIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect
      x='7'
      y='8'
      width='10'
      height='10'
      rx='4'
      stroke='currentColor'
      strokeWidth='1.6'
    />
    <path
      d='M12 8V5M9 5l1.5 1.5M15 5l-1.5 1.5M3 12h4M17 12h4M4.5 17l3-2M19.5 17l-3-2M4.5 7l3 2M19.5 7l-3 2'
      stroke='currentColor'
      strokeWidth='1.4'
      strokeLinecap='round'
    />
  </svg>
);

const StarIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z'
      stroke='currentColor'
      strokeWidth='1.4'
      strokeLinejoin='round'
    />
  </svg>
);

type CommunityCard = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  icon?: ReactNode;
  iconImage?: string;
};

const cards: CommunityCard[] = [
  {
    title: 'Contribute',
    description:
      'Help shape OpenChoreo by submitting features, fixes, or improvements.',
    ctaLabel: 'Contribute',
    ctaHref: 'https://github.com/openchoreo/openchoreo',
    icon: <ContributeIcon />,
  },
  {
    title: 'Report Issues',
    description:
      'Identify bugs and suggest enhancements to make the platform better for everyone.',
    ctaLabel: 'Report an issue',
    ctaHref: 'https://github.com/openchoreo/openchoreo/issues',
    icon: <BugIcon />,
  },
  {
    title: 'Join Our Slack',
    description:
      'Get real-time support, ask questions, and engage with other users and maintainers.',
    ctaLabel: 'Join Slack',
    ctaHref: 'https://slack.cncf.io/',
    iconImage: '/img/icons/community-icon-slack.png',
  },
];

const goodFirstIssues = {
  title: 'New to the project?',
  description:
    'Good first issues are tagged and waiting - a curated list of approachable tasks to make your first contribution straightforward.',
  ctaLabel: 'Browse good first issues',
  ctaHref:
    'https://github.com/openchoreo/openchoreo/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
};

function CommunityCardItem({ card }: { card: CommunityCard }) {
  return (
    <div className={styles.card}>
      <span className={styles.cardIconBox}>
        {card.iconImage ? (
          <img src={card.iconImage} alt='' className={styles.cardIconImage} />
        ) : (
          card.icon
        )}
      </span>
      <h3 className={styles.cardTitle}>{card.title}</h3>
      <p className={styles.cardDescription}>{card.description}</p>
      <a
        href={card.ctaHref}
        className={styles.cardLink}
        target='_blank'
        rel='noopener noreferrer'
      >
        {card.ctaLabel}
        <span aria-hidden='true'>&#8594;</span>
      </a>
    </div>
  );
}

/**
 * Community Component ("Join the OpenChoreo Community")
 * Three cards (Contribute / Report Issues / Join Our Slack) matching the
 * Get Started card style, followed by a tinted "good first issues" callout.
 */
export default function Community(): ReactNode {
  return (
    <section className={styles.section}>
      <div className='container'>
        <SectionHeader title='Join the OpenChoreo community'>
          <p>
            We&apos;re building OpenChoreo with you for the next generation of
            platform engineering.
          </p>
        </SectionHeader>

        <div className={styles.grid}>
          {cards.map((card) => (
            <CommunityCardItem key={card.title} card={card} />
          ))}
        </div>

        <div className={styles.callout}>
          <span className={styles.calloutIconBox} aria-hidden='true'>
            <StarIcon />
          </span>
          <div>
            <h3 className={styles.calloutTitle}>{goodFirstIssues.title}</h3>
            <p className={styles.calloutDescription}>
              {goodFirstIssues.description}
            </p>
            <a
              href={goodFirstIssues.ctaHref}
              className={styles.calloutCta}
              target='_blank'
              rel='noopener noreferrer'
            >
              {goodFirstIssues.ctaLabel}
              <span aria-hidden='true'>&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
