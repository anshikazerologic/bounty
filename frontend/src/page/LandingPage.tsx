import FAQSection from '../components/landingpage/FAQSection'
import GuildHero from '../components/landingpage/GuildHero'
import Hero from '../components/landingpage/Hero'
import LimitedSeats from '../components/landingpage/LimitedSeats'
import ParallaxContent from '../components/landingpage/ParallaxContent'
import PostedBounties from '../components/landingpage/PostedBounties'
import RizzSection from '../components/landingpage/RizzSection'
import Waitlist from '../components/landingpage/Waitlist'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const LandingPage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <ParallaxContent/>
    <GuildHero/>
    <RizzSection/>
    <PostedBounties/>
    <LimitedSeats/>
    <Waitlist/>
    <FAQSection/>
    <Footer/>
    </>
  )
}

export default LandingPage