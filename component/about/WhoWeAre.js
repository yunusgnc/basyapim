import React, { useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import gsap from "gsap";

const WhoWeAre = ({ data, searchDataFunction }) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;

    // GSAP animasyonu: sayfa açıldıktan 1.5 saniye sonra başlar
    gsap.fromTo(
      banner,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out", // Yavaş başlama ve yavaş bitiş için ease fonksiyonu
        delay: 0.5, // 1.5 saniye gecikme
      }
    );
  }, []);

  const props = useSpring({
    opacity: 1,
    transform: "translateY(0%)",
    config: config.default,
  });

  return (
    <div ref={bannerRef}>
      <animated.div style={props} className='top-banner-section about-us-2'>
        <div className='about-us-video-wrapper'>
          <div className='background-video-about-us about-us-2 w-background-video w-background-video-atom'>
            <video
              autoPlay
              loop
              muted
              playsInline
              data-object-fit='cover'
              poster='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637dd98bfd49392ee57398a3_pexels-cottonbro-8679948-poster-00001.jpg'>
              <source
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637dd98bfd49392ee57398a3_pexels-cottonbro-8679948-transcode.mp4'
                type='video/mp4'
              />
              <source
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637dd98bfd49392ee57398a3_pexels-cottonbro-8679948-transcode.webm'
                type='video/webm'
              />
            </video>
            <h1>
              {data.map((item, index) => {
                return searchDataFunction(item, "aboutHeading");
              })}
              Who We Are
            </h1>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default WhoWeAre;
