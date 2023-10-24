import React from "react";

export default function index() {
  return (
    <div>
      <div className='utility-page-wrap'>
        <div className='about-us-video-wrapper'>
          <div
            data-poster-url='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-poster-00001.jpg'
            data-video-urls='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-transcode.mp4,https://assets-global.website-files.com/636e23ecf118df495e7a2aca/6384e8f2a2527588c07ba59e_video1337-transcode.webm'
            data-autoplay='true'
            data-loop='true'
            data-wf-ignore='true'
            className='background-video-404 w-background-video w-background-video-atom'>
            <video
              id='00d2918a-bf19-196a-25b6-b0ceea799276-video'
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
            <div className='_404-content-wrapper'>
              <h1 className='text-center-404'>Something’s not right.</h1>
              <p className='_404-paragraph'>
                We can’t find the page you're looking for.{" "}
              </p>
              <a href='/' className='primary-button'>
                Back to homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
