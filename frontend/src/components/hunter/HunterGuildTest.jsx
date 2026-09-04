import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import guildsBg from "../../assets/images/guildsbg.svg";

const hiddenPaths = ["/hunterGuildTest"];

function HunterGuildTest() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        // Change body background to guilds background
        const originalBackground = document.body.style.background;
        document.body.style.background =
            location.pathname === "/hunterGuildTest"
                ? `#000 url(${guildsBg}) no-repeat center center / cover`
                : originalBackground;

        // Hide elements if needed
        const shouldHide = hiddenPaths.includes(location.pathname);
        document.querySelector(".gr")?.style.setProperty("display", shouldHide ? "none" : "block");
        document.querySelector(".fadedGr")?.style.setProperty("display", shouldHide ? "none" : "block");

        return () => {
            document.body.style.background = originalBackground;
            document.querySelector(".gr")?.style.setProperty("display", "block");
            document.querySelector(".fadedGr")?.style.setProperty("display", "block");
        };
    }, [location]);

    const handleSelection = (event) => {
        setSelectedAnswer(event.target.dataset.answer);
    };

    const handleNext = () => {
        if (selectedAnswer) {
            localStorage.setItem("guild", selectedAnswer);
            navigate("/hunter/yourGuild");
        } else {
            alert("Please select an answer before proceeding.");
        }
    };

    const options = [
        { value: "Nexus Collective", text: "The strategist who analyzes the situation and creates a detailed plan to ensure success." },
        { value: "Chrome Syndicate", text: "The minimalist who focuses on streamlining tasks and creating efficient workflows." },
        { value: "Specter Union", text: "The storyteller who ensures the project has a cohesive and engaging narrative." },
        { value: "Ember Vanguard", text: "The visionary who inspires bold ideas and drives the team with energy and passion." },
    ];

    return (
        <section className="flex h-screen w-[1440px] flex-col justify-center mx-auto max-[999px]:w-full max-[999px]:h-auto">
            <div className="relative flex w-full h-screen items-center justify-center overflow-scroll bg-[url(/grids.svg)] bg-no-repeat bg-center bg-contain max-[999px]:bg-none max-[999px]:h-auto max-[999px]:overflow-hidden max-[999px]:before:absolute max-[999px]:before:top-[211px] max-[999px]:before:left-1/2 max-[999px]:before:-translate-x-1/2 max-[999px]:before:rotate-90 max-[999px]:before:w-[100vh] max-[999px]:before:h-[100vw] max-[999px]:before:content-[''] max-[999px]:before:bg-[url(/grids.svg)] max-[999px]:before:bg-no-repeat max-[999px]:before:bg-top max-[999px]:before:bg-contain max-[999px]:before:-z-10">
                <div className="w-[58%] max-w-[990px] max-[999px]:w-auto max-[999px]:flex max-[999px]:flex-col max-[999px]:p-5 max-[999px]:text-center">
                    <p className="text-white/50 text-base">Just one question before you proceed-</p>
                    <h5 className="mt-2.5 font-orbitron text-white text-2xl max-[999px]:text-xl">
                        In a team project, which role do you naturally gravitate towards?
                    </h5>

                    <form className="mt-[60px] flex flex-col items-start w-full max-w-[990px]">
                        {options.map((option, index) => (
                            <div className="mb-4 flex items-center" key={index}>
                                <input
                                    type="radio"
                                    name="guild"
                                    value={option.value}
                                    data-answer={option.value}
                                    onChange={handleSelection}
                                    className="w-[18px] h-[18px] mr-2.5 accent-white"
                                />
                                <label className="font-light text-white/90">{option.text}</label>
                            </div>
                        ))}
                    </form>

                    <button
                        type="button"
                        onClick={handleNext}
                        className="bg-white text-black rounded-lg px-8 py-4 font-robotomono text-lg w-[120px] mt-10 hover:bg-cyan-400 transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HunterGuildTest;