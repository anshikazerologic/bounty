import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import guildsImg from "../../assets/images/guilds.png";
import guildsBg from "../../assets/images/guildsbg.svg";

const hiddenPaths = ["/registrationquestion"]; // Paths where elements should be hidden

function RegistrationQuestion() {
    const location = useLocation();
    const navigate = useNavigate();
    const [answers, setAnswers] = useState(["", ""]); // Store answers for both textareas
    const [saving, setSaving] = useState(false);
    const [submitError, setSubmitError] = useState("");

    // Same visual treatment as the userdetails page.
    useEffect(() => {
        const originalBackground = document.body.style.background;
        document.body.style.background =
            location.pathname === "/registrationquestion"
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

    const handleInputChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleNextClick = async () => {
        const existingData = JSON.parse(localStorage.getItem("userInfo")) || {};

        if (!existingData.id) {
            setSubmitError("User details are missing. Please go back and fill the form.");
            return;
        }

        const payload = {
            question_one_answer: answers[0] || "",
            question_two_answer: answers[1] || "",
        };

        setSaving(true);
        setSubmitError("");

        try {
            const response = await fetch(`${API_BASE_URL}/hunter/userdetails/${existingData.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                setSubmitError("Something went wrong. Please try again.");
                setSaving(false);
                return;
            }

            console.log("Question answers saved:", payload);
            navigate('/hunterPopup');
        } catch (error) {
            console.error("Error registering:", error);
            setSubmitError("Unable to reach the server. Please try again.");
            setSaving(false);
        }
    };
const questions = [
        "If you wake up tomorrow and design as a profession does not exist, what will your next steps be?",
        "What was the last time that you did something you were proud of? What was it?",
    ];

    const placeholders = [
        "Panic and go into a spiral (jk I will stick to my singing talent)",
        "I hit the gym regularly for a month!",
    ];

    return (
        <section className="flex h-screen w-[1440px] flex-col justify-center mx-auto max-[999px]:w-full max-[999px]:h-auto">
            <div className="relative flex w-full h-screen items-center overflow-scroll bg-[url(/grids.svg)] bg-no-repeat bg-center bg-contain max-[999px]:bg-none max-[999px]:h-auto max-[999px]:overflow-hidden max-[999px]:before:absolute max-[999px]:before:top-[211px] max-[999px]:before:left-1/2 max-[999px]:before:-translate-x-1/2 max-[999px]:before:rotate-90 max-[999px]:before:w-[100vh] max-[999px]:before:h-[100vw] max-[999px]:before:content-[''] max-[999px]:before:bg-[url(/grids.svg)] max-[999px]:before:bg-no-repeat max-[999px]:before:bg-top max-[999px]:before:bg-contain max-[999px]:before:-z-10">
                <div className="w-[58%] ml-[110px] max-[999px]:w-auto max-[999px]:ml-0 max-[999px]:flex max-[999px]:flex-col max-[999px]:p-5">
                    <h1 className="mt-24 font-orbitron text-white text-6xl whitespace-nowrap max-[999px]:mt-2.5 max-[999px]:text-2xl max-[999px]:text-center">Become A Bounty Hunter</h1>

                    <form
                        id="registration-form"
                        className="mt-[60px] flex flex-col justify-start w-full"
                    >
                        {questions.map((question, index) => (
                            <div key={index} className="mb-10 w-full">
                                <label className="block text-white mb-2.5 text-base">{question}</label>
                                <textarea
                                    rows={index === 0 ? 6 : 3}
                                    placeholder={placeholders[index]}
                                    value={answers[index]}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    className="w-full rounded-lg border border-white bg-transparent text-white text-base px-4 py-3 placeholder:text-white/30 outline-none focus:border-white min-h-[100px]"
                                />
                            </div>
                        ))}

                        {submitError && (
                            <p className="text-red-500 text-sm mt-4">{submitError}</p>
                        )}

                        <button
                            type="button"
                            disabled={saving}
                            onClick={handleNextClick}
                            className="mx-auto block bg-white text-black rounded-lg px-12 py-4 font-robotomono text-base mt-5"
                        >
                            {saving ? "Saving..." : "Next"}
                        </button>
                    </form>
                </div>

                <div className="w-[40%] max-[999px]:hidden">
                    <img src={guildsImg} className="right-0 bottom-0 max-[999px]:hidden" alt="Guilds" />
                </div>
            </div>
        </section>
    );
}

export default RegistrationQuestion;