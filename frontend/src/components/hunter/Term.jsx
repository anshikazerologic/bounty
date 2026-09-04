import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import guildsBg from "../../assets/images/guildsbg.svg";
import SciFiHUD from "../SciFiHud";
import DailogPopup from "../DailogPopup";

const hiddenPaths = ["/hunter/term"];

function Term() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDialogActive, setIsDialogActive] = useState(false);

    useEffect(() => {
        // Change body background (same guilds background as the other hunter pages)
        const originalBackground = document.body.style.background;
        document.body.style.background =
            location.pathname === "/hunter/term"
                ? `#000 url(${guildsBg}) no-repeat center center / cover`
                : originalBackground;

        // Check if the current path is in the hiddenPaths array
        const shouldHide = hiddenPaths.includes(location.pathname);
        document.querySelector(".gr")?.style.setProperty("display", shouldHide ? "none" : "block");
        document.querySelector(".fadedGr")?.style.setProperty("display", shouldHide ? "none" : "block");

        return () => {
            document.body.style.background = originalBackground;
            document.querySelector(".gr")?.style.setProperty("display", "block");
            document.querySelector(".fadedGr")?.style.setProperty("display", "block");
        };
    }, [location]);

    const handleDisagree = () => {
        setIsDialogActive(true);
    };

    const handleAgree = () => {
        navigate("/agree");
    };

    useEffect(() => {
        console.log("Dialog state updated:", isDialogActive);
    }, [isDialogActive]);

    return (
        <>
            <section className="flex min-h-screen w-full items-center justify-center overflow-hidden px-8 py-12 text-white">
                <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
                    <h2 className="font-orbitron mb-10 text-[clamp(1.4rem,3vw,2.5rem)] leading-[1.2] uppercase tracking-[2px] text-white [text-shadow:0_0_18px_rgba(255,59,59,0.55)]">
                        THE CODE THAT ALL BOUNTY<br/> HUNTERS MUST LIVE BY
                    </h2>

                    <section className="flex w-full max-w-[900px] flex-col gap-8">
                        <SciFiHUD paragraph="All Bounty Hunters must always strive to complete their bounties on time, and create the best work that they can. Victory may not always be in your hands, but that should not deter you from your path" />
                        <SciFiHUD paragraph="Once a Bounty Hunter takes up a bounty, they are duty bound to complete that bounty come what may." animationDelay={5000} />
                    </section>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                        <button
                            className="font-robotomono min-w-[200px] cursor-pointer rounded-lg border border-transparent bg-[#ff3b3b] px-8 py-4 text-[1.05rem] uppercase tracking-[1px] text-white transition-all duration-200 ease-out hover:-translate-y-[2px] hover:bg-[#e22f2f] max-[600px]:px-5 max-[600px]:py-3 max-[600px]:text-[0.85rem]"
                            onClick={handleDisagree}
                        >
                            Disagree
                        </button>
                        <button
                            className="font-robotomono min-w-[200px] max-w-[283px] cursor-pointer rounded-lg border border-transparent bg-white px-8 py-4 text-[1.05rem] uppercase tracking-[1px] text-black transition-all duration-200 ease-out hover:-translate-y-[2px] hover:bg-[#4cc9f0] hover:text-white"
                            onClick={handleAgree}
                        >
                            I Accept These Terms
                        </button>
                    </div>

                    <DailogPopup active={isDialogActive} setActive={setIsDialogActive} caption="You would not be allowed to register to the platform if you disagree to the terms." />
                </div>
            </section>
        </>
    );
}

export default Term;