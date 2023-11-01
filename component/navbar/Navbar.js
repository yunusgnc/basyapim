import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import Link from "next/link";
export default function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const [activeNavItem, setActiveNavItem] = useState(""); // Aktif navigasyon öğesi

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground("bg-dark");
      } else {
        setNavbarBackground("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (menu) {
      gsap.set(menu, { height: 0, opacity: 0, overflow: "hidden" });
    }
  }, []);

  useEffect(() => {
    // Sayfa yüklendiğinde veya yol değiştiğinde aktif navigasyon öğesini güncelle
    setActiveNavItem(router.pathname);
  }, [router.pathname]);

  const handleSetMobileMenuOpen = () => {
    const menu = menuRef.current;
    if (menu) {
      if (!isMobileMenuOpen) {
        gsap.to(menu, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            menu.style.overflow = "visible";
          },
        });
      } else {
        gsap.to(menu, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onStart: () => {
            menu.style.overflow = "hidden";
          },
        });
      }

      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  return (
    <div>
      <div
        data-animation='over-left'
        className={`navbar w-nav ${navbarBackground}`}
        data-easing2='ease'
        data-easing='ease'
        data-collapse='medium'
        role='banner'
        style={{
          willChange: "background",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}>
        <div className='nav-container w-container'>
          <div className='nav-menu-wrapper'>
            <Link
              href='/'
              aria-current='page'
              className={`brand w-nav-brand w--current ${
                isMobileMenuOpen ? "d-none-mobile" : ""
              }`}>
              <img
                src='https://basyapim.com.tr/wp-content/uploads/2023/08/basyapim.png'
                loading='lazy'
                alt=''
                height='Auto'
              />
            </Link>
            <nav
              role='navigation'
              ref={isMobile ? menuRef : null}
              className={`nav-menu w-nav-menu ${
                !isMobileMenuOpen && isMobile ? "d-none-mobile" : ""
              }`}>
              <div className='tablet-menu'>
                <a href='#' className='brand-tablet w-nav-brand'>
                  <img
                    src='https://basyapim.com.tr/wp-content/uploads/2023/08/basyapim.png'
                    loading='lazy'
                    alt=''
                    height={30}
                  />
                </a>
                <div
                  className='close-menu-button w-nav-button'
                  style={{ WebkitUserSelect: "text" }}
                  aria-label='menu'
                  role='button'
                  onClick={handleSetMobileMenuOpen}
                  tabIndex={0}
                  aria-controls='w-nav-overlay-0'
                  aria-haspopup='menu'
                  aria-expanded='false'>
                  <img
                    src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e23edf118df5e017a2b18_x_icon.png'
                    loading='lazy'
                    alt=''
                    className='nav-close-icon'
                  />
                </div>
              </div>
              <div
                className={`menu-wrap ${
                  !isMobileMenuOpen ? "d-none-mobile" : ""
                }`}>
                <div
                  data-hover='true'
                  data-delay={0}
                  data-w-id='ad0925c3-4db7-e584-bbd6-dfdc92cee91e'
                  className='nav-dropdown w-dropdown'
                  style={{ maxWidth: 1200 }}>
                  <div
                    className='nav-dropdown-toggle w-dropdown-toggle'
                    id='w-dropdown-toggle-0'
                    aria-controls='w-dropdown-list-0'
                    aria-haspopup='menu'
                    aria-expanded='false'
                    role='button'
                    onClick={handleSetMobileMenuOpen}
                    tabIndex={0}>
                    <Link href='/'>
                      <p className='nav-item-title'>Anasayfa</p>
                      {activeNavItem === "/" && (
                        <div
                          className='home-tab-underline'
                          style={{ width: "35%" }}
                        />
                      )}
                    </Link>
                  </div>
                </div>
                <div
                  data-hover='true'
                  data-delay={0}
                  data-w-id='ad0925c3-4db7-e584-bbd6-dfdc92cee963'
                  className='nav-dropdown w-dropdown'
                  style={{ maxWidth: 1200 }}>
                  <div
                    className='nav-dropdown-toggle w-dropdown-toggle'
                    id='w-dropdown-toggle-1'
                    aria-controls='w-dropdown-list-1'
                    aria-haspopup='menu'
                    aria-expanded='false'
                    role='button'
                    onClick={handleSetMobileMenuOpen}
                    tabIndex={0}>
                    <Link href='/about'>
                      <p className='nav-item-title'>Hakkımızda</p>
                      {activeNavItem === "/about" && (
                        <div
                          className='home-tab-underline'
                          style={{ width: "35%" }}
                        />
                      )}
                    </Link>
                  </div>
                </div>
                <div style={{ maxWidth: 1200 }}>
                  <div
                    className='nav-dropdown-toggle w-dropdown-toggle'
                    id='w-dropdown-toggle-2'
                    aria-controls='w-dropdown-list-2'
                    aria-haspopup='menu'
                    aria-expanded='false'
                    role='button'
                    onClick={handleSetMobileMenuOpen}
                    tabIndex={0}>
                    <Link href='/works'>
                      <div
                        className='nav-dropdown-icon w-icon-dropdown-toggle'
                        aria-hidden='true'
                      />
                      <p className='nav-item-title'>Çalışmalarımız</p>
                      {activeNavItem === "/works" && (
                        <div
                          className='home-tab-underline'
                          style={{ width: "35%" }}
                        />
                      )}
                    </Link>
                  </div>
                </div>
                <div
                  data-w-id='fe060b5d-81e8-a354-cdf4-64669c4ad870'
                  onClick={handleSetMobileMenuOpen}
                  className='nav-link-wrapper'>
                  <Link href='/blog' className='nav-link'>
                    Blog
                    {activeNavItem === "/blog" && (
                      <div
                        className='home-tab-underline'
                        style={{ width: "35%" }}
                      />
                    )}
                  </Link>
                </div>
                <div
                  data-w-id='fe060b5d-81e8-a354-cdf4-64669c4ad870'
                  onClick={handleSetMobileMenuOpen}
                  className='nav-link-wrapper'>
                  <Link href='/projects' className='nav-link'>
                    Projelerimiz
                    {activeNavItem === "/blog" && (
                      <div
                        className='home-tab-underline'
                        style={{ width: "35%" }}
                      />
                    )}
                  </Link>
                </div>
              </div>
            </nav>
            <div className='navbar-button-wrapper'>
              <a
                href='/contact-us'
                className='primary-button arrow-link-icon w-button'>
                İletişime Geçin<span className='link-arrow-icon'> </span>
              </a>
            </div>
            <div
              className='menu-button w-nav-button'
              style={{ WebkitUserSelect: "text" }}
              aria-label='menu'
              role='button'
              onClick={handleSetMobileMenuOpen}
              tabIndex={0}
              aria-controls='w-nav-overlay-0'
              aria-haspopup='menu'
              aria-expanded='false'>
              <img
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e23edf118df60ad7a2afe_Burger-button.png'
                loading='lazy'
                alt=''
                height={16}
                className='image-burger'
              />
            </div>
          </div>
        </div>
        <div className='w-nav-overlay' data-wf-ignore='' id='w-nav-overlay-0' />
      </div>
    </div>
  );
}
