import { useEffect, useState } from "react";
import contentVideo from "../../assets/videos/content.mp4";

const description =
  "Bounty Hunter is a club where designers seize opportunities the right way. If you're ready to innovate, we look forward to seeing you thrive. Your best work happens when opportunity aligns. No task is too minor, and no challenge is insurmountable. You have the talent; now take that leap. Exciting possibilities await.";

export default function ParallaxContent() {
  const [scrollY, setScrollY] = useState(0);
  const speedFactor = 4;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Video Right Side */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute
          right-[-10vw]
          top-0
          w-[55%]
          object-cover
          opacity-80
        "
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <source src={contentVideo} type="video/mp4" />
      </video>


      {/* Text Container */}
      <div
        className="
          absolute
          inset-0
          z-10
          flex
          items-center
          px-8
          md:px-16
        "
      >
        <p
          className="
            max-w-5xl
            font-orbitron
            text-2xl
            leading-relaxed
            md:text-5xl
            md:leading-[1.5]
          "
        >
          {description.split("").map((char, index) => {

            const progress = Math.min(
              1,
              Math.max(
                0,
                (scrollY - index * speedFactor) / 100
              )
            );


            const colorValue = Math.round(
              100 + progress * 155
            );


            return (
              <span
                key={index}
                className="transition-colors duration-500"
                style={{
                  color: `rgb(${colorValue},${colorValue},${colorValue})`,
                }}
              >
                {char}
              </span>
            );

          })}
        </p>
      </div>

    </section>
  );
} 