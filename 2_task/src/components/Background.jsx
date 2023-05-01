import React from "react";

const Background = () => {
  window.addEventListener('scroll', () => {
    document.querySelector('.background').style.top = `${window,scrollY * -0.5}px`;
  })

  return (
    <div className="background">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle_blur1"></div>
      <div className="circle circle_blur2"></div>
    </div>
  );
};

export default Background;
