import React, { useEffect, useState } from "react";
import DropdownComponent from "./DropdownMenu";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground("bg-dark"); // Scroll değeri 50 pikselden büyükse arka plan rengini değiştir
      } else {
        setNavbarBackground(""); // Scroll değeri 50 pikselden küçükse arka plan rengini sıfırla
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Component unmount olduğunda event listener'ı kaldır
    };
  }, []);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div
      data-animation='over-left'
      className={`navbar w-nav ${navbarBackground}`}>
      <div className='nav-container w-container'>
        <div className='nav-menu-wrapper'>
          <Link href='/' className='brand w-nav-brand'>
            <img
              src='https://basyapim.com.tr/wp-content/uploads/2023/08/basyapim.png'
              loading='lazy'
              alt=''
              height='Auto'
            />
          </Link>
          <DropdownComponent
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
          <div className='navbar-button-wrapper'>
            <Link
              href='/contact-us'
              aria-current='page'
              className='primary-button arrow-link-icon w-button w--current'>
              Let's Talk<span className='link-arrow-icon'> </span>
            </Link>
          </div>
          <div
            className='menu-button w-nav-button'
            style={{ WebkitUserSelect: "text" }}
            aria-label='menu'
            role='button'
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
  );
}
