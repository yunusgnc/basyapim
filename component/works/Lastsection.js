import React, { useEffect } from "react";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Lastsection() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 50,
    config: config.wobbly,
    immediate: !isVisible,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div ref={ref}>
      <div className='section'>
        <div className='base-container w-container'>
          <div className='video-info-content-wrapper works-2'>
            <animated.div
              style={animationProps}
              className='video-info-block-wrapper'>
              <h3>Let’s discover how we workg</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </animated.div>
            <animated.div
              style={animationProps}
              className='home-video-player home-3'>
              <img
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208.webp'
                loading='lazy'
                sizes='(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, 100vw'
                srcSet='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208-p-500.webp 500w, https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208-p-800.webp 800w, https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208-p-1080.webp 1080w, https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208.webp 1170w'
                alt=''
                className='video-player-image works-2'
              />
              <a
                href='#'
                className='video-lightbox absolute w-inline-block w-lightbox'
                aria-label='open lightbox'
                aria-haspopup='dialog'>
                <div className='play-button-icon'></div>
                <div className='play-button' />
                <div className='play-button-hover' />
              </a>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}
