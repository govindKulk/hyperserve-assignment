import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Zap, GraduationCap } from "lucide-react"
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      title: "Trend-Watching Subscription",
      description: "Stay ahead with our AI development and technology adoption trend analysis.",
      icon: <Eye className="h-8 w-8 mb-4 text-blue-400" />,
      cta: "Subscribe →",
      link: "#subscribe"
    },
    {
      title: "Transformation as a Service",
      description: "Transform your business with AI & Automation through our 3-step process.",
      icon: <Zap className="h-8 w-8 mb-4 text-yellow-400" />,
      cta: "Talk to us →",
      link: "#talk"
    },
    {
      title: "Skilling Subscription",
      description: "Access tutorials, assignments, and projects for various professions.",
      icon: <GraduationCap className="h-8 w-8 mb-4 text-green-400" />,
      cta: "Get Membership →",
      link: "#membership"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Services.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800 text-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm mb-4">{service.description}</p>
                <Link 
                  href={service.link}
                  className="inline-block border border-gray-100 px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  {service.cta}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-12 mx-auto">
        <p className="text-sm text-gray-400 text-center">© 2023 by NextCorp Innovation Labs</p>
      </div>
    </section>
  )
}