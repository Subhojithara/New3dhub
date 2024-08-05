
import React from 'react';
import styles from './Home.module.css';

const SectionTwo: React.FC = () => {
  return (
    
    <div className={`${styles.section} section`}>
    <div>
      <div className="flex text-center justify-center items-center">
        <div className="h-32 w-[28rem] text-center flex justify-center items-center rounded-2xl bg-gradient-to-r from-green-500 via-yellow-100 to-green-50 shadow-2xl -rotate-2 hover-element duration-500 hover:scale-110">
          <h1 className="text-8xl font-bold reveal-text">Nice</h1>
        </div>
        <div>
          <div className="h-16 w-40 rounded-2xl bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-500 shadow-3xl text-center flex justify-center items-center hover-element duration-500 hover:scale-110 reveal-text">
            <p className="text-4xl font-bold">Easy</p>
          </div>
          <div className="h-16 w-40 rotate-12 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-300 to-orange-100 shadow-3xl text-center flex justify-center items-center hover-element duration-500 hover:scale-110 reveal-text">
            <p className="text-4xl font-bold">Easing</p>
          </div>
        </div>
        <p className="text-9xl font-bold hover-element reveal-text">Add personality</p>
      </div>
      <p className="pt-12 text-2xl font-semibold w-[46rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quaerat voluptatibus possimus. Culpa doloribus deserunt rem vel molestias distinctio mollitia?</p>
    </div>
    </div>
  );
};

export default SectionTwo;
