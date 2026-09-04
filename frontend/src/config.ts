// Base URL of the backend API.
// Override in a `.env` file (e.g. VITE_API_URL=https://api.example.com).
export const API_BASE_URL: string =
  import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000/api";

// Expected OTP for the hunter onboarding flow.
// Hardcoded for now (1156). Swap this for a real mail-delivered OTP later.
export const HUNTER_OTP: string = import.meta.env.VITE_HUNTER_OTP ?? "1156";
