
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

import rizzcardbg from "../../assets/images/rizzcardbg.png";
import rizzcard1 from "../../assets/images/rizzcard1.png";
import rizzcard2 from "../../assets/images/rizzcard2.png";
import rizzcard3 from "../../assets/images/rizzcard3.png";

const cards = [
  {
    name: "Neon Shredder",
    imageUrl: rizzcard1,
    quote: "Imperfection is perfection",
  },
  {
    name: "Code Slasher",
    imageUrl: rizzcard2,
    quote: "Design flows but I make it glow",
  },
  {
    name: "Pixel Nomad",
    imageUrl: rizzcard3,
    quote: "Reality? I design my own",
  },
];

function CornerStar({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute z-30 ${className}`}
      animate={{
        // rotate: [0, 60],
        scaleX: [1, 0, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        transformOrigin: "center center",
      }}
    >
      <Sparkle
        size={26}
        color="white"
        strokeWidth={1.5}
        fill="none"
        opacity={0.7}
      />
    </motion.div>
  );
}

export default function RizzSection() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-16 text-center text-5xl font-semibold text-white font-orbitron">
          For those who got that design rizz
        </h1>

        <div className="grid grid-cols-1 place-items-center gap-12 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <motion.div
              key={card.name}
              whileHover={{
                rotateX: -6,
                rotateY: 8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="relative h-[530px] w-[340px]"
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              {/* Background */}
              <img
                src={rizzcardbg}
                alt=""
                className="absolute inset-0 h-full w-full object-contain"
              />

              {/* Corner Sparkles */}
              <CornerStar className="left-5 top-5" />
              <CornerStar className="right-5 top-5" />
              <CornerStar className="bottom-5 left-5" />
              <CornerStar className="bottom-5 right-5" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center">
                <h2 className="mt-15 text-[28px] font-bold text-white font-orbitron">
                  {card.name}
                </h2>

                <div className="mt-3 h-[295px] w-[215px] overflow-hidden rounded-t-[110px]">
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-5 w-[80%] text-center text-xs text-white font-mono">
                  "{card.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

