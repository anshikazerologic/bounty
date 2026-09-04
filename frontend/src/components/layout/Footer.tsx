import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import footerWallpaper from "../../assets/images/FooterWallpapers.png";
import lineImage from "../../assets/images/Line.png";
import { scrollToWaitlist } from "../../utils/waitlist";

const FooterLine = () => {
  const lineRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!lineRef.current) return;

      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      const rotateX = y * -10;
      const rotateY = x * 16;

      lineRef.current.style.transform = `
        perspective(810px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.06)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
      ref={lineRef}
      src={lineImage}
      alt=""
      aria-hidden="true"
      className="
        absolute
        left-1/2
        top-1/2
        h-full
        w-full
        min-w-[1200px]
        max-w-none
        -translate-x-1/2
        -translate-y-1/2
        object-cover
        opacity-90
        will-change-transform
        transition-transform
        duration-[400ms]
        ease-out
      "
    />
  );
};

const Footer = () => {
  return (
    <footer
      className="
        footer-bg
        relative
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Gradient wallpaper */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerWallpaper}
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* Animated Line.png */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        <FooterLine />
      </div>

      {/* Slight dark overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          bg-black/10
        "
      />

      {/* =====================================================
          FOOTER CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-30
          mx-auto
          flex
          max-w-[1440px]
          flex-col
          px-6
          py-12
          sm:px-10
          sm:py-16
          lg:px-16
          lg:py-20
        "
      >
        {/* =================================================
            TOP FOOTER
        ================================================== */}

        <div
          className="
            flex
            flex-col
            gap-14
            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >
          {/* =================================================
              LOGO SECTION
          ================================================== */}

          <div
            className="
              flex
              flex-col
              items-center
              gap-4
              lg:items-start
            "
          >
            <Link
              to="/"
              aria-label="Bounty Hunter home"
              className="block"
            >
              <img
                src={logo}
                alt="Bounty Hunters"
                className="
                  h-24
                  w-auto
                  sm:h-28
                
                "
              />
            </Link>

            <h2
              className="
                font-orbitron
                text-center
                text-3xl
                font-black
                tracking-[0.18em]
                lg:text-left
                text-4xl
              "
            >
              BOUNTY HUNTER
            </h2>
          </div>

          <nav
            aria-label="Footer navigation"
            className="
              flex
              flex-col
              items-center
              font-orbitron
              gap-4
              text-sm
              sm:text-base
              lg:items-start
            "
          >
            
            <a
              role="button"
              onClick={scrollToWaitlist}
              className="
                cursor-pointer
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              Join Waitlist
            </a>

           
            <a
              href="https://zerologic.io/"
              target="_blank"
              rel="noreferrer noopener"
              className="
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              Zerologic
            </a>

            {/* Contact */}
            <a
              className="
                underline
                underline-offset-4
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              Contact Us
            </a>
          </nav>

          <nav
            aria-label="Social media"
            className="
              flex
              flex-col
              items-center
              font-orbitron
              gap-4
              text-sm
              sm:text-base
              lg:items-start
            "
          >
            <a
              href=""
              target="_blank"
              rel="noreferrer noopener"
              className="
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              Instagram
            </a>

            <a
              href=""
              target="_blank"
              rel="noreferrer noopener"
              className="
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              Linkedin
            </a>

            <a
              href=""
              target="_blank"
              rel="noreferrer noopener"
              className="
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              X (Twitter)
            </a>

            <a
              href=""
              target="_blank"
              rel="noreferrer noopener"
              className="
                transition-opacity
                duration-200
                hover:opacity-60
              "
            >
              Youtube
            </a>
          </nav>

        
         
        </div>

       
        <div className="pt-16">
          {/* Divider */}
          <div className="h-px w-full bg-white/40" />

          <div
            className="
              flex
              flex-col
              gap-6
              pt-6
              text-xs
              font-orbitron
              sm:text-sm
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* Copyright */}
            <p
              className="
                text-center
                text-white/80
                md:text-left
              "
            >
              Copyright © Zerologic
            </p>

            {/* Legal */}
            <nav
              aria-label="Legal"
              className="
                flex
                flex-wrap
                justify-center
                gap-6
                md:justify-end
              "
            >
              <Link
                to="/privacy-policy"
                className="
                  text-white/80
                  transition-opacity
                  duration-200
                  hover:text-white
                  hover:opacity-60
                "
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-of-use"
                className="
                  text-white/80
                  transition-opacity
                  duration-200
                  hover:text-white
                  hover:opacity-60
                "
              >
                Terms Of Use
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;