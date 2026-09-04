import { Routes, Route } from "react-router-dom";
import LandingPage from './page/LandingPage'
import UserDetails from '../src/components/hunter/userDetails'
import RegistrationQuestion from '../src/components/hunter/registrationQuestion'
import WaitList from '../src/components/hunter/WaitList'
import HunterLanding from '../src/components/hunter/HunterLanding'
import HunterDetails from '../src/components/hunter/HunterDetails'
import HunterGuildTest from '../src/components/hunter/HunterGuildTest'
import YourGuild from '../src/components/hunter/YourGuild'
import Term from '../src/components/hunter/Term'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hunterLanding" element={<HunterLanding />} />
        <Route path="/hunter/hunterDetails" element={<HunterDetails />} />
        <Route path="/hunter/hunterGuildTest" element={<HunterGuildTest />} />
        <Route path="/hunter/yourGuild" element={<YourGuild />} />
        <Route path="/hunter/term" element={<Term />} />
        <Route path="/hunter/userdetails" element={<UserDetails />} />
        <Route path="/hunter/registrationquestion" element={<RegistrationQuestion />} />
        <Route path="/hunterPopup" element={<WaitList />} />
      </Routes>
    </>
  )
}

export default App