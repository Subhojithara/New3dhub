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
            src="https://rr4---sn-npoe7ne7.googlevideo.com/videoplayback?expire=1722593349&ei=5VusZrmnI67Jp-oPibujgAI&ip=147.78.226.37&id=o-ADBJ-xUe9vDOGq2TpshT54rGrRHLfvtpeyHqj3AJDObE&itag=313&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AXc671KsCOYXJ-75UFwbzkgWTFdyGvx7K9dj9PM7QNk4r_5negiedR5eJcMFSs8AEQyqwuIK50go6iaH&vprv=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=108645027&dur=92.720&lmt=1692016130281686&keepalive=yes&c=ANDROID_CREATOR&txp=5316224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgXtcNrg0QcYENo12mPp8CXZat7cTFuvlrE-8wA6Uz2_MCIQC6i5FAe1vXL4vjuVXjZGlndjAixJ5hqEvfwKb-Rgtoqg%3D%3D&redirect_counter=1&cm2rm=sn-4g5ede76&rrc=80&fexp=24350516,24350517,24350556&req_id=b938a6e1ca2da3ee&cms_redirect=yes&cmsv=e&mh=oB&mip=2405:201:8014:d0fa:ede5:7f94:6828:8ce&mm=34&mn=sn-npoe7ne7&ms=ltu&mt=1722575033&mv=u&mvi=4&pl=52&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AGtxev0wRgIhAIQotfaFwPeAWnS4JFSZbU6ZSIG1mVtJlN7fZJZuwb8TAiEAwnWu5VsowjEzTsBPf88c0vAKyT24VBjnDd0NKhHvRFA%3D"
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
