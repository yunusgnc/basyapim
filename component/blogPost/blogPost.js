import React from "react";
import { useSpring, animated } from "react-spring";

export default function BlogPost() {
  const wrapperAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Animasyon süresini özelleştirebilirsin
  });

  const headingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 }, // Animasyon süresini özelleştirebilirsin
  });
  return (
    <animated.div style={wrapperAnimation}>
      <div className='section blog-post'>
        <div className='base-container w-container'>
          <div className='blog-template-wrapper'>
            <a
              href='/posts-categories/art'
              className='blog-sidebar-post-category top-banner-blog-page'>
              Art
            </a>
            <animated.h1 style={headingAnimation} className='blog-post-heading'>
              Fascinating Advertisements Creation
            </animated.h1>
            <p className='blog-template-date'>December 12, 2022</p>
            <img
              src='https://assets-global.website-files.com/636e23edf118df7dcf7a2ad6/6391d5186402182187a81d6f_Rectangle%2012.png'
              loading='lazy'
              alt=''
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 86vw, 920px'
              srcSet='https://assets-global.website-files.com/636e23edf118df7dcf7a2ad6/6391d5186402182187a81d6f_Rectangle%2012-p-500.png 500w, https://assets-global.website-files.com/636e23edf118df7dcf7a2ad6/6391d5186402182187a81d6f_Rectangle%2012.png 570w'
              className='blog-template-image'
            />
            <div className='rich-text-style w-richtext'>
              <p>
                You might have heard about our office in LA (or not, which is
                okay too, but not really, so read about it). On June 5th, we
                hosted our first Dribbble meetup, a gathering of sorts with
                other designers. Dribbble is a community designers use to
                showcase work. We’ve already written about it here. The
                experience of being the first designer at Ueno LA comes with a
                ton of excitement, but it also brings a level of anxiety that I
                hadn’t ever felt before. Transitioning from “I’m a huge fan”
                into “Oh shit, I’m a designer here” came at Hyperloop speed. But
                the team has been super welcoming and I couldn’t be happier with
                my decision to join.
              </p>
              <h4>It was great to to meet some new faces</h4>
              <p>
                You might have heard about our office in LA (or not, which is
                okay too, but not really, so read about it). On June 5th, we
                hosted our first Dribbble meetup, a gathering of sorts with
                other designers. Dribbble is a community designers use to
                showcase work. We’ve already written about it here. The
                experience of being the first designer at Ueno LA comes with a
                ton of excitement, but it also brings a level of anxiety that I
                hadn’t ever felt before. Transitioning from “I’m a huge fan”
                into “Oh shit, I’m a designer here” came at Hyperloop speed. But
                the team has been super welcoming and I couldn’t be happier with
                my decision to join.
              </p>
              <blockquote>
                <strong>
                  This is an excellent company! I personally enjoyed the energy
                  and the professional support the whole team gave to us into
                  creating website.
                </strong>
              </blockquote>
              <p>
                So, back to the Dribbble meetup. We needed a way to let everyone
                know that we were here, so we had this little shindig. I
                wrangled up a couple of our super dope designers from the SF
                office, Jenny Johannesson &amp;amp; Robbin Cenijn. (They
                actually happened to be in town for the Awwwards conference, so
                I technically just borrowed them, no wrangling involved.) We
                ordered some pizza, picked up some cheese, and made sure the
                beer (and La Croix) was flowing.
              </p>
            </div>
            <div className='blog-template-pagination'>
              <div className='blog-template-prev-button'>
                <a
                  data-w-id='1a5a4fe8-ed27-bed1-98a4-1e6ed6407324'
                  href='#'
                  className='blog-template-pagination-link w-inline-block'>
                  <p
                    style={{
                      color: "rgb(175, 175, 175)",
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className='prev-post-arrow'>
                    
                  </p>
                  <div>
                    <p>Previous post</p>
                    <h6
                      style={{ color: "rgb(255,255,255)" }}
                      className='blog-details-link-title w-dyn-bind-empty'
                    />
                  </div>
                </a>
              </div>
              <img
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/636e23edf118df797a7a2afd_Blog-template-pagination-icon.png'
                loading='lazy'
                alt=''
                className='blog-template-pagination-icon'
              />
              <div className='blog-template-next-button'>
                <a
                  data-w-id='a0533b00-24ef-faa4-daa0-c501b1c13abd'
                  href='#'
                  className='blog-template-pagination-link w-inline-block'>
                  <div className='blog-template-next'>
                    <p>Next post</p>
                    <h6
                      style={{ color: "rgb(255,255,255)" }}
                      className='blog-details-link-title w-dyn-bind-empty'
                    />
                  </div>
                  <p
                    style={{
                      color: "rgb(175, 175, 175)",
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className='next-post-arrow'>
                    
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
