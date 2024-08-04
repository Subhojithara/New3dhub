'use client';
import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';

const projects = [
  {
    vignette: 'https://images.unsplash.com/photo-1722218530941-fb046c70bb30?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    vignette: 'https://images.unsplash.com/photo-1721332149069-a470150ef51c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const spring = {
  stiffness: 150,
  damping: 15,
  mass: 0.1
};

const customLoader = ({ src }: { src: string }) => {
  return src;
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
      {projects.map(({ vignette }, i) => (
        <Gallery mousePosition={mousePosition} vignette={vignette} key={i} name={''} description={''} />
      ))}
    </main>
  );
}

function Gallery({ mousePosition, vignette }: { mousePosition: { x: any, y: any }, name: string, description: string, vignette: string }) {
  const { x, y } = mousePosition;

  return (
    <div className={styles.gallery}>
      <motion.div
        className={styles.vignette}
        style={{ x, y }}
      >
        <Image 
          src={vignette}
          alt="vignette image"
          fill
          loader={customLoader}
        />
        <div className={styles.textOverlay}>
        </div>
      </motion.div>
    </div>
  );
}


