import React from 'react';
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'

const About = () => {
    return (
        <div id='about' className="hero my-20  ">
  <div className="hero-content  flex-col lg:flex-row">
    <div className='w-1/2 relative'>

    <img src={p1} className=" rounded-lg w-4/5 shadow-2xl" alt='' />
    <img src={p2} className=" rounded-lg absolute w-3/5 right-3 top-1/2 border-8 shadow-2xl" alt='' />
    </div>
    <div className='w-1/2'>
      <h1 className='font-bold text-orange-600 py-5'>About Us</h1>
      <h1 className="text-xl font-bold md:text-5xl md:font-bold">I am qualified<br></br> & of experience<br></br> in this field</h1>
      <p className="py-6 text-justify w-full md:w-4/5">Sometimes, wishing someone a safe journey isn’t quite enough and you need more of a thoughtful, deep message to convey the importance of the trip someone might be taking.</p>
      <p className="py-6 text-justify w-full md:w-4/5">Many people still get very worried when they have to fly. This is completely natural but it's also important to remember that flying is actually a very safe mode of transportation. </p>
      <button className="btn bg-sky-400 border-none hover:bg-sky-500">let's go</button>
    </div>
  </div>
       </div>
    );
};

export default About;