import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import guildsBg from "../../assets/images/guildsbg.svg";

const hiddenPaths = ["/hunterDetails"]; // Paths where elements should be hidden

function HunterDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [randomNumber, setRandomNumber] = useState(0);
    const [errors, setErrors] = useState({ username: "", password: "", confirmPassword: "" });

    useEffect(() => {
        // Generate random number between 2000 and 4000 on component mount
        setRandomNumber(Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000);

        // Load existing user details from localStorage
        const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
        setUsername(userDetails.username || "");
        setPassword(userDetails.password || "");

        // Change body background to guilds background on the details page
        const originalBackground = document.body.style.background;
        document.body.style.background =
            location.pathname === "/hunterDetails"
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

    const usernameRegex = /^[a-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

    const validateForm = () => {
        let valid = true;
        let newErrors = { username: "", password: "", confirmPassword: "" };

        if (!usernameRegex.test(username)) {
            newErrors.username = "All characters should be lowercase, with no spaces.";
            valid = false;
        }
        if (!passwordRegex.test(password)) {
            newErrors.password = "Password must be at least 8 characters long and include at least one letter & one number.";
            valid = false;
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
            valid = false;
        }
        setPassword(password);
        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            navigate("/hunterGuildTest");
        }
    };

    const inputClass =
        "border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30 outline-none focus:border-white";

    return (
        <section className="flex h-screen w-[1440px] flex-col justify-center mx-auto max-[999px]:w-full max-[999px]:h-auto">
            <div className="relative flex w-full h-screen items-center justify-center overflow-scroll bg-[url(/grids.svg)] bg-no-repeat bg-center bg-contain max-[999px]:bg-none max-[999px]:h-auto max-[999px]:overflow-hidden max-[999px]:before:absolute max-[999px]:before:top-[211px] max-[999px]:before:left-1/2 max-[999px]:before:-translate-x-1/2 max-[999px]:before:rotate-90 max-[999px]:before:w-[100vh] max-[999px]:before:h-[100vw] max-[999px]:before:content-[''] max-[999px]:before:bg-[url(/grids.svg)] max-[999px]:before:bg-no-repeat max-[999px]:before:bg-top max-[999px]:before:bg-contain max-[999px]:before:-z-10">
                <div className="w-[58%] max-w-[600px] max-[999px]:w-auto max-[999px]:flex max-[999px]:flex-col max-[999px]:p-5 max-[999px]:text-center">
                    <h2 className="font-orbitron text-white text-4xl leading-tight uppercase max-[999px]:text-2xl">
                        {randomNumber} others await, <br /> but we feel you have what it takes.
                    </h2>
                    <p className="text-white/50 text-lg max-w-[480px] mt-6 mb-7">
                        Choose your username carefully, as this will be your calling card in the journey ahead.
                    </p>

                    <form className="flex flex-col w-full max-w-[600px] text-left" onSubmit={handleSubmit}>
                        <label htmlFor="username" className="text-white mb-2.5">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Eg: sneha_thakur0906"
                            className={`${inputClass} lowercase`}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <p className="text-cyan-400 font-robotomono text-sm mt-1.5">{errors.username}</p>}

                        <label htmlFor="password" className="text-white mt-4 mb-2.5">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Eg: helloworld123"
                            className={inputClass}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-cyan-400 font-robotomono text-sm mt-1.5">{errors.password}</p>}

                        <label htmlFor="confirmPassword" className="text-white mt-4 mb-2.5">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-enter password"
                            className={inputClass}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <p className="text-cyan-400 font-robotomono text-sm mt-1.5">{errors.confirmPassword}</p>}

                        <div className="flex justify-between mt-10 w-full max-w-[600px]">
                            <button type="button" onClick={() => navigate("/hunterLanding")} className="bg-white text-black rounded-lg px-12 py-4 font-robotomono text-base hover:bg-cyan-400 transition w-[188px] max-[999px]:w-[48%]">
                                Back
                            </button>
                            <button type="submit" className="bg-white text-black rounded-lg px-12 py-4 font-robotomono text-base hover:bg-cyan-400 transition w-[188px] max-[999px]:w-[48%]">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default HunterDetails;