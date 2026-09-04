import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HUNTER_OTP } from "../../config";
import guildsBg from "../../assets/images/guildsbg.svg";

const hiddenPaths = ["/hunterLanding"];

// Hunter onboarding — the OTP ("Secret Code") entry screen.
// Same visual treatment as the userdetails page: black + guilds background, white font.
function HunterLanding() {
    const location = useLocation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    useEffect(() => {
        // Change body background to guilds background on the onboarding page
        const originalBackground = document.body.style.background;
        document.body.style.background =
            location.pathname === "/hunterLanding"
                ? `#000 url(${guildsBg}) no-repeat center center / cover`
                : originalBackground;

        // Hide global elements if needed
        const shouldHide = hiddenPaths.includes(location.pathname);
        document.querySelector(".gr")?.style.setProperty("display", shouldHide ? "none" : "block");
        document.querySelector(".fadedGr")?.style.setProperty("display", shouldHide ? "none" : "block");

        return () => {
            document.body.style.background = originalBackground;
            document.querySelector(".gr")?.style.setProperty("display", "block");
            document.querySelector(".fadedGr")?.style.setProperty("display", "block");
        };
    }, [location]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage("");

        if (!email.trim()) {
            setMessage("⚠ Please enter your registered email.");
            setLoading(false);
            return;
        }

        // OTP mail-sending is not wired up yet — we validate against the value in env
        // (defaults to 1156). Replace this with a real verify-otp API call later.
        if (otp.trim() === HUNTER_OTP) {
            setMessage("✅ Verification successful! Welcome aboard.");
            localStorage.setItem("email", email.trim());

            setTimeout(() => {
                navigate("/hunterDetails");
            }, 1500);
        } else {
            setMessage("❌ Invalid secret code. Please try again.");
        }

        setLoading(false);
    };

    return (
        <section className="flex h-screen w-[1440px] flex-col justify-center mx-auto max-[999px]:w-full max-[999px]:h-auto">
            <div className="relative flex w-full h-screen items-center justify-center bg-[url(/grids.svg)] bg-no-repeat bg-center bg-contain max-[999px]:bg-none max-[999px]:h-auto max-[999px]:overflow-y-auto">
                <div className="w-[520px] max-w-[90%] flex flex-col">
                    <h1 className="font-orbitron text-white text-4xl text-center max-[999px]:mt-10 max-[999px]:text-2xl">
                        HUNTER ONBOARDING
                    </h1>
                    <p className="text-white/70 text-center text-base mt-3 mb-8">
                        Enter the secret code that was shared with you to unlock the guild.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <label className="text-white mb-2.5">Registered College Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="College email-ID"
                                className="border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30 outline-none focus:border-white"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white mb-2.5">Secret Code</label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="123456"
                                className="border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30 outline-none focus:border-white"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                required
                            />
                        </div>

                        {message && (
                            <p className="text-white/90 text-sm text-center">{message}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="mx-auto bg-white text-black rounded-lg px-12 py-4 font-robotomono text-base mt-2 hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Processing..." : "Enter"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default HunterLanding;
