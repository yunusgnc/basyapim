import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import VideoPlayer from "./VideoPlayer";
export default function OurClients() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0%)" : "translateY(100%)",
  });

  return (
    <div ref={ref} className='animated-container'>
      <animated.div style={springProps}>
        <div style={springProps} className='base-container w-container'>
          <div className='our-clients-names-wrapper left-align'>
            <h4>OUR CLIENTS</h4>
            <a
              href='https://webflow.com/templates/designers/128-digital'
              target='_blank'
              className='our-clients-link-block-wrapper w-inline-block'>
              <div className='extra-bold-text hover-animation'>Infenion</div>
              <img
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6380854aa9a3db68f98c37dc_Group%2018.svg'
                loading='lazy'
                alt=''
                className='our-clients-link-image'
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
            </a>
            <div className='divider' />
            <a
              href='https://webflow.com/templates/designers/128-digital'
              target='_blank'
              className='our-clients-link-block-wrapper w-inline-block'>
              <div className='extra-bold-text hover-animation'>BOLT</div>
              <img
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6380854aa9a3db68f98c37dc_Group%2018.svg'
                loading='lazy'
                alt=''
                className='our-clients-link-image'
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
            </a>
            <div className='divider' />
            <a
              href='https://webflow.com/templates/designers/128-digital'
              target='_blank'
              className='our-clients-link-block-wrapper w-inline-block'>
              <div className='extra-bold-text hover-animation'>ANIMA</div>
              <img
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6380854aa9a3db68f98c37dc_Group%2018.svg'
                loading='lazy'
                alt=''
                className='our-clients-link-image'
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
            </a>
            <div className='divider' />
            <a
              href='https://webflow.com/templates/designers/128-digital'
              target='_blank'
              className='our-clients-link-block-wrapper w-inline-block'>
              <div className='extra-bold-text hover-animation'>DRPEPPER</div>
              <img
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6380854aa9a3db68f98c37dc_Group%2018.svg'
                loading='lazy'
                alt=''
                className='our-clients-link-image'
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
            </a>
          </div>
        </div>
      </animated.div>
      <VideoPlayer />
    </div>
  );
}
