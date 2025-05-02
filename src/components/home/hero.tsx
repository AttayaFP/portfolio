import Link from "next/link"
import Image from "next/image"
import AnimatedText from "@/components/animated-text"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 z-0"></div>

        <div className="container px-4 mx-auto z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-50 h-50 rounded-full overflow-hidden border-4 border-blue-500 mb-4 animate-fadeIn">
              <Image src="/assets/images/6.jpeg" alt="Profile" fill className="object-cover" />
            </div>

            <AnimatedText text="Attaya Fiqri Pradana" className="text-3xl md:text-5xl font-bold text-white" />

            <AnimatedText
              text="Developer"
              className="text-xl md:text-3xl font-medium text-blue-400"
              delay={0.5}
            />

            <p
              className="max-w-2xl text-gray-300 animate-fadeIn opacity-0"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
             Saya seorang pengembang web yang berpengalaman dalam menciptakan aplikasi web yang responsif dan menarik. Saya memiliki keahlian dalam berbagai teknologi dan alat, termasuk HTML, CSS, JavaScript, dan framework modern seperti React dan Next.js. Saya selalu berusaha untuk memberikan pengalaman pengguna yang luar biasa melalui desain yang intuitif dan fungsionalitas yang kuat.
            </p>

            <div
              className="flex space-x-4 mt-8 animate-fadeIn opacity-0"
              style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
            >
              <Button variant="outline" className="rounded-full border-blue-500 text-blue-400 hover:bg-blue-900/30">
              <a href="#project">View Projects</a>
                
              </Button>
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
              <a href="https://wa.me/622287140724">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-blue-400" />
        </div>

        <div className="absolute top-8 right-8 flex space-x-4">
          <Link href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:contact@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </section>
    )
}   