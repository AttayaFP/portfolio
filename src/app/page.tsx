import Hero from "@/components/home/hero"
import About from "@/components/home/about"
import Skill from "@/components/home/skill"
import Project from "@/components/home/project"
import Kontak from "@/components/home/kontak"
import Footer from "@/components/home/footer"


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Skill />
      <Project />  
      <Kontak />
      <Footer />
    </div>
  )
}
