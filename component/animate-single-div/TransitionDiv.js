import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const FullScreenTransition = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 900); // 3 saniye sonra animasyonu kapat

    return () => clearTimeout(timer);
  }, []);

  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0%)" : "translateY(-100%)",
    config: { duration: 900 },
  });

  return (
    <animated.div
      className='full-screen-transition'
      style={{
        ...props,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div>
        <h1 style={{ color: "white" }}>Hoş Geldiniz!</h1>
        <p style={{ color: "white" }}>Sayfa yükleniyor...</p>
      </div>
    </animated.div>
  );
};

export default FullScreenTransition;
