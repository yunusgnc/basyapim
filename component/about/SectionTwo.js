import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function SectionTwo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50px)",
    // Yavaş animasyon için config.slow kullanılıyor
    config: config.slow,
  });
  return (
    <div>
      <div className='section'>
        <div className='base-container w-container'>
          <div ref={ref} className='w-layout-grid three-columns-grid'>
            <animated.h3
              style={props}
              id='w-node-_1f91660b-80ea-6a6e-868b-3718c1de8669-ed7a2ae6'>
              All work we do has to be relevant, authentic, and based on a
              strong idea.
            </animated.h3>
            <p id='w-node-_1f91660b-80ea-6a6e-868b-3718c1de866e-ed7a2ae6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. rutrum lorem imperdiet.
            </p>
            <div
              id='w-node-f5244ba1-8aa0-622e-1717-4303447ae26d-ed7a2ae6'
              className='about-us-page-autoplay-video'>
              <div
                data-poster-url='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/63808e694d9c4e4a4adc1f58_pexels-koolshooters-7322712-poster-00001.jpg'
                data-video-urls='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/63808e694d9c4e4a4adc1f58_pexels-koolshooters-7322712-transcode.mp4,https://assets-global.website-files.com/636e23ecf118df495e7a2aca/63808e694d9c4e4a4adc1f58_pexels-koolshooters-7322712-transcode.webm'
                data-autoplay='true'
                data-loop='true'
                data-wf-ignore='true'
                className='background-video-colors w-background-video w-background-video-atom'>
                <animated.video
                  style={props}
                  id='f5244ba1-8aa0-622e-1717-4303447ae26e-video'
                  autoPlay=''
                  loop=''
                  muted=''
                  playsInline=''
                  data-wf-ignore='true'
                  data-object-fit='cover'>
                  <source
                    src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/63808e694d9c4e4a4adc1f58_pexels-koolshooters-7322712-transcode.mp4'
                    data-wf-ignore='true'
                  />
                  <source
                    src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/63808e694d9c4e4a4adc1f58_pexels-koolshooters-7322712-transcode.webm'
                    data-wf-ignore='true'
                  />
                </animated.video>
              </div>
            </div>
            <animated.div
              style={props}
              id='w-node-_1f91660b-80ea-6a6e-868b-3718c1de8673-ed7a2ae6'
              className='button-wrapper'>
              <a href='/work' className='primary-button w-button'>
                Portfolio
              </a>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}
