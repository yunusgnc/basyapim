import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer kullanarak element görünür hale geldiğinde durumu güncelle
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    const element = document.querySelector(".footer");
    if (element) {
      observer.observe(element);
    }

    // Observer'ı temizleme
    return () => observer.disconnect();
  }, []);

  // Animasyonu oluşturma
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(20%)",
    config: { duration: 500 },
  });
  return (
    <animated.div className='footer' style={props}>
      <div className='base-container w-container'>
        <div className='footer-wrapper'>
          <p
            data-w-id='03bff50a-2db1-f0a9-6af8-98b078e8349a'
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}>
            Have an idea?
          </p>
          <div className='footer-wrapper-top'>
            <div
              data-w-id='daf981fd-9b17-a0fb-7466-2c35634f2c76'
              className='footer-brand-wrapper'
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}>
              <h2>Let’s work together</h2>
            </div>
            <a
              data-w-id='a36cf945-fcda-78b4-0abe-be153df65d23'
              href='/contact-us'
              className='primary-button w-button'
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}>
              Let's Talk
            </a>
          </div>
        </div>
        <div className='footer-rights-wrapper'>
          <div className='footer-nav-links-wrapper'>
            <a
              href='/'
              aria-current='page'
              className='nav-link footer-link-first w--current'>
              Anasayfa
            </a>
            <a href='/about' className='nav-link footer-link'>
              Hakkımızda
            </a>
            <a href='/works' className='nav-link footer-link'>
              Çalışmalarımız
            </a>
            <a href='/blog' className='nav-link footer-link'>
              Blog
            </a>
            <a href='/projects' className='nav-link footer-link'>
              Projelerimiz
            </a>
          </div>
          <div className='footer-copyright'>
            © BasYapim. All Rights Reserved 2023.
          </div>
        </div>
      </div>
    </animated.div>
  );
}
