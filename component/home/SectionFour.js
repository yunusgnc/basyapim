import React, { useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";

const BackgroundVideoComponent = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    reset: true,
    config: config.molasses,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 } // Elementin %20'si görünür hale geldiğinde animasyonu başlat
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className='section'>
      <animated.div
        style={{
          ...props,
          backgroundImage:
            "url('https://assets-global.website-files.com/636e23ecf118df495e7a2aca/638206dcf12be104fe7b9b04_pexels-nadezhda-moryak-9805957-poster-00001.jpg')",
          backgroundSize: "cover",
          position: "relative",
        }}
        className='background-video-full-width w-background-video w-background-video-atom'>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <source
            src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/638206dcf12be104fe7b9b04_pexels-nadezhda-moryak-9805957-transcode.mp4'
            type='video/mp4'
          />
          <source
            src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/638206dcf12be104fe7b9b04_pexels-nadezhda-moryak-9805957-transcode.webm'
            type='video/webm'
          />
        </video>
      </animated.div>
    </div>
  );
};

export default BackgroundVideoComponent;
