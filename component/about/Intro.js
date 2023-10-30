import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const introRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      const introElement = introRef.current;
      gsap.from(introElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div className='section'>
        <div
          className={`section ${isVisible ? "visible" : "hidden"}`}
          style={{ visibility: isVisible ? "visible" : "hidden" }}>
          <div className='w-layout-grid three-columns-grid' ref={introRef}>
            <h4 id='w-node-_90c8d65d-5b59-8209-46c6-d0730519e6dc-ed7a2ae6'>
              INTRO
            </h4>
            <div
              id='w-node-_90c8d65d-5b59-8209-46c6-d0730519e6de-ed7a2ae6'
              className='awards-wrapper'>
              <p id='w-node-_90c8d65d-5b59-8209-46c6-d0730519e6df-ed7a2ae6'>
                2022
              </p>
              <h3 id='w-node-_90c8d65d-5b59-8209-46c6-d0730519e6e1-ed7a2ae6'>
                NATIONAL FILM AWARDS
                <br />
                LONDON FILM CRITICS
                <br />
                AWARD
              </h3>
            </div>
            <div
              id='w-node-_90c8d65d-5b59-8209-46c6-d0730519e6e7-ed7a2ae6'
              className='hidden-on-mobile'
            />
            <div
              id='w-node-_90c8d65d-5b59-8209-46c6-d0730519e6e8-ed7a2ae6'
              className='awards-wrapper'>
              <p id='w-node-_90c8d65d-5b59-8209-46c6-d0730519e6e9-ed7a2ae6'>
                2022
              </p>
              <h3 id='w-node-_90c8d65d-5b59-8209-46c6-d0730519e6eb-ed7a2ae6'>
                CANNES FILM FESTIVAL
                <br />
                LOUIS DELLUC PRIZE
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
