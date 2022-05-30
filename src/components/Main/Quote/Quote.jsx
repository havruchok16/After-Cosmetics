import React from 'react';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import './quote.css';

export default function Quote() {
  
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' “Примите ритм природы: её секрет - терпение“ '], 
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='quote'>    
      <span className='quote_text' ref={el}></span>
      <p className='quote__text'>Ральф Уолдо Эмерсон</p>
    </div>
  );
}
