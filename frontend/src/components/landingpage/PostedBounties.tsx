import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

import gridBg from "../../assets/images/grid3.png";

import c1 from "../../assets/images/c1.svg";
import c2 from "../../assets/images/c2.svg";
import c3 from "../../assets/images/c3.svg";
import c4 from "../../assets/images/c4.svg";
import c7 from "../../assets/images/c7.svg";

import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";

/* =========================================================
   SECOND SECTION CARDS
========================================================= */

const cards = [
  {
    title: "Exclusive Access to Real Projects—No busywork here.",
    image: card1,
  },
  {
    title: "Earn Bounty rewards and cash them out anytime.",
    image: card2,
  },
  {
    title: "Join the network of Designers Who Just Get It.",
    image: card3,
  },
];

/* =========================================================
   QUEST BADGE
========================================================= */

const QuestBadge = () => {
  return (
    <div
      className="
        pointer-events-none
        absolute
        right-[-35px]
        top-[-35px]
        z-[50]
        flex
        h-[70px]
        w-[70px]
        items-center
        justify-center
        sm:right-[-42px]
        sm:top-[-42px]
        sm:h-[84px]
        sm:w-[84px]
      "
    >
      {/* =====================================================
          ROTATING OUTER RING

          Framer Motion is used directly here instead of CSS.
          This guarantees the SVG rotates.
      ===================================================== */}

      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 81.56 81.588"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <g>
            {/* Outer faded ring */}

            <path
              className="fill-quest-cyan"
              d="M81.56 40.808c0 22.482-18.298 40.78-40.78 40.78S0 63.29 0 40.808C0 18.298 18.298 0 40.78 0s40.78 18.298 40.78 40.808m-1.171 0C80.389 18.968 62.621 1.2 40.78 1.2 18.94 1.2 1.172 18.968 1.172 40.81c0 21.812 17.768 39.58 39.608 39.58s39.61-17.769 39.61-39.581"
              clipRule="evenodd"
              fillRule="evenodd"
              opacity=".4"
            />

            {/* Main ring */}

            <path
              className="fill-quest-blue"
              d="M79.58 40.808c0 21.422-17.377 38.8-38.8 38.8s-38.8-17.378-38.8-38.8c0-21.45 17.378-38.828 38.8-38.828 21.423 0 38.8 17.378 38.8 38.828m-4.965 0c0-18.689-15.146-33.835-33.835-33.835-18.688 0-33.834 15.146-33.834 33.835 0 18.66 15.146 33.807 33.834 33.807s33.835-15.146 33.835-33.807"
              clipRule="evenodd"
              fillRule="evenodd"
            />

            {/* Cyan transparent inner circle */}

            <path
              fillOpacity=".29"
              className="fill-quest-cyan"
              d="M71.715 40.638c0 17.163-13.913 31.076-31.076 31.076S9.563 57.801 9.563 40.638 23.476 9.562 40.639 9.562s31.076 13.913 31.076 31.076"
            />

            {/* Cyan loading section */}

            <path
              className="fill-quest-cyan"
              d="M42.12 4.686c0 1.283.976 2.343 2.259 2.483 17.015 1.785 30.264 16.178 30.236 33.695-.028 18.8-15.648 34.086-34.448 33.751a33.62 33.62 0 0 1-21.757-8.452c-.977-.836-2.51-.78-3.403.112-1.032 1.032-.949 2.706.14 3.654 7.586 6.695 17.823 10.46 28.925 9.54 18.856-1.562 33.918-16.68 35.397-35.537 1.673-21.45-14.087-39.58-34.588-41.728-1.479-.168-2.762 1.004-2.762 2.482"
            />

            {/* Small dot */}

            <path
              className="fill-quest-cyan"
              d="M12.804 60.5c0 1.395-1.116 2.511-2.483 2.511a2.5 2.5 0 0 1-2.51-2.51 2.494 2.494 0 0 1 2.51-2.483 2.49 2.49 0 0 1 2.483 2.483"
            />
          </g>
        </svg>
      </motion.div>

      {/* =====================================================
          CENTER SUITCASE ICON
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-[34px]
          w-[34px]
          items-center
          justify-center
          rounded-full
          bg-black/90
          shadow-[0_0_12px_var(--color-quest-cyan-soft)]

          sm:h-[40px]
          sm:w-[40px]
        "
      >
        <svg
          viewBox="44 20 112 160"
          className="
            h-[23px]
            w-[23px]

            sm:h-[28px]
            sm:w-[28px]
          "
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <g>
            <path
              className="fill-white"
              d="M124 68.002v16H75.999V36h-16v48.002H44V180h112V84.002h-16V36h-16.001v32.001Zm-16 79.999v16.001H92v-32.001h16z"
            />

            <path
              className="fill-white"
              d="M108 20H75.998v16H124V20z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

/* =========================================================
   QUEST META
========================================================= */

const QuestMeta = ({
  duration,
  reward,
}: {
  duration: string;
  reward: string;
}) => {
  return (
    <div
      className="
        mt-4
        flex
        flex-col
        gap-1.5
        font-robotomono
        text-[13px]
        leading-[19px]
        tracking-normal
        text-white

        sm:mt-5
        sm:gap-2
        sm:text-[15px]
        sm:leading-[23px]
      "
    >
      <span>
        Duration - {duration}
      </span>

      <span className="font-bold text-quest-cyan animate-blink">
        Rewards - ₹{reward}
      </span>
    </div>
  );
};

/* =========================================================
   NORMAL QUEST CARD
========================================================= */

const QuestCard = ({
  image,
  children,
  badge = false,
  className = "",
}: {
  image: string;
  children?: ReactNode;
  badge?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`
        relative
      
        max-w-[300px]

        sm:max-w-[320px]

        lg:max-w-[340px]

        ${className}
      `}
    >
      <img
        src={image}
        alt=""
        className="block h-auto w-full"
      />

      {badge && <QuestBadge />}

      {children}
    </div>
  );
};

/* =========================================================
   SLOW PARALLAX CARD

   Only Card 4 uses this.
========================================================= */

const SlowQuestCard = ({
  image,
  children,
  badge = false,
  className = "",
}: {
  image: string;
  children?: ReactNode;
  badge?: boolean;
  className?: string;
}) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: [
      "start end",
      "end start",
    ],
  });

  /*
    Small movement range = slow parallax.

    Card moves only around 35px while scrolling.
  */

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [25, 0, -25]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      className={`
        relative
       
        max-w-[300px]

        sm:max-w-[320px]

        lg:max-w-[340px]

        ${className}
      `}
    >
      <img
        src={image}
        alt=""
        className="block h-auto w-full"
      />

      {badge && <QuestBadge />}

      {children}
    </motion.div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PostedBounties() {
  return (
    <main
      className="
        relative
        w-full
        overflow-x-hidden
        bg-black
      "
    >
      {/* =====================================================
          GRID BACKGROUND

          IMPORTANT:
          This is ABSOLUTE, not FIXED.

          Therefore it belongs ONLY to PostedBounties.
          It will NOT cover the rest of your website.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        <img
          src={gridBg}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-40
          "
        />
      </div>

      {/* =====================================================
          SECTION 1
      ===================================================== */}

      <section
        className="
          relative
          z-10
          w-full
          overflow-visible
          bg-transparent
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]
            px-4
            py-12

            sm:px-6
            sm:py-16

            lg:px-0
            lg:py-20
          "
        >
          {/* ================= TITLE ================= */}

          <h1
            className="
              mx-auto
              mb-10
              w-full
              text-center
              font-orbitron
              text-3xl
              leading-tight
              text-white

              sm:mb-14
              sm:w-4/5
              sm:text-4xl

              lg:mb-16
              lg:w-1/2
              lg:text-5xl
            "
          >
            Find quests you were always meant to do
          </h1>

          {/* ================= QUEST GRID ================= */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-y-10
              

              md:grid-cols-2
              md:gap-x-5
              md:gap-y-12

              lg:grid-cols-3
              lg:gap-x-2
              lg:gap-y-0
            "
          >
            {/* =================================================
                LEFT COLUMN
            ================================================= */}

            <div
              className="
                flex
                w-full
                flex-col
                items-center
              "
            >
              {/* ================= CARD 1 ================= */}

              <QuestCard
                image={c1}
                badge
                className="mb-8"
              >
                <div
                  className="
                    absolute
                    left-[10%]
                    top-[15%]
                    w-[80%]

                    lg:left-[13%]
                    lg:top-[17%]
                    lg:w-[72%]
                  "
                >
                  <p
                    className="
                      font-robotomono
                      text-[13px]
                      leading-[19px]
                      tracking-normal
                      text-white

                      sm:text-[15px]
                      sm:leading-[23px]
                    "
                  >
                    Design a cohesive set of 10 illustrations for a mental
                    health startup’s blog.
                  </p>

                  <QuestMeta
                    duration="4 days"
                    reward="6200"
                  />
                </div>
              </QuestCard>

              {/* ================= CARD 2 ================= */}

              <QuestCard image={c2}>
                <div
                  className="
                    absolute
                    left-[15%]
                    top-[8%]
                    w-[70%]

                    lg:left-[26%]
                    lg:top-[10%]
                    lg:w-[55%]
                  "
                >
                  <p
                    className="
                      font-robotomono
                      text-[13px]
                      leading-[19px]
                      tracking-normal
                      text-white

                     
                    "
                  >
                    Missed : A bounty to design the next viral campaign.
                  </p>
                </div>
              </QuestCard>

              {/* ================= CARD 3 ================= */}

              <QuestCard
                image={c3}
                badge
                className="
                  mt-12

                  md:mt-14

                  lg:mt-[70px]
                "
              >
                <div
                  className="
                    absolute
                    right-[20%]
                    top-[22%]
                    w-[72%]

                    lg:right-[15%]
                    lg:top-[20%]
                    
                  "
                >
                  <p
                    className="
                      font-robotomono
                      text-[13px]
                      leading-[19px]
                      tracking-normal
                      text-white

                      sm:text-[15px]
                      sm:leading-[23px]
                    "
                  >
                    Design a low-fidelity wireframe for a SaaS product’s
                    homepage.
                  </p>

                  <QuestMeta
                    duration="36 hours"
                    reward="4500"
                  />
                </div>
              </QuestCard>
            </div>

            {/* =================================================
                CENTER COLUMN
            ================================================= */}

            <div
              className="
                flex
                w-full
                flex-col
                items-center
              "
            >
              {/* ================= CARD 4 ================= */}

              {/* 
                CARD 4 is intentionally slower than
                the other cards while scrolling.
              */}

              <SlowQuestCard
                image={c4}
                badge
                className="
                  md:mt-0

                  lg:mt-[75px]
                "
              >
                <div
                  className="
                    absolute
                    left-[6%]
                    top-[13%]
                    w-[62%]

                    lg:left-[20%]
                    lg:top-[15%]
                   
                  "
                >
                  <p
                    className="
                      font-robotomono
                      text-[13px]
                      leading-[19px]
                      tracking-normal
                      text-white

                      sm:text-[15px]
                      sm:leading-[23px]
                    "
                  >
                    Create a mood board for a local coffee shop rebranding
                    project.
                  </p>

                  <QuestMeta
                    duration="2 days"
                    reward="2500"
                  />
                </div>
              </SlowQuestCard>

              {/* ================= CARD 5 ================= */}

              <QuestCard
                image={c2}
                className="
                  mt-12

                  lg:mt-[100px]
                "
              >
                <div
                  className="
                    absolute
                    left-[15%]
                    top-[5%]
                    w-[70%]

                    lg:left-[27%]
                    lg:top-[4%]
                    lg:w-[50%]
                  "
                >
                  <p
                    className="
                      font-robotomono
                      text-[13px]
                      leading-[19px]
                      tracking-normal
                      text-white

                    
                    "
                  >
                    Become top hunter of the month to unlock exclusive tools
                  </p>
                </div>
              </QuestCard>
            </div>

            {/* =================================================
                RIGHT COLUMN
            ================================================= */}

            <div
              className="
                flex
                w-full
                flex-col
                items-center

                lg:items-end
              "
            >
              {/* ================= CARD 6 ================= */}

              <QuestCard
                image={c2}
                className="lg:mb-[-75px]"
              >
                <div
                  className="
                    absolute
                    left-[15%]
                    top-[8%]
                    w-[72%]

                    lg:left-[28%]
                    lg:top-[10%]
                    lg:w-[50%]
                  "
                >
                  <p
                    className="
                      font-robotomono
                      text-[13px]
                      leading-[19px]
                      tracking-normal
                      text-white

                     
                    "
                  >
                    Once in a lifetime bounty - Visuals for a film project
                  </p>
                </div>
              </QuestCard>

              {/* ================= CARD 7 ================= */}

              {/*
              <QuestCard
                image={c1}
                badge
                className="mt-12"
              >
                <div
                  className="
                    absolute
                    left-[8%]
                    top-[20%]
                    w-[72%]
                  "
                >
                  <div className="mb-3 text-center text-yellow-300">
                    <span className="text-[10px]">
                      Expiring
                    </span>

                    <br />

                    <span className="font-bold">
                      7hrs
                    </span>
                  </div>

                  <p className="text-[13px] leading-[19px] text-white sm:text-[15px] sm:leading-[23px]">
                    Design assets for a zero-waste grocery store product
                    launch.
                  </p>

                  <QuestMeta
                    duration="4 days"
                    reward="6200"
                  />
                </div>
              </QuestCard>
              */}

              {/* ================= CARD 8 ================= */}

              <QuestCard
                image={c7}
                badge
                className="
                  mt-12

                  lg:mt-[145px]
                "
              >
                <div
                  className="
                    absolute
                    left-[6%]
                    top-[14%]
                    w-[76%]

                    lg:left-[8%]
                    lg:top-[17%]
                    lg:w-[68%]
                  "
                >
                  <p
                    className="
                      font-robotomono
                      text-[13px]
                      leading-[19px]
                      tracking-normal
                      text-white

                      sm:text-[15px]
                      sm:leading-[23px]
                    "
                  >
                    Conduct a UX audit of an existing website or app
                  </p>

                  <QuestMeta
                    duration="4 days"
                    reward="5000"
                  />
                </div>
              </QuestCard>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2
      ===================================================== */}

      <section
        className="
          relative
          z-10
          min-h-screen
          w-full
          overflow-hidden
          bg-transparent
        "
      >
        {/* ================= LIGHT ================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[300px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-white/10
            blur-[120px]

            sm:h-[400px]
            sm:w-[550px]

            lg:h-[450px]
            lg:w-[650px]
            lg:blur-[160px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            py-16

            sm:px-8
            sm:py-20

            lg:px-12
            lg:py-24
          "
        >
          {/* ================= TITLE ================= */}

          <div className="text-center">
            <h2
              className="
                mx-auto
                max-w-[900px]
                font-orbitron
                text-3xl
                leading-tight
                text-white

                sm:text-4xl

                lg:text-5xl
              "
            >
              You don't wanna miss this.
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[600px]
                text-base
                leading-7
                text-gray-300

                sm:mt-5
                sm:text-lg
              "
            >
              If you are in, you already know what
              <br className="hidden sm:block" />
              we are talking about
            </p>
          </div>

          {/* ================= FEATURE CARDS ================= */}

          <div
            className="
              mt-14
              grid
              grid-cols-1
              gap-10

              sm:mt-16
              sm:grid-cols-2
              sm:gap-8

              lg:mt-20
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="text-center"
              >
                <motion.div
                  className="
                    relative
                    mx-auto
                    flex
                    justify-center
                  "
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="
                      h-44
                      w-44
                      object-contain

                      sm:h-48
                      sm:w-48

                      lg:h-52
                      lg:w-52
                    "
                  />
                </motion.div>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-[280px]
                    text-center
                    text-[17px]
                    leading-6
                    text-gray-200

                    sm:text-[18px]

                    lg:text-[19px]
                  "
                >
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}