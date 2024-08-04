'use client';
import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import styles from './page.module.css';

const projects = [
  {
    name: "THE BIG PROBLEM 💢",
    description: "Though the growth for both B2C & D2C is at it’s peak, the competition is too at a peak. Every other day there’s a new brand raising funds and rolling forward. Until unless you stand out and be a leader - someday, someone, will occupy your market cap."
  },
  {
    name: "THE SOLUTION",
    description: "The only way to stand out is by being great at - Marketing and Advertising, period. But that’s not enough. Most of the brands does digital great, but does traditional extremely poor."
  }
];

const spring = {
  stiffness: 150,
  damping: 15,
  mass: 0.1
};

export default function Home() {
  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  };

  useEffect(() => {
    function raf(time: number) {
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <main onMouseMove={mouseMove} className={styles.main}>
      {projects.map(({ name, description }, i) => (
        <Gallery mousePosition={mousePosition} name={name} description={description} key={i} />
      ))}
    </main>
  );
}

function Gallery({ mousePosition, name, description }: { mousePosition: { x: any, y: any }, name: string, description: string }) {
  const { x, y } = mousePosition;

  return (
    <div className={styles.gallery}>
      <motion.div
        className={styles.vignette}
        style={{ x, y }}
      >
        <div className={styles.textOverlay}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </motion.div>
    </div>
  );
}

