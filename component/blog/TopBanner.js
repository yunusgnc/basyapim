import React, { useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import gsap from "gsap";

export default function TopBanner({ data, searchDataFunction }) {
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
        delay: 0.5,
      }
    );
  }, []);

  const props = useSpring({
    opacity: 1,
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    config: config.default,
  });

  return (
    <div>
      <div ref={bannerRef} className='top-banner-section blog-page'>
        <animated.div
          style={props}
          data-poster-url='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-poster-00001.jpg'
          data-video-urls='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-transcode.mp4,https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-transcode.webm'
          data-autoplay='true'
          data-loop='true'
          data-wf-ignore='true'
          className='background-video blog-page w-background-video w-background-video-atom'>
          <video
            id='c1dec52a-5a6c-6556-8dae-54b1c20cda97-video'
            autoPlay=''
            loop=''
            style={{
              backgroundImage:
                'url("https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-poster-00001.jpg")',
            }}
            muted=''
            playsInline=''
            data-wf-ignore='true'
            data-object-fit='cover'>
            <source
              src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-transcode.mp4'
              data-wf-ignore='true'
            />
            <source
              src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-transcode.webm'
              data-wf-ignore='true'
            />
          </video>
          {data.map((item, index) => {
            return searchDataFunction(item, "blogHeading");
          })}
          <h1 className='home-title'>Blog</h1>
        </animated.div>
      </div>
    </div>
  );
}
