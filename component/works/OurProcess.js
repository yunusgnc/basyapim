import React, { useEffect } from "react";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function OurProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0, // Gösterim durumuna göre opacity ayarla
    y: isVisible ? 0 : 50, // Gösterim durumuna göre yükseklik ayarla
    config: config.wobbly, // Animasyonun yumuşaklığını ayarla
    immediate: !isVisible, // isVisible false ise animasyonu hemen uygula, true ise animasyonu takip et
  });

  // inView değiştiğinde isVisible durumunu güncelle
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div ref={ref} className='section'>
      <div className='base-container w-container'>
        <animated.div
          style={animationProps}
          className='video-info-content-wrapper works-2-top'>
          <div className='home-video-player home-3'>
            <img
              src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384ca77a8f1b16a1c893213_Rectangle%2013.webp'
              loading='lazy'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, 100vw'
              srcSet='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384ca77a8f1b16a1c893213_Rectangle%2013-p-500.webp 500w, https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384ca77a8f1b16a1c893213_Rectangle%2013.webp 570w'
              alt=''
              className='video-player-image works-2'
            />
          </div>
          <div className='video-info-block-wrapper'>
            <h3>Our process</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </animated.div>
      </div>
    </div>
  );
}
