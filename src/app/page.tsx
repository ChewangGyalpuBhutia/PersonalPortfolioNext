"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/NavBar';
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
import headerImg from '../../public/chewang.png';

export default function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "Front End Developer", "Back End Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mt-10 px-4" style={{
        paddingLeft: 100,
        paddingRight: 100,
      }}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <div className="animate__animated animate__fadeIn">
              <span className="text-lg font-semibold text-gray-600">Welcome to my Portfolio</span>
              <h1 className="text-4xl font-bold mt-4">{`Hi! I'm Chewang Gyalpu Bhutia`} <span className="txt-rotate" data-period="1000" data-rotate=''><span className="wrap">{text}</span></span></h1>
              <p className="mt-4 text-gray-700">I'm an enthusiastic Full-Stack Developer skilled in both front-end and back-end technologies. Passionate about learning and delivering excellence, I strive to achieve great things with a positive attitude.</p>
              <a className="text-decoration-none" href="https://drive.google.com/file/d/1Gnx_M0z2I1iCRWb1Mj6D70IYQZXWPbr3/view">
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full flex items-center hover:bg-blue-600 transition duration-300" onClick={() => console.log('connect')}>Check Resume</button>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="animate__animated animate__zoomIn" style={{width: 526, height: 526}}>
              <Image src={headerImg} alt="Chewang Gyalpu Bhutia" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}