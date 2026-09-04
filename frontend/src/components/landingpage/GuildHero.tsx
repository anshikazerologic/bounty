import { useEffect, useState } from "react";
import guildVideo from "../../assets/videos/file2.mp4";
import { scrollToWaitlist } from "../../utils/waitlist";

export default function GuildHero() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset((window.scrollY - 1700) * 0.6);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section
      className="
        relative
        h-screen
        w-full
        overflow-hidden
      "
    >

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        style={{
          transform:`translateY(${offset}px)`
        }}
      >
        <source src={guildVideo} type="video/mp4"/>
      </video>


      {/* Overlay Content */}
      <div
        className="
          relative
          z-10
          flex
          h-screen
          flex-col
          items-center
          justify-center
          bg-black/40
          text-center
          text-white
        "
      >

        <h1
          className="
            w-[90%]
            text-6xl
            font-orbitron
            leading-tight
          "
        >
          MAKE IT TO THE GUILD
        </h1>


        <p
          className="
            mt-4
            w-full
            font-orbitron
            text-2xl
          "
        >
          SEE THE HYPE FOR YOURSELF
        </p>


        <button
          onClick={scrollToWaitlist}
          className="mt-8 rounded-lg bg-white px-10 py-4 font-robotomono  text-black transition duration-300 hover:bg-violet-500 hover:text-white"
        >
          JOIN WAITLIST
        </button>


      </div>

    </section>
  );
}