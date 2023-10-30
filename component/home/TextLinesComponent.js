import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

export default function TextLinesComponent() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(100px)",
    config: { duration: 500 },
  });
  return (
    <animated.div className='section' ref={sectionRef}>
      <div className='base-container w-container'>
        <div className='text-lines-wrapper'>
          <div
            data-w-id='ad328879-4704-47e5-1199-4f1daa319f53'
            className='w-dyn-list'
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}>
            <div role='list' className='text-lines-wrapper w-dyn-items'>
              <div
                role='listitem'
                className='text-and-image-lines-wrapper w-dyn-item'>
                <a
                  href='/works-categories/visual'
                  className='category-ablsolute-link w-inline-block'>
                  <div className='extra-bold-text hover-animation'>Visual</div>
                </a>
                <div className='image-wrapped-down first-item'>
                  <a
                    href='/works-categories/visual'
                    className='absolte w-inline-block'
                  />
                  <div
                    style={{ paddingTop: "74.94252873563218%" }}
                    className='background-video-visual w-video w-embed'>
                    <iframe
                      className='embedly-embed'
                      src='//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgiphy.com%2Fembed%2FL95TJSriuxoCPCguRE%2Ftwitter%2Fiframe&display_name=Giphy&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FL95TJSriuxoCPCguRE%2Fgiphy.gif&image=https%3A%2F%2Fi.giphy.com%2Fmedia%2FL95TJSriuxoCPCguRE%2Fgiphy-downsized-large.gif&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=giphy'
                      width={435}
                      height={326}
                      scrolling='no'
                      title='Giphy embed'
                      allow='autoplay; fullscreen'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id='ad328879-4704-47e5-1199-4f1daa319f5e'
            className='w-dyn-list'
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}>
            <div role='list' className='text-lines-wrapper w-dyn-items'>
              <div
                role='listitem'
                className='text-and-image-lines-wrapper reversed w-dyn-item'>
                <div className='image-wrapped-down mid-item'>
                  <a
                    href='/works-categories/animation'
                    className='absolte w-inline-block'
                  />
                  <div
                    style={{ paddingTop: "56.32183908045977%" }}
                    className='background-video-animation w-video w-embed'>
                    <iframe
                      className='embedly-embed'
                      src='//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgiphy.com%2Fembed%2F44F9m2Uaonygg%2Ftwitter%2Fiframe&display_name=Giphy&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F44F9m2Uaonygg%2Fgiphy.gif&image=https%3A%2F%2Fi.giphy.com%2Fmedia%2F44F9m2Uaonygg%2Fgiphy.gif&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=giphy'
                      width={435}
                      height={245}
                      scrolling='no'
                      title='Giphy embed'
                      allow='autoplay; fullscreen'
                    />
                  </div>
                </div>
                <a
                  href='/works-categories/animation'
                  className='category-ablsolute-link right-align w-inline-block'>
                  <div className='extra-bold-text hover-animation'>
                    Animation
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            data-w-id='ad328879-4704-47e5-1199-4f1daa319f69'
            className='w-dyn-list'
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}>
            <div role='list' className='w-dyn-items'>
              <div
                role='listitem'
                className='text-and-image-lines-wrapper w-dyn-item'>
                <a
                  href='/works-categories/colors'
                  className='category-ablsolute-link w-inline-block'>
                  <div className='extra-bold-text hover-animation'>Colors</div>
                </a>
                <div className='image-wrapped-down last-item'>
                  <div
                    style={{ paddingTop: "56.09195402298851%" }}
                    className='background-video-colors w-video w-embed'>
                    <iframe
                      className='embedly-embed'
                      src='//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgiphy.com%2Fembed%2Fyq5UdrX0j9780maQuO%2Ftwitter%2Fiframe&display_name=Giphy&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fyq5UdrX0j9780maQuO%2Fgiphy.gif&image=https%3A%2F%2Fi.giphy.com%2Fmedia%2Fyq5UdrX0j9780maQuO%2Fgiphy-downsized-large.gif&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=giphy'
                      width={435}
                      height={244}
                      scrolling='no'
                      title='Giphy embed'
                      allow='autoplay; fullscreen'
                    />
                  </div>
                  <a
                    href='/works-categories/colors'
                    className='absolte w-inline-block'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
