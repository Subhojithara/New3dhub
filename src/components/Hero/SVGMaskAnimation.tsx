"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import styles from '@/components/Hero/svg.module.css';

const SVGMaskAnimation = () => {
  return (
    <>
      <div>
        <div className={styles.screen}></div>
        <section className={styles.section}>
          <video
            className={styles.video}
            src="videos/video 2.mp4"
            autoPlay
            loop
            muted
          ></video>
        </section>
      </div>
    </>
  );
};

export default SVGMaskAnimation;
