
import React from 'react';
import styles from './Home.module.css';

const SectionTwo: React.FC = () => {

  return (

    <div className={`${styles.section} section`}>
      <div className="flex">
      <div>
        <div className="flex text-center justify-center items-center">
          <div className="p-6 text-center flex justify-center items-center rounded-2xl bg-gradient-to-r from-green-500 via-yellow-100 to-green-50 shadow-2xl hover-element duration-500 hover:scale-110">
            <h1 className="text-4xl font-black reveal-text text-slate-800">To win at traditional, you must have the:</h1>
          </div>
        </div>
        <ul className="text-xl mt-5 font-semibold space-y-2 font-sans">
          <li>💸 More cost-effective (if done right)</li>
          <li>🎯 Able to target the entire market + the 61% untapped</li>
          <li>📢 Greater awareness and impact</li>
          <li>⚡ Quicker to implement and gain traction</li>
          <li>💗 Understanding how to win hearts</li>
          <li>🧠 Understanding how to hit the bullseye and make your business remembered</li>
          <li>㊙️ Understand the secret sauce behind emotions and correct timing</li>
          <li>📢 Understanding how to make your marketing not feel like marketing</li>
          <li>👁 Understanding the right way to advertise and capture attention</li>
          <li>💲 Understanding how to lower your marketing budget and increase ROAS</li>
          <li>🌍 Understanding every location deeply to find the sweet spots</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default SectionTwo;
