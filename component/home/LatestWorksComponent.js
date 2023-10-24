import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LatestWorksComponent = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    // Intersection Observer oluştur
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Bileşen görünür hale geldiğinde
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Bileşenin %20'si göründüğünde tetikle
      }
    );

    // Observer'a container öğesini ekle
    if (container) {
      observer.observe(container);
    }

    // Observer'ı temizleme (bileşen kaldırıldığında)
    return () => observer.disconnect();
  }, []); // Boş bağımlılık dizisi, sadece bir kere çalışmasını sağlar

  useEffect(() => {
    // Bileşen görünür hale geldiğinde animasyonu başlat
    if (isVisible) {
      const videos = containerRef.current.querySelectorAll(
        ".latest-works-video-item"
      );

      // Videoları başlangıçta gizle
      gsap.set(videos, { opacity: 0 });

      // Videoları sağa kaydır ve görünür hale getir
      gsap.to(videos, {
        opacity: 1, // Opaklık 1 yaparak görünür hale getir
        x: "0%", // Videoları sağa kaydır
        duration: 1, // Animasyon süresi (saniye cinsinden)
        stagger: 0.2, // Videolar arasındaki gecikme süresi (saniye cinsinden)
        ease: "power2.out", // Animasyon eğrisi
      });
    }
  }, [isVisible]);
  return (
    <div ref={containerRef} className='section'>
      <div className='base-container w-container'>
        <div
          data-w-id='703260ae-d437-f983-b8f5-a4923bf4c897'
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
          className='section-title-wrapper'>
          <h3>Latest work</h3>
          <a href='/works' className='link-with-icon'>
            View More <span className='link-arrow-icon' />
          </a>
        </div>
        <div
          data-w-id='2566ec45-27a8-ab3b-6f42-fb2a584b6685'
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
          className='home-projects-wrapper'>
          <div className='w-layout-grid e-1-background-videos home-1'>
            <div
              data-poster-url='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-poster-00001.jpg'
              data-video-urls='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-transcode.mp4,https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-transcode.webm'
              data-autoplay='true'
              data-loop='true'
              data-wf-ignore='true'
              id='w-node-ae20afb3-e4c1-57e3-e348-d425671db2d8-d17a2ae0'
              className='latest-works-video-item half w-background-video w-background-video-atom'>
              <video
                id='ae20afb3-e4c1-57e3-e348-d425671db2d8-video'
                autoPlay=''
                loop=''
                style={{
                  backgroundImage:
                    'url("https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-poster-00001.jpg")',
                }}
                muted=''
                playsInline=''
                data-wf-ignore='true'
                data-object-fit='cover'>
                <source
                  src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-transcode.mp4'
                  data-wf-ignore='true'
                />
                <source
                  src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-transcode.webm'
                  data-wf-ignore='true'
                />
              </video>
            </div>
            <div
              data-poster-url='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-poster-00001.jpg'
              data-video-urls='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-transcode.mp4,https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-transcode.webm'
              data-autoplay='true'
              data-loop='true'
              data-wf-ignore='true'
              className='latest-works-video-item half w-background-video w-background-video-atom'>
              <video
                id='b4467bea-af09-352e-c4df-033ecace4720-video'
                autoPlay=''
                loop=''
                style={{
                  backgroundImage:
                    'url("https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-poster-00001.jpg")',
                }}
                muted=''
                playsInline=''
                data-wf-ignore='true'
                data-object-fit='cover'>
                <source
                  src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-transcode.mp4'
                  data-wf-ignore='true'
                />
                <source
                  src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-transcode.webm'
                  data-wf-ignore='true'
                />
              </video>
            </div>
            <div
              data-poster-url='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-poster-00001.jpg'
              data-video-urls='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-transcode.mp4,https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-transcode.webm'
              data-autoplay='true'
              data-loop='true'
              data-wf-ignore='true'
              id='w-node-dd40a705-ecf2-aac4-13ce-00e9a118a940-d17a2ae0'
              className='latest-works-video-item w-background-video w-background-video-atom'>
              <video
                id='dd40a705-ecf2-aac4-13ce-00e9a118a940-video'
                autoPlay=''
                loop=''
                style={{
                  backgroundImage:
                    'url("https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-poster-00001.jpg")',
                }}
                muted=''
                playsInline=''
                data-wf-ignore='true'
                data-object-fit='cover'>
                <source
                  src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-transcode.mp4'
                  data-wf-ignore='true'
                />
                <source
                  src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-transcode.webm'
                  data-wf-ignore='true'
                />
              </video>
            </div>
            <div
              data-poster-url='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-poster-00001.jpg'
              data-video-urls='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-transcode.mp4,https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-transcode.webm'
              data-autoplay='true'
              data-loop='true'
              data-wf-ignore='true'
              id='w-node-_4620e830-82a3-04a7-e90f-0591290dafa5-d17a2ae0'
              className='latest-works-video-item w-background-video w-background-video-atom'>
              <video
                id='4620e830-82a3-04a7-e90f-0591290dafa5-video'
                autoPlay=''
                loop=''
                style={{
                  backgroundImage:
                    'url("https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-poster-00001.jpg")',
                }}
                muted=''
                playsInline=''
                data-wf-ignore='true'
                data-object-fit='cover'>
                <source
                  src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-transcode.mp4'
                  data-wf-ignore='true'
                />
                <source
                  src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-transcode.webm'
                  data-wf-ignore='true'
                />
              </video>
            </div>
          </div>
          <div className='home-1-latest-works-collection w-dyn-list'>
            <div
              role='list'
              className='home-1-latest-works-list home-1 w-dyn-items'>
              <div
                role='listitem'
                className='home-1-latest-works-item w-dyn-item'>
                <a
                  href='/works/martimaz-fachion'
                  className='home-projects-overlay w-inline-block'>
                  <img
                    src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e3d0bf2c48f6b206445e3_Group%204.svg'
                    loading='lazy'
                    alt=''
                    className='arrow-icon'
                  />
                </a>
                <div className='project-title-wrapper'>
                  <a
                    href='/works/martimaz-fachion'
                    className='projects-1-latest-works-wrap w-inline-block'>
                    <h4 className='projects-name'>Martinaz Fachion</h4>
                  </a>
                </div>
              </div>
              <div
                role='listitem'
                className='home-1-latest-works-item w-dyn-item'>
                <a
                  href='/works/church'
                  className='home-projects-overlay w-inline-block'>
                  <img
                    src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e3d0bf2c48f6b206445e3_Group%204.svg'
                    loading='lazy'
                    alt=''
                    className='arrow-icon'
                  />
                </a>
                <div className='project-title-wrapper'>
                  <a
                    href='/works/church'
                    className='projects-1-latest-works-wrap w-inline-block'>
                    <h4 className='projects-name'>Church</h4>
                  </a>
                </div>
              </div>
              <div
                role='listitem'
                className='home-1-latest-works-item w-dyn-item'>
                <a
                  href='/works/rancho-presentation'
                  className='home-projects-overlay w-inline-block'>
                  <img
                    src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e3d0bf2c48f6b206445e3_Group%204.svg'
                    loading='lazy'
                    alt=''
                    className='arrow-icon'
                  />
                </a>
                <div className='project-title-wrapper'>
                  <a
                    href='/works/rancho-presentation'
                    className='projects-1-latest-works-wrap w-inline-block'>
                    <h4 className='projects-name'>Rancho Presentation</h4>
                  </a>
                </div>
              </div>
              <div
                role='listitem'
                className='home-1-latest-works-item w-dyn-item'>
                <a
                  href='/works/saloni-production'
                  className='home-projects-overlay w-inline-block'>
                  <img
                    src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e3d0bf2c48f6b206445e3_Group%204.svg'
                    loading='lazy'
                    alt=''
                    className='arrow-icon'
                  />
                </a>
                <div className='project-title-wrapper'>
                  <a
                    href='/works/saloni-production'
                    className='projects-1-latest-works-wrap w-inline-block'>
                    <h4 className='projects-name'>Saloni Production</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWorksComponent;
