import { useEffect, useRef, useState } from "react";

function TypingAnimation({ paragraph, startDelay = 0, speed = 25 }) {
    const [displayed, setDisplayed] = useState("");
    const [started, setStarted] = useState(startDelay === 0);
    const intervalRef = useRef(null);

    useEffect(() => {
        let startTimer;
        if (startDelay > 0) {
            startTimer = setTimeout(() => setStarted(true), startDelay);
        } else {
            setStarted(true);
        }
        return () => clearTimeout(startTimer);
    }, [startDelay]);

    useEffect(() => {
        if (!started) return;

        let index = 0;
        setDisplayed("");
        intervalRef.current = setInterval(() => {
            index += 1;
            setDisplayed(paragraph.slice(0, index));
            if (index >= paragraph.length) {
                clearInterval(intervalRef.current);
            }
        }, speed);

        return () => clearInterval(intervalRef.current);
    }, [started, paragraph, speed]);

    return (
        <p
            className="animate-fade-in absolute ml-[30px] max-w-[900px] font-robotomono text-[18px] leading-[25px] text-[#000] opacity-0"
            style={{ margin: 0 }}
        >
            {displayed}
        </p>
    );
}

export default TypingAnimation;
