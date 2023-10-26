import React from "react";

const VideoBackground = () => {
  return (
    <div>
      <div className='top-banner-section about-us-2'>
        <div
          data-w-id='0e7163e5-67ee-61ea-3155-5f380cedb4c3'
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
          className='about-us-video-wrapper'>
          <div
            data-poster-url='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/638206dcf12be104fe7b9b04_pexels-nadezhda-moryak-9805957-poster-00001.jpg'
            data-video-urls='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/638206dcf12be104fe7b9b04_pexels-nadezhda-moryak-9805957-transcode.mp4,https://assets-global.website-files.com/636e23ecf118df495e7a2aca/638206dcf12be104fe7b9b04_pexels-nadezhda-moryak-9805957-transcode.webm'
            data-autoplay='true'
            data-loop='true'
            data-wf-ignore='true'
            className='background-video-about-us about-us-2 w-background-video w-background-video-atom'>
            <video
              id='0e7163e5-67ee-61ea-3155-5f380cedb4c4-video'
              autoPlay=''
              loop=''
              style={{
                backgroundImage:
                  'url("https://assets-global.website-files.com/636e23ecf118df495e7a2aca/638206dcf12be104fe7b9b04_pexels-nadezhda-moryak-9805957-poster-00001.jpg")',
              }}
              muted=''
              playsInline=''
              data-wf-ignore='true'
              data-object-fit='cover'>
              <source
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/638206dcf12be104fe7b9b04_pexels-nadezhda-moryak-9805957-transcode.mp4'
                data-wf-ignore='true'
              />
              <source
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/638206dcf12be104fe7b9b04_pexels-nadezhda-moryak-9805957-transcode.webm'
                data-wf-ignore='true'
              />
            </video>
            <h1>Work</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
