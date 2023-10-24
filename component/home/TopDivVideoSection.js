import React from "react";
import { useSpring, animated } from "react-spring";

const BackgroundVideoComponent = () => {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(100px)" },
    config: { duration: 1000 }, // Animasyon süresi (ms cinsinden)
  });
  return (
    <div className='top-banner-section'>
      <div
        data-poster-url='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-poster-00001.jpg'
        data-video-urls='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-transcode.mp4,https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-transcode.webm'
        data-autoplay='true'
        data-loop='true'
        data-wf-ignore='true'
        className='background-video w-background-video w-background-video-atom'>
        <video
          id='a53a622b-a07a-bcfc-4306-a8be8595c0c6-video'
          autoPlay
          loop
          style={{
            backgroundImage:
              "url('https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-poster-00001.jpg')",
          }}
          muted
          playsInline
          data-wf-ignore='true'
          objectFit='cover'>
          <source
            src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-transcode.mp4'
            data-wf-ignore='true'
          />
          <source
            src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-transcode.webm'
            data-wf-ignore='true'
          />
        </video>
        <animated.h1 style={props} className='home-title'>
          We Make <br /> Digital Awesome
        </animated.h1>
      </div>
    </div>
  );
};

export default BackgroundVideoComponent;
