import React from "react";
import { useSpring, animated } from "react-spring";

export default function BlogSlider() {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { duration: 500 },
  });

  const blogPosts = [
    {
      id: 1,
      category: "Art",
      title: "Fascinating Advertisements Creation",
      date: "May 25, 2022",
      image: {
        src: "https://assets-global.website-files.com/636e23edf118df7dcf7a2ad6/6391d5186402182187a81d6f_Rectangle%2012.png",
        alt: "",
      },
      content:
        "The team has been super welcoming and I couldn’t be happier with my decision to join.",
      link: "/blog-post",
    },
    {
      id: 2,
      category: "News",
      title: "Video Blogging",
      date: "May 25, 2022",
      image: {
        src: "https://assets-global.website-files.com/636e23edf118df7dcf7a2ad6/63982e316215ce38cf0dc11f_6384f5628f6ff67f3b33a32d_181818-poster-00001.jpg",
        alt: "",
      },
      content:
        "You might have heard about our office in LA (or not, which is okay too, but not really, so read about it).",
      link: "/blog-post",
    },
    {
      id: 3,
      category: "Uncategorized",
      title: "Video Editing",
      date: "April 1, 2022",
      image: {
        src: "https://assets-global.website-files.com/636e23edf118df7dcf7a2ad6/6391d505150ebd6ac24157e4_Rectangle%2011.png",
        alt: "",
      },
      content:
        "Dribbble is a community designers use to showcase work. We’ve already written about it here.",
      link: "/blog-post",
    },
    {
      id: 4,
      category: "Uncategorized",
      title: "Managing Office Culture",
      date: "April 1, 2022",
      image: {
        src: "https://assets-global.website-files.com/636e23edf118df7dcf7a2ad6/63982e4443c63e8cdbebf9f4_6384f40573208e1d382cfd18_9999-poster-00001.jpg",
        alt: "",
      },
      content:
        "But the team has been super welcoming and I couldn’t be happier with my decision to join.",
      link: "/blog-post",
    },
    {
      id: 5,
      category: "Uncategorized",
      title: "Time Management and Discipline",
      date: "April 1, 2022",
      image: {
        src: "https://assets-global.website-files.com/636e23edf118df7dcf7a2ad6/63982e53665829666dec0b23_Rectangle%2013.png",
        alt: "",
      },
      content:
        "The experience of being the first designer at Ueno LA comes with a ton of excitement.",
      link: "/blog-post",
    },
    {
      id: 6,
      category: "News",
      title: "Culture In The Digital Age",
      date: "May 25, 2022",
      image: {
        src: "https://assets-global.website-files.com/636e23edf118df7dcf7a2ad6/63982ea7613a27bc0b7b9474_%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-12-12%20122852.png",
        alt: "",
      },
      content:
        "You might have heard about our office in LA (or not, which is okay too, but not really, so read about it).",
      link: "/blog-post",
    },
  ];

  return (
    <animated.div style={props}>
      <div className='section blog-sidebar'>
        <div className='base-container w-container'>
          <div className='blog-sidebar-wrapper'>
            <div className='blog-sidebar-left-wrapper'>
              <div className='w-dyn-list'>
                <div role='list' className='blog-sidebar-left w-dyn-items'>
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      role='listitem'
                      className='blog-sidebar-item w-dyn-item'>
                      <article>
                        <a
                          href={post.link}
                          className='blog-sidebar-post-image-link w-inline-block'>
                          <img
                            src={post.image.src}
                            loading='lazy'
                            alt={post.image.alt}
                            sizes='(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 47vw, (max-width: 1279px) 28vw, 346.6015625px'
                            srcSet={`${post.image.src} 500w, ${post.image.src} 570w`}
                            className='blog-sidebar-post-image'
                          />
                        </a>
                        <div className='blog-sidebar-post-content'>
                          <a
                            href={`/posts-categories/${post.category}`}
                            className='blog-sidebar-post-category'>
                            {post.category}
                          </a>
                          <a
                            href={post.link}
                            className='link-block-blog-post w-inline-block'>
                            <h5 className='blog-post-title'>{post.title}</h5>
                          </a>
                          <p>{post.content}</p>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='blog-sidebar-right-wrapper'>
              <div className='blog-sidebar-right'>
                <div className='sidebar-search'>
                  <form
                    action='/search'
                    className='sidebar-search-wrapper w-form'>
                    <input
                      type='search'
                      className='sidebar-search-input w-input'
                      maxLength={256}
                      name='query'
                      placeholder='Enter search keyword'
                      id='search-3'
                      required=''
                    />
                    <input
                      type='submit'
                      defaultValue='Search'
                      className='primary-button w-button'
                    />
                  </form>
                </div>
                <div className='sidebar-recent-posts'>
                  <h4>Recent Posts</h4>
                  <div className='sidebar-recent-posts-wrapper w-dyn-list'>
                    <div role='list' className='collection-list-2 w-dyn-items'>
                      {blogPosts.map((post) => (
                        <div
                          key={post.id}
                          role='listitem'
                          className='sidebar-recent-post-item w-dyn-item'>
                          <article>
                            <a
                              href={post.link}
                              className='sidebar-recent-post w-inline-block'>
                              <img
                                src={post.image.src}
                                loading='lazy'
                                alt=''
                                sizes='(max-width: 1279px) 80px, (max-width: 1439px) 6vw, 80px'
                                srcSet={`${post.image.src} 500w, ${post.image.src} 622w`}
                                className='sidebar-recent-post-image'
                              />
                              <div className='div-block'>
                                <h6 className='blog-recent-post-title'>
                                  {post.title}
                                </h6>
                                <p className='blog-recent-post-date'>
                                  {post.date}
                                </p>
                              </div>
                            </a>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='sidebar-categories'>
                  <h4>Categories</h4>
                  <div className='sidebar-categories-wrapper w-dyn-list'>
                    <div
                      role='list'
                      className='sidebar-categories-list w-dyn-items'>
                      <div
                        role='listitem'
                        className='sidebar-category-item w-dyn-item'>
                        <a
                          href='/posts-categories/art'
                          className='sidebar-category'>
                          Art
                        </a>
                      </div>
                      <div
                        role='listitem'
                        className='sidebar-category-item w-dyn-item'>
                        <a
                          href='/posts-categories/news'
                          className='sidebar-category'>
                          News
                        </a>
                      </div>
                      <div
                        role='listitem'
                        className='sidebar-category-item w-dyn-item'>
                        <a
                          href='/posts-categories/uncategorized'
                          className='sidebar-category'>
                          Uncategorized
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
