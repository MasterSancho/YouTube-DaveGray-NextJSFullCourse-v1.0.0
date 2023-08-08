import styles from './styles.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'About Page',
 viewport: 'width=device-width, initial-scale=1',
 description: 'Created by Dave',
};

export default function AboutLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <>
   <nav>About NavBar</nav>
   <main className={styles.main}>{children}</main>
  </>
 );
}
