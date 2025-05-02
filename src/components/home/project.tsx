import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"

export default function project() {
    return (
        <section id="project" className="py-20 bg-gradient-to-b from-blue-950 to-black">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project reflects my passion for creating beautiful, functional,
              and user-friendly applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured online store with payment processing, inventory management, and admin dashboard."
              image="/placeholder.svg?height=300&width=500"
              tags={["Next.js", "Tailwind CSS", "Stripe", "MongoDB"]}
              link="#"
              delay={0.1}
            />
            <ProjectCard
              title="Social Media Dashboard"
              description="Analytics dashboard for social media managers with real-time data visualization and reporting."
              image="/placeholder.svg?height=300&width=500"
              tags={["React", "D3.js", "Node.js", "Firebase"]}
              link="#"
              delay={0.3}
            />
            <ProjectCard
              title="Task Management App"
              description="Collaborative task management application with real-time updates and team collaboration features."
              image="/placeholder.svg?height=300&width=500"
              tags={["TypeScript", "Redux", "Express", "PostgreSQL"]}
              link="#"
              delay={0.5}
            />
            <ProjectCard
              title="Portfolio Website"
              description="Modern portfolio website with animations and responsive design for a photographer."
              image="/placeholder.svg?height=300&width=500"
              tags={["Next.js", "Framer Motion", "Tailwind CSS"]}
              link="#"
              delay={0.7}
            />
            <ProjectCard
              title="Weather Application"
              description="Real-time weather application with location detection and 7-day forecast."
              image="/placeholder.svg?height=300&width=500"
              tags={["React", "OpenWeather API", "Geolocation"]}
              link="#"
              delay={0.9}
            />
            <ProjectCard
              title="Fitness Tracker"
              description="Mobile-first fitness tracking application with workout plans and progress visualization."
              image="/placeholder.svg?height=300&width=500"
              tags={["React Native", "GraphQL", "MongoDB"]}
              link="#"
              delay={1.1}
            />
          </div>

          <div className="text-center mt-12">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700">View All Projects</Button>
          </div>
        </div>
      </section>
    )
}