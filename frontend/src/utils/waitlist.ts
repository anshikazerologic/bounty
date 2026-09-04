/**
 * Scrolls the page to the waitlist form section (Waitlist.tsx).
 *
 * The waitlist section is rendered on the landing page with `id="waitlist"`.
 * All landing-page "Join Waitlist" CTAs use this helper so they land on
 * the waitlist form instead of navigating away.
 */
export function scrollToWaitlist() {
  const el = document.getElementById("waitlist");
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}