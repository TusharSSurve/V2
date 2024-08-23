import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Particles from "./components/magicui/particles"
import Main from "./components/Main";
import { useDarkmode } from "./lib/hooks";

function App() {
  const isDark = useDarkmode();
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Particles
        className="fixed inset-0 h-screen overflow-hidden -z-10 opacity-70"
        quantity={45}
        staticity={250}
        ease={50}
        color={`${isDark ? "#66fcf1" : ""}`}
        refresh
      />
    </>
  )
}

export default App
