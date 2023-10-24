import React from "react";
import { useSpring, animated } from "react-spring";

const logos = [
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
  "https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e699c7d1f02832b5bcf45_Fictional%20company%20logo.svg",
];

const LoopSection = () => {
  const props = useSpring({
    transform: "translate3d(-905.14px, 0px, 0px)",
    from: { transform: "translate3d(0px, 0px, 0px)" },
    loop: true,
    reset: true,
    config: { duration: 50000 },
  });

  return (
    <div className='loop-section'>
      <div className='base-container align-left w-container'>
        <div className='overflow-hidden-container'>
          <animated.div style={props} className='logo-loop-wrapper'>
            {logos.map((logo, index) => (
              <div className='logo-loop' key={index}>
                <animated.img
                  src={logo}
                  loading='lazy'
                  alt=''
                  className='loop-logo-item'
                  style={{ transform: props.transform }}
                />
              </div>
            ))}
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default LoopSection;
