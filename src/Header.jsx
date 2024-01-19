import React from "react";
import Container from "react-bootstrap/Container";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function Header() {
  return (
    <>
      <ParallaxBanner className="w-100 full-height section-header">
        <ParallaxBannerLayer speed={-30}>
          <div className="w-100 full-height header-bg-5"></div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-20}>
          <div className="w-100 full-height header-bg-4"></div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-10}>
          <div className="w-100 full-height header-bg-3"></div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={0}>
          <div className="w-100 full-height header-bg-2"></div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-35}>
          <img src="../src/assets/img/logo.png" className="header-logo" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={15}>
          <div className="w-100 full-height header-bg-1"></div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
}

export default Header;
