import React from "react";

export default function TopBanner() {
  return (
    <div>
      <div className='top-banner-section blog-page'>
        <div
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
          <h1 className='home-title'>Blog</h1>
        </div>
      </div>
    </div>
  );
}
