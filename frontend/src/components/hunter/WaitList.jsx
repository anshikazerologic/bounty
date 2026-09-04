import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import guildsBg from "../../assets/images/guildsbg.svg";
import queryImg from "../../assets/images/Query.svg";
import logoImg from "../../assets/images/logo.svg";


const hiddenPaths = ["/hunterPopup"];

function WaitList() {
    const location = useLocation();
    const navigate = useNavigate();

    
    useEffect(() => {
        const originalBackground = document.body.style.background;
        document.body.style.background =
            location.pathname === "/hunterPopup"
                ? `#000 url(${guildsBg}) no-repeat center center / cover`
                : originalBackground;

        const shouldHide = hiddenPaths.includes(location.pathname);
        document.querySelector(".gr")?.style.setProperty("display", shouldHide ? "none" : "block");
        document.querySelector(".fadedGr")?.style.setProperty("display", shouldHide ? "none" : "block");

        return () => {
            document.body.style.background = originalBackground;
            document.querySelector(".gr")?.style.setProperty("display", "block");
            document.querySelector(".fadedGr")?.style.setProperty("display", "block");
        };
    }, [location]);

    return (
        <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
           
            <div className="relative z-10 w-[586px] h-[500px] max-w-[90%] max-[999px]:w-[340px] max-[999px]:h-[440px]">
                <img
                    src={queryImg}
                    alt="Query card"
                    className="absolute inset-0 w-full h-full object-contain"
                />

                {/* Content overlaid on the Query card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
                    <img
                        src={logoImg}
                        alt="Bounty Hunter"
                        className="w-[81px] h-[79px] max-[999px]:w-[60px] max-[999px]:h-[58px]"
                    />

                    <h2 className="font-orbitron text-white text-4xl text-center max-[999px]:text-2xl">
                        INTEL RECEIVED. WAITLIST SECURED!
                    </h2>

                    <p className="text-white/80 text-base text-center max-w-[440px] max-[999px]:text-sm">
                        Your details are logged. If luck is on your side, an exclusive
                        access code to the Bounty Hunter Guild will arrive in your email
                        within the next 48 hours.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/hunterLanding")}
                        className="bg-white text-black rounded-lg px-12 py-4 font-robotomono text-base transition hover:bg-gray-200 mt-8"
                    >
                        Roger That
                    </button>
                </div>
            </div>
        </section>
    );
}

export default WaitList;