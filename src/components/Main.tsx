import About from "./About";
import Projects from "./Projects";

export default function Main() {
  return (
    <main className="flex flex-col gap-12">
      <About />
      <Projects />
    </main>
  )
}
