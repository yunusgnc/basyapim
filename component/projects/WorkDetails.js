import React from "react";
import { useSpring, animated } from "react-spring";

export default function WorkDetails() {
  const animationProps = useSpring({
    opacity: 1,
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    from: {
      opacity: 0,
      transform:
        "translate3d(0px, 100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    },
  });
  return (
    <animated.div style={animationProps}>
      <div className='section works-details'>
        <h1
          data-w-id='067cf3f8-7ff9-915b-67ea-949265c64dc7'
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
          className='center'>
          Rancho Presentation
        </h1>
        <div className='base-container w-container'>
          <p
            data-w-id='66d9d10b-a4d9-3b9a-defd-b7ab1a5ef528'
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className='mb-30 centered'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <div className='project-template-content-wrapper'>
            <div className='project-template-info'>
              <div
                className='project-template-info-wrap'
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}>
                <p className='paragraph-large'>Client</p>
                <p className='paragraph-gray'>Insight Studio</p>
              </div>
              <div
                className='project-template-info-wrap'
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}>
                <p className='paragraph-large'>Date</p>
                <p className='paragraph-gray'>November 11, 2022</p>
              </div>
              <div
                className='project-template-info-wrap'
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}>
                <p className='paragraph-large'>Services</p>
                <p className='paragraph-gray'>Design, Illustration, Art</p>
              </div>
              <div
                className='project-template-info-wrap'
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}>
                <p className='paragraph-large'>Share on</p>
                <div className='project-template-social-icons'>
                  <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    className='project-template-social-link'>
                    
                  </a>
                  <a
                    href='https://www.instagram.com/'
                    target='_blank'
                    className='project-template-social-link'>
                    
                  </a>
                  <a
                    href='https://twitter.com/'
                    target='_blank'
                    className='project-template-social-link last-child'>
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
