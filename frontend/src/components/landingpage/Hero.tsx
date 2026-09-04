import heroVideo from "../../assets/videos/hero.mp4";
import { scrollToWaitlist } from "../../utils/waitlist";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-5xl font-orbitron text-5xl font-semibold uppercase leading-tight text-white md:text-7xl ">
          Bounties for <br/> the Unbounded
        </h1>
        <p className="mt-8 max-w-2xl font-robotomono  text-lg text-gray-200 md:text-2xl">
          Unlock access to exclusive opportunities reserved for the best
        </p>

        <button
          onClick={scrollToWaitlist}
          className="mt-10 rounded-lg bg-white px-10 py-4 font-robotomono  text-black transition duration-300 hover:bg-violet-500 hover:text-white"
        >
          CLAIM YOUR SPOT BEFORE ITS GONE
        </button>
      </div>
    </section>
  );
}