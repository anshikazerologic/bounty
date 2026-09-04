import { useState } from "react";
import bgImage from "../../assets/images/waitlistbg.jpg";
import { API_BASE_URL } from "../../config";

const STATUS_OPTIONS = [
  "College Student",
  "Experienced Freelancer",
  "Moonlighter",
  "Fresher",
];

const inputClass =
  "w-full h-14 bg-transparent border border-gray-500 rounded-md px-4 text-white placeholder-gray-400 focus:border-white outline-none";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [path, setPath] = useState("Designer");
  const [status, setStatus] = useState(STATUS_OPTIONS[0]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(false);

    const payload = { name, email, contact, city, path, status };

    try {
      const response = await fetch(`${API_BASE_URL}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.status === 409) {
        setError("This email is already on the waitlist.");
        setLoading(false);
        return;
      }

      if (!response.ok) {
        setError("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setContact("");
      setCity("");
      setPath("Designer");
      setStatus(STATUS_OPTIONS[0]);
      setLoading(false);
    } catch {
      setError("Unable to reach the server. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-20 scroll-mt-20"
     style={{
    backgroundImage: `url(${bgImage})`,
  }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight tracking-tight max-w-3xl">
            Your mission, should you choose to accept it.
          </h1>

          <p className="mt-5 text-xl text-gray-300">
            Join our exclusive waitlist and become one of the first members.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10">
          {success ? (
            <div className="text-center py-12">
              <p className="text-3xl text-white font-semibold mb-3">
                🎉 You&apos;re on the list!
              </p>
              <p className="text-lg text-gray-300">
                Thanks for joining. We&apos;ll be in touch soon.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-8 px-8 h-12 bg-white text-black rounded-md font-semibold uppercase tracking-[0.25em] hover:bg-gray-200 transition"
              >
                Join another
              </button>
            </div>
          ) : (
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit}
            >

            {/* Name */}
            <div>
              <label className="text-white block mb-2">
                Name *
              </label>

              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white block mb-2">
                E-mail *
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={inputClass}
              />
            </div>

            {/* Contact */}
            <div>
              <label className="text-white block mb-2">
                Contact *
              </label>

              <input
                type="tel"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter contact number"
                className={inputClass}
              />
            </div>

            {/* City */}
            <div>
              <label className="text-white block mb-2">
                City *
              </label>

              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className={inputClass}
              />
            </div>

            {/* Path */}
            <div>
              <label className="text-white block mb-3">
                Choose your path
              </label>

              <div className="flex gap-8 h-14 items-center border border-gray-500 rounded-md px-5">

                <label className="flex items-center gap-2 text-white">
                  <input
                    type="radio"
                    checked={path === "Designer"}
                    onChange={() => setPath("Designer")}
                    className="accent-white"
                  />
                  Designer
                </label>

                <label className="flex items-center gap-2 text-white">
                  <input
                    type="radio"
                    checked={path === "Coder"}
                    onChange={() => setPath("Coder")}
                    className="accent-white"
                  />
                  Coder
                </label>

              </div>
            </div>

            {/* Status */}
            <div>
              <label className="text-white block mb-2">
                Current Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={inputClass}
              >
                {STATUS_OPTIONS.map((option) => (
                  <option key={option} className="bg-black">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Feedback */}
            {(error || loading) && (
              <div className="md:col-span-2">
                {error && <p className="text-red-400 text-sm">{error}</p>}
                {loading && (
                  <p className="text-gray-300 text-sm">
                    Joining the waitlist...
                  </p>
                )}
              </div>
            )}

            {/* Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-white text-black rounded-md font-semibold uppercase tracking-[0.25em] hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "JOINING..." : "I WANT IN"}
              </button>
            </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}