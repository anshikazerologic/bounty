import { useNavigate } from "react-router-dom";

function DailogPopup({ active, setActive, caption }) {
    const navigate = useNavigate();
    if (!active) return null;
    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/[0.82] p-6 backdrop-blur-sm max-[600px]:p-4">
            <div id="popMainDailog" className="relative w-full max-w-[689px]">
                <div className="block w-full animate-fade-in-down-big">
                    <svg xmlns="http://www.w3.org/2000/svg" width="689" height="445" viewBox="0 0 689 445" fill="none" className="block h-auto w-full">
                        <path d="M13.9643 31.4137L34.8062 10.5325H198.322L228.27 40.4804H440.574L474.015 7H646.441L675.486 36.0451V409.112L647.501 437.059H433.823L411.765 415H54.3527L10 370.687V35.4564L13.9643 31.4137Z" fill="#1A1A1A" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M675.486 36.0451V408.74L647.501 436.686H433.823L411.765 414.628H54.3527L10 370.314V35.4564L13.9643 31.4137L34.8062 10.5325H198.322L228.27 40.4804H440.574L474.015 7H646.441L675.486 36.0451ZM474.369 7.82429L441.124 41.0691L440.927 41.3047H227.956L227.76 41.0691L198.048 11.3568H35.1594L14.5531 32.0024L10.8243 35.7704V370L54.706 413.882H412.118L412.353 414.117L434.176 435.94H647.226L674.701 408.426V36.3984L646.167 7.82429H474.369Z" fill="url(#paint0_linear_1534_17059)" />
                        <path opacity="0.1" d="M156.718 11.0033L131.715 36.1234H41.5577L27.0744 50.5674V226.212L10.2754 209.374V35.4561L35.003 10.7285L156.718 11.0033Z" fill="url(#paint1_linear_1534_17059)" />
                        <path opacity="0.1" d="M646.442 168V387.369L625.679 408.132H458.551H385.389L378.363 415.158H411.765L433.745 437.138H647.502L675.526 409.114V197.045L646.442 168Z" fill="url(#paint2_linear_1534_17059)" />
                        <g filter="url(#filter0_f_1534_17059)">
                            <path d="M220.657 15.0071L238.908 33.2584H365.529L389.354 9.43359H215.279L220.657 15.0071Z" fill="url(#paint3_linear_1534_17059)" />
                        </g>
                        <g filter="url(#filter1_f_1534_17059)">
                            <path d="M399.832 9.43359L375.732 33.2584H397.281L421.106 9.43359" fill="url(#paint4_linear_1534_17059)" />
                        </g>
                        <g filter="url(#filter2_f_1534_17059)">
                            <path d="M429.467 9.43359L405.328 33.2584H426.876L450.701 9.43359" fill="url(#paint5_linear_1534_17059)" />
                        </g>
                        <path d="M220.657 15.0071L238.908 33.2584H365.529L389.354 9.43359H215.279L220.657 15.0071Z" fill="url(#paint6_linear_1534_17059)" />
                        <path d="M399.832 9.43359L375.732 33.2584H397.281L421.106 9.43359" fill="url(#paint7_linear_1534_17059)" />
                        <path d="M429.467 9.43359L405.328 33.2584H426.876L450.701 9.43359" fill="url(#paint8_linear_1534_17059)" />
                        <g filter="url(#filter3_f_1534_17059)">
                            <path d="M11.9623 388.158L43.7549 419.951H346.531L356.853 430.313H11.2559V387.373L11.9623 388.158Z" fill="url(#paint9_linear_1534_17059)" />
                        </g>
                        <g filter="url(#filter4_f_1534_17059)">
                            <path d="M353.519 419.832L363.802 430.116H372.948L362.35 419.519H353.283C353.283 419.519 353.519 419.872 353.519 419.832Z" fill="url(#paint10_linear_1534_17059)" />
                        </g>
                        <g filter="url(#filter5_f_1534_17059)">
                            <path d="M368.511 419.832L378.755 430.116H387.9L377.342 419.519H368.275C368.275 419.519 368.472 419.872 368.511 419.832Z" fill="url(#paint11_linear_1534_17059)" />
                        </g>
                        <g filter="url(#filter6_f_1534_17059)">
                            <path d="M382.13 419.832L392.374 430.116H401.52L390.961 419.519H381.895C381.895 419.519 382.13 419.872 382.13 419.832Z" fill="url(#paint12_linear_1534_17059)" />
                        </g>
                        <g filter="url(#filter7_f_1534_17059)">
                            <path d="M395.751 419.832L406.035 430.116H415.141L404.582 419.519H395.516C395.516 419.519 395.751 419.872 395.751 419.832Z" fill="url(#paint13_linear_1534_17059)" />
                        </g>
                        <path d="M11.9623 388.158L43.7549 419.951H346.531L356.853 430.313H11.2559V387.373L11.9623 388.158Z" fill="url(#paint14_linear_1534_17059)" />
                        <path d="M353.519 419.832L363.802 430.116H372.948L362.35 419.519H353.283C353.283 419.519 353.519 419.872 353.519 419.832Z" fill="url(#paint15_linear_1534_17059)" />
                        <path d="M368.511 419.832L378.755 430.116H387.9L377.342 419.519H368.275C368.275 419.519 368.472 419.872 368.511 419.832Z" fill="url(#paint16_linear_1534_17059)" />
                        <path d="M382.13 419.832L392.374 430.116H401.52L390.961 419.519H381.895C381.895 419.519 382.13 419.872 382.13 419.832Z" fill="url(#paint17_linear_1534_17059)" />
                        <path d="M395.751 419.832L406.035 430.116H415.141L404.582 419.519H395.516C395.516 419.519 395.751 419.872 395.751 419.832Z" fill="url(#paint18_linear_1534_17059)" />
                        <g filter="url(#filter8_f_1534_17059)">
                            <path d="M674.703 337.008L681.101 343.406V414.37L658.415 437.096H585.566L579.914 431.444H514.249L509.578 426.773H647.111L675.528 398.395C675.528 398.395 675.567 336.184 674.703 337.008Z" fill="url(#paint19_linear_1534_17059)" />
                        </g>
                        <path d="M674.703 337.008L681.101 343.406V414.37L658.415 437.096H585.566L579.914 431.444H514.249L509.578 426.773H647.111L675.528 398.395C675.528 398.395 675.567 336.184 674.703 337.008Z" fill="url(#paint20_linear_1534_17059)" />
                        <defs>
                            <filter id="filter0_f_1534_17059" x="206.667" y="0.821428" width="191.299" height="41.049" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="4.30608" result="effect1_foregroundBlur_1534_17059" />
                            </filter>
                            <filter id="filter1_f_1534_17059" x="367.12" y="0.821428" width="62.5974" height="41.049" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="4.30608" result="effect1_foregroundBlur_1534_17059" />
                            </filter>
                            <filter id="filter2_f_1534_17059" x="396.716" y="0.821428" width="62.5974" height="41.049" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="4.30608" result="effect1_foregroundBlur_1534_17059" />
                            </filter>
                            <filter id="filter3_f_1534_17059" x="0.368783" y="376.486" width="367.372" height="64.7136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="5.44354" result="effect1_foregroundBlur_1534_17059" />
                            </filter>
                            <filter id="filter4_f_1534_17059" x="342.396" y="408.631" width="41.4382" height="32.3718" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="5.44354" result="effect1_foregroundBlur_1534_17059" />
                            </filter>
                            <filter id="filter5_f_1534_17059" x="357.388" y="408.631" width="41.3992" height="32.3718" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="5.44354" result="effect1_foregroundBlur_1534_17059" />
                            </filter>
                            <filter id="filter6_f_1534_17059" x="371.007" y="408.631" width="41.3992" height="32.3718" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="5.44354" result="effect1_foregroundBlur_1534_17059" />
                            </filter>
                            <filter id="filter7_f_1534_17059" x="384.629" y="408.631" width="41.3992" height="32.3718" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="5.44354" result="effect1_foregroundBlur_1534_17059" />
                            </filter>
                            <filter id="filter8_f_1534_17059" x="502.591" y="330.013" width="185.498" height="114.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="3.49361" result="effect1_foregroundBlur_1534_17059" />
                            </filter>
                            <linearGradient id="paint0_linear_1534_17059" x1="-216.247" y1="-17.0419" x2="1070.85" y2="465.55" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1534_17059" x1="-39.511" y1="-1.32828" x2="275.022" y2="50.4205" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1534_17059" x1="277.336" y1="152.941" x2="889.154" y2="316.48" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_1534_17059" x1="156.099" y1="8.10054" x2="249.106" y2="172.614" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_1534_17059" x1="360.307" y1="8.10054" x2="442.852" y2="46.1583" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_1534_17059" x1="389.903" y1="8.10054" x2="472.448" y2="46.1581" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_1534_17059" x1="156.099" y1="8.10054" x2="249.106" y2="172.614" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_1534_17059" x1="360.307" y1="8.10054" x2="442.852" y2="46.1583" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_1534_17059" x1="389.903" y1="8.10054" x2="472.448" y2="46.1581" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_1534_17059" x1="-106.238" y1="384.97" x2="52.7064" y2="694.668" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint10_linear_1534_17059" x1="346.598" y1="418.926" x2="382.693" y2="435.14" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint11_linear_1534_17059" x1="361.603" y1="418.926" x2="397.651" y2="435.086" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint12_linear_1534_17059" x1="375.223" y1="418.926" x2="411.27" y2="435.086" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint13_linear_1534_17059" x1="388.844" y1="418.926" x2="424.891" y2="435.086" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint14_linear_1534_17059" x1="-106.238" y1="384.97" x2="52.7064" y2="694.668" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint15_linear_1534_17059" x1="346.598" y1="418.926" x2="382.693" y2="435.14" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint16_linear_1534_17059" x1="361.603" y1="418.926" x2="397.651" y2="435.086" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint17_linear_1534_17059" x1="375.223" y1="418.926" x2="411.27" y2="435.086" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint18_linear_1534_17059" x1="388.844" y1="418.926" x2="424.891" y2="435.086" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint19_linear_1534_17059" x1="451.265" y1="331.399" x2="774.084" y2="465.32" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                            <linearGradient id="paint20_linear_1534_17059" x1="451.265" y1="331.399" x2="774.084" y2="465.32" gradientUnits="userSpaceOnUse">
                                <stop offset="0.125" stop-color="#D613B8" />
                                <stop offset="0.49" stop-color="#5813B1" />
                                <stop offset="0.825" stop-color="#00DAFA" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div
                        className="group absolute right-[6%] top-[6%] z-[5] cursor-pointer p-2 opacity-90 transition-opacity duration-200 hover:opacity-100 animate-fade-in-down-big"
                        onClick={() => setActive(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90">
                            <path d="M21 7L7 21" stroke="#FAFAFA" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 7L21 21" stroke="#FAFAFA" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <section className="absolute inset-0 z-[4] m-auto flex h-fit w-[75%] flex-col items-center text-center animate-fade-in-down-big max-[600px]:w-[82%]">
                        <h3 className="font-orbitron mb-5 max-w-[520px] text-[clamp(0.95rem,1.9vw,1.4rem)] font-semibold leading-[1.6] text-white [text-shadow:0_0_14px_rgba(0,218,250,0.55)] max-[600px]:text-[0.95rem] max-[600px]:leading-[1.5]">
                            {caption}
                        </h3>

                        <div className="flex items-center justify-center gap-2.5">
                            <button
                                className="font-robotomono mx-2.5 h-[56px] min-w-[200px] cursor-pointer rounded-lg border border-transparent bg-[#ff3b3b] px-8 py-4 text-[1.05rem] uppercase tracking-[1px] text-white transition-[background-color,color,transform] duration-200 ease-out hover:-translate-y-[2px] hover:bg-[#e22f2f] max-[600px]:px-5 max-[600px]:py-3 max-[600px]:text-[0.85rem]"
                                onClick={() => navigate('/start')}
                            >
                                I Disagree
                            </button>
                        </div>
                    </section>
            </div>
        </div>
    );
}

export default DailogPopup;
