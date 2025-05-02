
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail} from "lucide-react"

export default function kontak() {
    return (
        <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-300">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
              </p>
            </div>

            <div className="bg-blue-950/50 p-8 rounded-2xl border border-blue-500/20 animate-fadeIn">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-blue-900/30 border border-blue-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-blue-900/30 border border-blue-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-blue-900/30 border border-blue-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-blue-900/30 border border-blue-700/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <Button className="w-full py-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-lg font-medium">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fadeIn">
              <div className="bg-blue-950/30 p-6 rounded-xl border border-blue-500/20 text-center hover:bg-blue-900/30 transition-colors">
                <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-gray-300">attaya040404@gmail.com</p>
              </div>
              <div className="bg-blue-950/30 p-6 rounded-xl border border-blue-500/20 text-center hover:bg-blue-900/30 transition-colors">
                <Github className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-medium mb-2">GitHub</h3>
                <p className="text-gray-300">github.com/AttayaFP</p>
              </div>
              <div className="bg-blue-950/30 p-6 rounded-xl border border-blue-500/20 text-center hover:bg-blue-900/30 transition-colors">
                <Linkedin className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-medium mb-2">Instagram</h3>
                <p className="text-gray-300">_atayafp</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}