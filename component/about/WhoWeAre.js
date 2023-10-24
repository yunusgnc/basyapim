import React from "react";

export default function WhoWeAre() {
  return (
    <div>
      <div className='top-banner-section about-us-2'>
        <div className='about-us-video-wrapper'>
          <div
            data-poster-url='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637dd98bfd49392ee57398a3_pexels-cottonbro-8679948-poster-00001.jpg'
            data-video-urls='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637dd98bfd49392ee57398a3_pexels-cottonbro-8679948-transcode.mp4,https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637dd98bfd49392ee57398a3_pexels-cottonbro-8679948-transcode.webm'
            data-autoplay='true'
            data-loop='true'
            data-wf-ignore='true'
            className='background-video-about-us about-us-2 w-background-video w-background-video-atom'>
            <video
              id='b41d7f53-f2a7-9619-124a-3d2f796f1190-video'
              autoPlay=''
              loop=''
              style={{
                backgroundImage:
                  'url("https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637dd98bfd49392ee57398a3_pexels-cottonbro-8679948-poster-00001.jpg")',
              }}
              muted=''
              playsInline=''
              data-wf-ignore='true'
              data-object-fit='cover'>
              <source
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637dd98bfd49392ee57398a3_pexels-cottonbro-8679948-transcode.mp4'
                data-wf-ignore='true'
              />
              <source
                src='https://assets-global.website-files.com/636e23ecf118df495e7a2aca/637dd98bfd49392ee57398a3_pexels-cottonbro-8679948-transcode.webm'
                data-wf-ignore='true'
              />
            </video>
            <h1>Who We Are</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
