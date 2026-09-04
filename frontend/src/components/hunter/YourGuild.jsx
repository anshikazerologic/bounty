import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import guildsBg from "../../assets/images/guildsbg.svg";
import img01 from "../../assets/images/01.png";
import img02 from "../../assets/images/02.png";
import img03 from "../../assets/images/03.png";
import img04 from "../../assets/images/04.png";
import img01Lg from "../../assets/images/01-lg.png";
import img02Lg from "../../assets/images/02-lg.png";
import img03Lg from "../../assets/images/03-lg.png";
import img04Lg from "../../assets/images/04-lg.png";

const hiddenPaths = ["/hunter/yourGuild"];

function YourGuild() {
    const location = useLocation();
    const navigate = useNavigate();

    const guild = localStorage.getItem("guild");

    useEffect(() => {
        // Change body background to guilds background
        const originalBackground = document.body.style.background;
        document.body.style.background =
            location.pathname === "/hunter/yourGuild"
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

    const handleSubmit = async () => {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        const email = localStorage.getItem("email");

        const payload = {
            username,
            password,
            guild,
        };

        try {
            const response = await fetch(
                `${API_BASE_URL}/hunters/complete-profile/${email}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Guild selection updated successfully!");
                navigate("/hunter/term");
            } else {
                alert(`Error: ${data.message || "Failed to update guild status"}`);
            }
        } catch (error) {
            console.error("Error updating guild:", error);
            alert("Network error! Please try again.");
        }
    };

    const guildWrappers = [
        {
            guild: "Ember Vanguard",
            activeIndex: 1,
            images: [img01, img02Lg, img03, img04],
        },
        {
            guild: "Specter Union",
            activeIndex: 1,
            images: [img02, img01Lg, img03, img04],
        },
        {
            guild: "Nexus Collective",
            activeIndex: 1,
            images: [img02,img03Lg,img01, img04],
        },
        {
            guild: "Chrome Syndicate",
            activeIndex: 1,
            images: [img02,img04Lg, img01, img03],
        },
    ];
    return (
        <section className="flex h-screen w-full items-center justify-center bg-black text-white overflow-hidden">
            <div className="flex flex-col items-center justify-center w-full max-w-[1440px] text-center px-6">
                <h3 className="text-white text-2xl">You have been assigned the Guild:</h3>
                <h2 className="font-orbitron text-red-500 text-5xl mt-2.5 uppercase">
                    {guild ? guild.toUpperCase() : "LOADING..."}
                </h2>

                <p className="text-white/80 w-[70%] text-lg mt-6">
                    Hunters in this guild often have the persona of The Visionary – daring, trailblazing, and full of intensity. It's on you to keep up this legacy.
                </p>
                <div className="flex flex-wrap justify-center gap-10 mt-10">
                    {guildWrappers.map((wrapper) => (
                        <div
                            key={wrapper.guild}
                            style={{
                                display:
                                    guild === wrapper.guild
                                        ? "contents"
                                        : "none",
                            }}
                            data-answer={wrapper.guild}
                        >
                            {wrapper.images.map((img, idx) => (
                                <div
                                    key={img}
                                    className={`w-[180px] flex-col justify-center my-10 mx-5 ${
                                        idx === wrapper.activeIndex
                                            ? "guildActive w-[300px]"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src={img}
                                        alt={wrapper.guild}
                                        className={idx === wrapper.activeIndex ? "mt-2.5" : ""}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex justify-end w-[70%]">
                    <button
                        onClick={handleSubmit}
                        className="bg-white text-black rounded-lg px-8 py-4 font-robotomono text-base mt-2.5 h-14 w-[290px] hover:bg-cyan-400 transition"
                    >
                        Enter the Bounty World
                    </button>
                </div>
            </div>
        </section>
    );
}

export default YourGuild;

