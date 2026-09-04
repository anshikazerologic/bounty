import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { scrollToWaitlist } from "../../utils/waitlist";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Bounty Hunters"
            className="h-12 w-auto"
          />
        </Link>

        {/* CTA Button */}
        <button
          onClick={scrollToWaitlist}
          className="cursor-pointer rounded-lg border-2 border-white px-6 py-3 font-orbitron text-white transition-all duration-300 hover:border-violet-500 hover:bg-violet-500"
        >
          JOIN WAITLIST
        </button>
      </div>
    </header>
  );
}