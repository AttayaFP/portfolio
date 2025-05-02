import Link from "next/link"
import { Github, Linkedin, Mail} from "lucide-react"

export default function footer() {
    return (
        <footer className="py-8 border-t border-blue-900/50 bg-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-blue-400">Attaya Fiqri Pradana</h2>
              <p className="text-gray-400">Developer</p>
            </div>

            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-900/30 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} AttayaFiqriPradana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}