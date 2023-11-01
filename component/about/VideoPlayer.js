import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // useState ile elemanın görünürlük durumunu tutuyoruz
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Eleman görünür olduğunda isVisible durumunu true yap
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    // isVisible true ise animasyonu çalıştır
    if (isVisible) {
      const videoElement = videoRef.current;
      gsap.from(videoElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [isVisible]);

  return (
    <div ref={ref} className={`section ${isVisible ? "visible" : ""}`}>
      <div className='base-container w-container'>
        <div ref={videoRef} className='home-video-player'>
          <img
            src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208.webp'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 96vw, 100vw'
            srcSet='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208-p-500.webp 500w, https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208-p-800.webp 800w, https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208-p-1080.webp 1080w, https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208.webp 1170w'
            alt=''
            className='video-player-image'
          />
          <a
            href='#'
            className='video-lightbox home-2 w-inline-block w-lightbox'
            aria-label='open lightbox'
            aria-haspopup='dialog'>
            <div className='play-button-icon'></div>
            <div className='play-button' />
            <div className='play-button-hover' />
          </a>
          <h4 className='video-title'>Nasıl çalıştığımızı keşfedelim</h4>
        </div>
      </div>
    </div>
  );
}
