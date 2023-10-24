import React from "react";
import Link from "next/link";

export default function DropdownComponent({
  handleMouseEnter,
  handleMouseLeave,
}) {
  return (
    <nav role='navigation' className='nav-menu w-nav-menu'>
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
      <div className='menu-wrap'>
        <div
          data-hover='true'
          data-delay={0}
          data-w-id='ad0925c3-4db7-e584-bbd6-dfdc92cee91e'
          className='nav-dropdown w-dropdown'>
          <div
            className='nav-dropdown-toggle w-dropdown-toggle'
            id='w-dropdown-toggle-0'
            aria-controls='w-dropdown-list-0'
            role='button'
            tabIndex={0}>
            <div
              className='nav-dropdown-icon w-icon-dropdown-toggle'
              aria-hidden='true'
            />
            <Link href='/'>
              <p className='nav-item-title'>Home</p>
            </Link>
            <div className='home-tab-underline' style={{ width: "35%" }} />
          </div>
        </div>
        <div
          data-hover='true'
          data-delay={0}
          data-w-id='ad0925c3-4db7-e584-bbd6-dfdc92cee963'
          className='nav-dropdown w-dropdown'>
          <div
            className='nav-dropdown-toggle w-dropdown-toggle'
            id='w-dropdown-toggle-1'
            aria-controls='w-dropdown-list-1'
            role='button'
            tabIndex={0}>
            <div
              className='nav-dropdown-icon w-icon-dropdown-toggle'
              aria-hidden='true'
            />
            <Link href='/about'>
              <p className='nav-item-title'>About</p>
            </Link>
          </div>
        </div>
        <div
          data-hover='true'
          data-delay={0}
          data-w-id='a6fdb6f4-b917-73e8-43aa-9aca0856e073'
          className='nav-dropdown w-dropdown'>
          <div
            className='nav-dropdown-toggle w-dropdown-toggle'
            id='w-dropdown-toggle-2'
            aria-controls='w-dropdown-list-2'
            role='button'
            tabIndex={0}>
            <div
              className='nav-dropdown-icon w-icon-dropdown-toggle'
              aria-hidden='true'
            />
            <Link href='/works'>
              <p className='nav-item-title'>Works</p>
            </Link>
          </div>
        </div>
        <div
          data-w-id='fe060b5d-81e8-a354-cdf4-64669c4ad870'
          className='nav-link-wrapper'>
          <Link href='/blog' className='nav-link'>
            Blog
          </Link>
        </div>
        <div
          data-hover='true'
          data-delay={0}
          data-w-id='ad0925c3-4db7-e584-bbd6-dfdc92cee93f'
          className='nav-dropdown w-dropdown'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div
            className='nav-dropdown-toggle w-dropdown-toggle'
            id='w-dropdown-toggle-3'
            aria-controls='w-dropdown-list-3'
            role='button'
            tabIndex={0}>
            <div
              className='nav-dropdown-icon w-icon-dropdown-toggle'
              aria-hidden='true'
            />
            <p className='nav-item-title'>Pages</p>
          </div>
          <nav
            className='nav-dropdown-list pages w-dropdown-list'
            id='w-dropdown-list-3'
            aria-labelledby='w-dropdown-toggle-3'>
            <div className='nav-dropdown-column'>
              <div className='nav-dropdown-link-wrapper'>
                <Link
                  href='/contact-us'
                  aria-current='page'
                  className='nav-dropdown-link w-dropdown-link w--current'
                  tabIndex={0}>
                  <span className='nav-dropdown-link-line'> </span>
                  Contact Us
                </Link>
                <Link
                  href='/401'
                  className='nav-dropdown-link w-dropdown-link'
                  tabIndex={0}>
                  <span className='nav-dropdown-link-line'> </span>
                  Password Page
                </Link>
                <Link
                  href='/404'
                  className='nav-dropdown-link w-dropdown-link'
                  tabIndex={0}>
                  <span className='nav-dropdown-link-line'> </span>404
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
