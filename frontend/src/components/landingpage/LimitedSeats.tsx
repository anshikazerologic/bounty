import ticket from "../../assets/images/ticket.png";

const LimitedSeats = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Got someone
          <br />
          on the inside?
        </h2>

        {/* Ribbon */}
        <div className="pointer-events-none absolute left-1/2 top-72 w-[160%] -translate-x-1/2 -rotate-6 overflow-hidden bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400">
          <div className="animate-marquee whitespace-nowrap py-3">
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className="mx-6 text-lg font-medium uppercase tracking-[4px] text-white"
              >
                ● LIMITED SEATS ONLY
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-44 grid items-center gap-12 lg:grid-cols-2">

          {/* Left Text */}
          <div className="max-w-md">
            <p className="font-mono text-xl leading-10 text-gray-300">
              Our current batch is <em>full.</em>
              <br />
              If you have a friend already in, ask them to send you an invite.
              We trust our community to only bring in the most exciting creators
              onboard who truly deserve the bounties.
            </p>
          </div>

          {/* Right Ticket */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Glow */}
            <div className="absolute h-60 w-[420px] rounded-full bg-pink-500/20 blur-3xl" />

            <img
              src={ticket}
              alt="Membership Ticket"
              className="relative z-10 w-[420px] rotate-[-12deg] object-contain md:w-[520px]"
            />
          </div>

        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LimitedSeats;