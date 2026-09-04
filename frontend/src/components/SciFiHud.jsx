import TypingAnimation from './TypeAnimation';


const SciFiHUD = ({ paragraph, animationDelay }) => {
    return (
        <div className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="997"
                height="162"
                viewBox="0 0 997 162"
                fill="none"
                className="animate-flicker"
            >
                <path d="M276.5 15L284.5 1H991.5L996 5.5V134.625V151L986 161H897.25L892.5 152.25H827.5L822.75 161H15L1 147V9L8 2H60.5L67.5 15H276.5Z" stroke="#00DAFA" />
                <path d="M70.5 11.5L65 1.5H279L273 11.5H70.5Z" fill="#03B2CB" />
                <path d="M829.63 155L826.5 161H893.5L890.445 155H829.63Z" fill="#03B2CB" />
                <path d="M282.113 19.775L290 6H988V10.1063V127.933V142.875V155.5H902.639L898 147.5H822.266L818 155.5H17.5L7 145V13.3L13.9015 6.9125H55.6628L62.5643 19.775H282.113Z" fill="#03B2CB" />
            </svg>

            <TypingAnimation paragraph={paragraph} startDelay={animationDelay} />
        </div>
    );
};

export default SciFiHUD;

