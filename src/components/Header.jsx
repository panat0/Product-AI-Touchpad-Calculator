import React from 'react';
import han from '../image/han.png';
import '../App.css';

function Head() {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center'>
        <div className='text-white w-full lg:w-3/5 p-5 '>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>
            Product <br /> AI Touchpad Calculator
          </h1>
          <p className='mt-5 text-lg md:text-xl text-gray-500'>
          In this rapidly advancing technological era, the AI Touchpad Calculator has transformed the traditional calculator into an intelligent tool that integrates touchpad functionality with AI. This combination enhances convenience and maximizes efficiency in every calculation, revolutionizing the way mathematical operations are performed.
          </p>
          <button className='bg-gradient-to-br from-btnS to-btnG py-2 px-4 md:py-2 md:px-4 rounded-xl mt-3'>
            Get it Now
          </button>
        </div>
        <div className='w-full lg:w-auto'>
          <img className='w-full h-auto' src={han} alt='AI Touchpad Calculator' />
        </div>
      </div>
    </>
  );
}

export default Head;
