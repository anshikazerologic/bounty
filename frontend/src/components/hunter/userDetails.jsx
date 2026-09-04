import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import guildsImg from "../../assets/images/guilds.png";
import guildsBg from "../../assets/images/guildsbg.svg";

const hiddenPaths = ["/hunter/userdetails"]; // Paths where elements should be hidden

function UserDetails() {
    const location = useLocation();
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [mobile, setMobile] = useState("+91");
    const [saving, setSaving] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Change body background to guilds background on the user details page
        const originalBackground = document.body.style.background;
        document.body.style.background =
            location.pathname === "/hunter/userdetails"
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

    const fetchCityState = async (zipcode) => {
        if (zipcode.length >= 5) {
            try {
                const response = await fetch(`https://api.postalpincode.in/pincode/${zipcode}`);
                const data = await response.json();
                console.log(data);

                if (data && data[0].Status === "Success") {
                    setCity(data[0].PostOffice[0].District);  // Use district as the city name
                    setState(data[0].PostOffice[0].State);
                }
            } catch (error) {
                console.error("Error fetching location data:", error);
            }
        }
    };

    // Handle ZIP code change
    const handleZipChange = (e) => {
        const zipValue = e.target.value;
        setZip(zipValue);
        if (zipValue.length >= 5) {
            fetchCityState(zipValue);
        }
    };

    const handleMobileChange = (e) => {
        let value = e.target.value;

        // Allow numbers and spaces but prevent non-numeric characters except '+'
        value = value.replace(/[^\d+ ]/g, "");

        // Ensure +91 is always at the beginning but allow backspacing
        if (!value.startsWith("+91")) {
            value = "+91" + value.replace(/\D/g, "").slice(0, 10);
        } else {
            value = "+91" + value.slice(3).replace(/\D/g, "").slice(0, 10);
        }

        setMobile(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userInfo = {
            name: event.target.fullName.value,
            collegeName: event.target.collegeName.value,
            collegeEmail: event.target.collegeEmail.value,
            personalEmail: event.target.personalEmail.value, 
            mobileNumber: mobile,
            discipline: event.target.collegeDiscipline.value,
            graduatingYear: event.target.graduatingYear.value,
            dateOfBirth: event.target.dateOfBirth.value,
            postalZipCode: zip,
            city: city,
            state: state,
        };

        const payload = {
            name: userInfo.name,
            email: userInfo.collegeEmail,
            college_name: userInfo.collegeName,
            personal_email: userInfo.personalEmail,
            mobile_number: userInfo.mobileNumber,
            discipline: userInfo.discipline,
            graduating_year: userInfo.graduatingYear,
            date_of_birth: userInfo.dateOfBirth,
            postal_zip_code: userInfo.postalZipCode,
            city: userInfo.city,
            state: userInfo.state,
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        setSaving(true);
        setSubmitError("");

        try {
            const response = await fetch(`${API_BASE_URL}/hunter/userdetails`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.status === 409) {
                setSubmitError("This email is already registered. Please use a different email.");
                setSaving(false);
                return;
            }

            if (!response.ok) {
                setSubmitError("Something went wrong. Please try again.");
                setSaving(false);
                return;
            }

            // Capture the created record (includes id) so the registration step can
            // update this same entry with the question answers.
            const created = await response.json();
            const savedUser = { ...userInfo, id: created.id };
            localStorage.setItem("userInfo", JSON.stringify(savedUser));

            console.log("User Info Saved:", savedUser);
            // Redirect or proceed to the next step
            navigate('/registrationquestion');
        } catch (error) {
            console.error("Error saving user info:", error);
            setSubmitError("Unable to reach the server. Please try again.");
            setSaving(false);
        }
    };

    return (
        <section className="flex h-screen w-[1440px] flex-col justify-center mx-auto max-[999px]:w-full max-[999px]:h-auto">
            <div className="relative flex w-full h-screen items-center overflow-scroll bg-[url(/grids.svg)] bg-no-repeat bg-center bg-contain max-[999px]:bg-none max-[999px]:h-auto max-[999px]:overflow-hidden max-[999px]:before:absolute max-[999px]:before:top-[211px] max-[999px]:before:left-1/2 max-[999px]:before:-translate-x-1/2 max-[999px]:before:rotate-90 max-[999px]:before:w-[100vh] max-[999px]:before:h-[100vw] max-[999px]:before:content-[''] max-[999px]:before:bg-[url(/grids.svg)] max-[999px]:before:bg-no-repeat max-[999px]:before:bg-top max-[999px]:before:bg-contain max-[999px]:before:-z-10">
                <div className="w-[58%] ml-[110px] max-[999px]:w-auto max-[999px]:ml-0 max-[999px]:flex max-[999px]:flex-col max-[999px]:p-5">
                    <h1 className="mt-24 font-orbitron text-white text-5xl whitespace-nowrap max-[999px]:mt-2.5 max-[999px]:text-3xl max-[999px]:text-center">Become A Bounty Hunter</h1>
                    <form className="mt-10 w-[600px] h-[720px] overflow-y-scroll overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[999px]:w-full max-[999px]:h-auto" onSubmit={handleSubmit}>
                        <div className="flex justify-between mb-10 max-[999px]:flex-col max-[999px]:mb-2.5">
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">Full Name</label>
                                <input type="text" name="fullName" placeholder="Jane Doe" className="userForm border border-white bg-transparent text-white w-[208.5%] h-[60px] text-base px-4 placeholder:text-white/30 max-[999px]:w-full" required/>
                            </div>
                        </div>

                        <div className="flex justify-between mb-10 max-[999px]:flex-col max-[999px]:mb-2.5">
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">College Email ID</label>
                                <input type="email" name="collegeEmail" placeholder="jane@abcinstitute.co.in" className="userForm border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30" required/>
                            </div>
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">College Name</label>
                                <input type="text" name="collegeName" placeholder="ABC Institute" className="userForm border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30" />
                            </div>
                        </div>

                        <div className="flex justify-between mb-10 max-[999px]:flex-col max-[999px]:mb-2.5">
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">Personal Email ID</label>
                                <input type="email" name="personalEmail" placeholder="+jane@gmail.co.in" className="userForm border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30" required/>
                            </div>
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">Mobile Number</label>
                                <input type="text" value={mobile} onChange={handleMobileChange} className="userForm border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30" maxLength="13" required/>
                            </div>
                        </div>

                        <div className="flex justify-between mb-10 max-[999px]:flex-col max-[999px]:mb-2.5">
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">College Discipline</label>
                                <input type="text" name="collegeDiscipline" placeholder="Eg: Visual Design" className="userForm border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30" required/>
                            </div>
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">Graduating Year</label>
                                <select name="graduatingYear" className="w-full border border-white bg-transparent text-white h-[60px] text-base px-4">
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-between mb-10 max-[999px]:flex-col max-[999px]:mb-2.5">
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">Date Of Birth</label>
                                <input type="date" name="dateOfBirth" className="userForm border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30" required/>
                            </div>
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">Postal Zip Code</label>
                                <input type="number" value={zip} onChange={handleZipChange} className="userForm border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30" name="zip" placeholder="Eg: 201301" required/>
                            </div>
                        </div>

                        <div className="flex justify-between mb-10 max-[999px]:flex-col max-[999px]:mb-2.5">
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">City</label>
                                <input type="text" value={city} readOnly className="userForm border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30" name="city" placeholder="Noida" required/>
                            </div>
                            <div className="flex flex-col w-[48%] max-[999px]:w-full max-[999px]:mb-2.5">
                                <label className="text-white max-[999px]:my-2.5">State</label>
                                <input type="text" value={state} readOnly className="userForm border border-white bg-transparent text-white w-full h-[60px] text-base px-4 placeholder:text-white/30" name="state" placeholder="Uttar Pradesh" required/>
                            </div>
                        </div>

                        {submitError && (
                            <p className="text-red-500 text-sm mt-4 max-[999px]:w-full">
                                {submitError}
                            </p>
                        )}

                        <button type="submit" disabled={saving} className="mx-auto block bg-white text-black rounded-lg px-12 py-4 font-robotomono text-base mt-5 mb-[90px]">
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

export default UserDetails;