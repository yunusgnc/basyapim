import React from "react";
import DOMPurify from "dompurify";

export default function SectionThree({ data, searchDataFunction }) {
  return (
    <div>
      <div className='section'>
        <div className='base-container w-container'>
          <div
            data-w-id='d75b2bc0-d5cb-c25b-15fa-e543a0f61ed4'
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className='blog-rich-text w-richtext'>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                {item.type === "desc" && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.content),
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
